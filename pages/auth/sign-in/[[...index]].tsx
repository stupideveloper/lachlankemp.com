import { useSignIn } from "@clerk/nextjs";
import Button from "components/atoms/Button";
import Input from "components/atoms/Input";
import InputLabel from "components/atoms/InputLabel";
import AuthWrapper from "components/templates/AuthWrapper";
import { useState } from "react";
import parseError, { APIResponseError } from "lib/auth/errors";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "components/functional/Head";
import { withServerSideAuth } from "@clerk/nextjs/ssr";
export default function SignInPage({ initalstage, senttoemail, callback }) {
  const { isLoaded, signIn } = useSignIn();
  const [error, setError] = useState("");
  const [stage, setStage] = useState(initalstage);
  const [email, setEmail] = useState(senttoemail);
  const router = useRouter();
  const signUpUrl = new URL(process.env.BASE_PATH + '/auth/sign-up');
  if (callback) signUpUrl.searchParams.set("callback", callback);

  const callbackURL = `${process.env.BASE_PATH}${callback}`;
  const sendClerkOtp = async function (emailAddress) {
    await signIn.create({
      identifier: emailAddress,
      strategy: "email_link",
      redirectUrl: callbackURL,
    });
  };
  async function submit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const email = `${data.get("email")}`;
    setEmail(email);

    try {
      await sendClerkOtp(email);
      setStage("await");

      const url = new URL(window.location.href);
      url.searchParams.set("email", email);
      url.searchParams.set("stage", "await");

      router.replace(url, null, { shallow: true });
    } catch (err) {
      setError(parseError(err as APIResponseError));
    }
  }
  if (!isLoaded || !signIn) <></>;
  return (
    <AuthWrapper>
      <Head url={"https://lachlankemp.com/auth/sign-in"} description={"Sign in to lachlankemp.com"} title={"Sign in"} />
      <h1 className="text-5xl font-black">Sign In</h1>
      <p className="mt-2 mb-6">
        Login to <code>lachlankemp.com</code>.
      </p>
      {stage == "create" && (
        <>
          <div className="flex flex-col w-min gap-y-2 mb-6">
            <Button
              flavor="primary"
              onClick={() => {
                signIn.authenticateWithRedirect({
                  strategy: "oauth_github",
                  redirectUrlComplete: callbackURL,
                  redirectUrl: `${process.env.BASE_PATH}/auth/github/callback`,
                });
              }}
              showskeleton={!isLoaded}
            >
              Login with Github
            </Button>
          </div>
          <hr className="border-slate-600 mb-4" />

          <form onSubmit={submit}>
            <div className="mb-4">
              <InputLabel showskeleton={!isLoaded} htmlFor="email">
                Email Address
              </InputLabel>
              <Input
                showskeleton={!isLoaded}
                id="email"
                name="email"
                type="email"
                required
              />
              <p className="text-sm mt-1 text-red-400">{error}</p>
            </div>
            <Button showskeleton={!isLoaded} flavor="secondary">
              Send magic link
            </Button>
          </form>
          <p className="mt-4 text-gray-300">
            Don&apos;t have an account?{" "}
            <Link href={signUpUrl}>
              <a className="text-blue-500">Sign Up</a>
            </Link>
          </p>
        </>
      )}
      {stage == "await" && (
        <p>
          I just sent an email to:{" "}
          <span className="text-green-400">{email}</span>. Check your inbox for
          a magic link to login.
        </p>
      )}
    </AuthWrapper>
  );
}

// @ts-expect-error
export const getServerSideProps = withServerSideAuth((context) => {  
  const { sessionId }  = context.req.auth;

  if (sessionId) {
    return { redirect: { destination: "/profile" } }; 
  }
  return {
    props: {
      initalstage: context.query.stage ? context.query.stage : "create",
      senttoemail: context.query.email ? context.query.email : "",
      callback: context.query.callback ? context.query.callback : "",
    },
  };
});
