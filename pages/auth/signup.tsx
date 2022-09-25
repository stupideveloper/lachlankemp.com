import AuthWrapper from "components/templates/AuthWrapper";
import Head from "components/functional/Head";
export default function SignUpPage() {
  return (
    <AuthWrapper authtype="signup">
      <Head url={"https://lachlankemp.com/auth/signup"} description={"Sign up to lachlankemp.com"} title={"Sign up"} />	
			<h1 className="text-5xl font-black mb-6">Sign up</h1>
    </AuthWrapper>
  );
}
      
// Github login
{/* <div className="flex flex-col w-min gap-y-2 mb-6">
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
<hr className="border-slate-600 mb-4" /> */}