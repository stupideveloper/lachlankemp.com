import Link from "next/link";
import { signIn, useSession } from 'next-auth/react';
import Button from "components/atoms/Button";
import Input from "components/atoms/Input";
import InputLabel from "components/atoms/InputLabel";
import { useState } from "react";

import Box from "components/atoms/Box";
import { Dialog, Transition } from '@headlessui/react'
import { InboxInIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";

function ConfirmModal({ show = false, email = '', authtype = 'login' }) {
  function close(){}
  return (
 
    <Dialog className="relative z-50 fadeIn" open={show} onClose={close}>
      <div className="fixed inset-0 bg-slate-900/95" aria-hidden="true" />
      <div className="fixed inset-6 flex items-center justify-center ">
        <Dialog.Panel className="w-full max-w-xl">
          <Box>
            <div className="flex gap-x-4">
              <div>
                <Dialog.Title as={'h2'} className={"text-4xl text-light font-black mb-2"}>Confirm your email</Dialog.Title>
          
                <p>
                  I&apos;ve emailed a magic link to <strong>{email}</strong>. Check your inbox (and spam) for the link to {authtype}. 
                </p>
              </div>
              <InboxInIcon className="stroke-light w-16 md:w-36 hidden md:block" />
            </div>
          </Box>
        </Dialog.Panel>
      </div>
    </Dialog>
  )

}

export function AuthPageLayout({children}) {
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
        </div>
      </div>
      <div className="grow bg-gradient-to-b from-indigo-800 to-slate-900"></div>
    </div>
  )
}
export default function AuthWrapper({ children,	authtype } : { children: React.ReactNode, authtype: "login" | "signup" }) {
  const {status} = useSession()
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  if (status === 'authenticated') {
		router.push('/profile')
	}

  const signupLink = new URL(`/auth/signup`, process.env.BASE_PATH);
  // @ts-ignore
  signupLink.searchParams.set("callback", router.query.callback || "/");

  const loginLink = new URL(`/auth/login`, process.env.BASE_PATH);
  // @ts-ignore
  signupLink.searchParams.set("callback", router.query.callback || "/");

  const handleEmailSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)

    const { elements } = event.target;
    try {
      // Perform sign in
      const { error } = await signIn('email', {
        email: elements.email.value,
        redirect: false,
        callbackUrl: `${window.location.origin}/auth/email-success?callback=${router.query.callback ? router.query.callback : '/'}`,
      });
      // Something went wrong
      if (error) {
        throw new Error(error);
      }
      setEmail(elements.email.value);

      setShowModal(true);
      setLoading(false)
    } catch(error) {
      // handle error here (eg. display message to user)
      setLoading(false)
      console.log("ERROR: ", error)
    }
  }
  return (
    <AuthPageLayout>
      <ConfirmModal show={showModal} email={email} authtype={authtype} />
      {children}
      <form onSubmit={handleEmailSubmit}>
        <div className="mb-4">
          <InputLabel htmlFor="email">Login with an Email Address</InputLabel>
          <Input id="email" name="email" type="email" placeholder="john@acme.com" required />
        </div>
        <Button flavor="primary" isloading={loading}>Send magic link</Button>
      </form>

      {authtype === "login" && (
        <p className="mb-4 mt-4 text-slate-400">
          Don&apos;t have an account?{" "}
          <Link href={signupLink}>
            <a className="link">Sign up</a>
          </Link>
        </p>
      )}
      {authtype === "signup" && (
        <p className="mb-4 mt-4 text-slate-400">
          Already have an account?{" "}
          <Link href={loginLink}>
            <a className="link">Login</a>
          </Link>
        </p>
      )}
    </AuthPageLayout>
  );
}
