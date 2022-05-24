import AuthWrapper from "components/templates/AuthWrapper";
import Head from "components/functional/Head";
export default function LoginPage() {
  return (
    <AuthWrapper authtype="login">
      <Head url={"https://lachlankemp.com/auth/login"} description={"Login to lachlankemp.com"} title={"Login"} />	
			<h1 className="text-5xl font-black mb-6">Login</h1>
 
    </AuthWrapper>
  );
}