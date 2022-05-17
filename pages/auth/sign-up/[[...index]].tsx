import { withServerSideAuth } from "@clerk/nextjs/ssr";
import { useSignUp } from "@clerk/nextjs";
import Button from "components/atoms/Button";
import Input from "components/atoms/Input";
import InputLabel from "components/atoms/InputLabel";
import AuthWrapper from "components/templates/AuthWrapper";
import { useState } from "react";
import parseError, { APIResponseError } from "lib/auth/errors";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "components/functional/Head";

export default function SignUpPage({ initalstage, senttoemail, callback }) {
  const { isLoaded, signUp } = useSignUp();
  const [error, setError] = useState("");
  const [stage, setStage] = useState(initalstage);
  const [email, setEmail] = useState(senttoemail);
  const router = useRouter();
  const signInUrl = new URL(process.env.BASE_PATH + '/auth/sign-in');
  if (callback) signInUrl.searchParams.set("callback", callback);

  const callbackURL = `${process.env.BASE_PATH}${callback ? callback : ""}`;

  const sendClerkOtp = async function (emailAddress, firstName) {
    const signUpAttempt = await signUp.create({
      emailAddress,
      firstName
    });
    
    signUpAttempt.prepareVerification({
      strategy: "email_link",
      redirectUrl: callbackURL,
    });
  };

  async function submit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const email = `${data.get("email")}`;
    const firstName = `${data.get("first_name")}`;
    setEmail(email);

    try {
      await sendClerkOtp(email, firstName);
      setStage("await");

      const url = new URL(window.location.href);
      url.searchParams.set("email", email);
      url.searchParams.set("stage", "await");

      router.replace(url, null, { shallow: true });
    } catch (err) {
      setError(parseError(err as APIResponseError));
    }
  }
  return (
    <AuthWrapper>
      <Head url={"https://lachlankemp.com/auth/sign-up"} description={"Sign up to lachlankemp.com"} title={"Sign up"} />

      <h1 className="text-5xl font-black">Sign Up</h1>
      <p className="mt-2 mb-6">
        Create a <code>lachlankemp.com</code> account.
      </p>

      {stage == "create" && (
        <>
          <div className="flex flex-col w-min gap-y-2 mb-6">
            <Button
              flavor="primary"
              onClick={() => {
                signUp.authenticateWithRedirect({
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
            <div className="flex mb-4 sm:mb-2 gap-2 flex-col sm:flex-row">
              <div>
                <InputLabel showskeleton={!isLoaded}  htmlFor="first_name">
                  First Name (public)
                </InputLabel>
                <Input showskeleton={!isLoaded}  id="first_name" name="first_name" type="text" required />
              </div>
              <div>
                <InputLabel showskeleton={!isLoaded}  htmlFor="email">Email Address</InputLabel>
                <Input showskeleton={!isLoaded}  id="email" name="email" type="email" required />
              </div>
            </div>

            <p className="text-sm mt-1 text-red-400">{error}</p>

            <Button showskeleton={!isLoaded} flavor="secondary">Send magic link</Button>
          </form>
          <p className="mt-4 text-gray-300">
            Already have an account?{" "}
            <Link href={signInUrl}>
              <a className="text-blue-500">Sign In</a>
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
