import Link from "next/link";
import { Magic } from "magic-sdk";
import Button from "components/atoms/Button";
import Input from "components/atoms/Input";
import InputLabel from "components/atoms/InputLabel";
import { useState } from "react";
import { useRouter } from "next/router";

import "react-phone-number-input/style.css";

import PhoneInput from "react-phone-number-input";

export default function AuthWrapper({ children,	authtype } : { children: React.ReactNode, authtype: "login" | "signup" }) {
  const router = useRouter();
  const handleEmailSubmit = async (event) => {
    event.preventDefault();

    const { elements } = event.target;
    const did = await new Magic(
      process.env.NEXT_PUBLIC_MAGIC_PUB_KEY
    ).auth.loginWithMagicLink({ email: elements.email.value  });

    const authRequest = await fetch("/api/auth/login", {
      method: "POST",
      headers: { Authorization: `Bearer ${did}` },
    });

    if (authRequest.ok) {
      router.push("/profile");
    } else {
      console.error(authRequest.statusText);
    }
  };

  return (
    <div className="flex h-screen">
      <Link href={"/"}>
        <a>
          <img
            src="/images/logo-light.svg"
            className="fixed top-8 left-8"
            alt="logo"
            width={70}
            height={70}
          />
        </a>
      </Link>
      <div className="bg-gray-900 p-8 flex items-center flex-row w-full sm:w-auto xl:w-1/3 lg:w-1/2">
        <div className="w-full">
          {children}
			
  
          <form onSubmit={handleEmailSubmit}>
            <div className="mb-4">
              <InputLabel htmlFor="email">Login with an Email Address</InputLabel>
              <Input id="email" name="email" type="email" placeholder="john@acme.com" required />
            </div>
            <Button flavor="secondary">Send magic link</Button>
          </form>
          
        
          

					{authtype === "login" && (
						<p className="mb-4 mt-4 text-slate-400">
							Don&apos;t have an account?{" "}
							<Link href="/auth/signup">
								<a className="link">Sign up</a>
							</Link>
						</p>
					)}
					{authtype === "signup" && (
						<p className="mb-4 mt-4 text-slate-400">
							Already have an account?{" "}
							<Link href="/auth/login">
								<a className="link">Login</a>
							</Link>
						</p>
					)}
        </div>
      </div>
      <div className="grow bg-gradient-to-b from-indigo-800 to-slate-900"></div>
    </div>
  );
}
