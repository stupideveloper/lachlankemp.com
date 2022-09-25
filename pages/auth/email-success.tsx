import { AuthPageLayout } from "components/templates/AuthWrapper";
import Head from "components/functional/Head";
import { ShieldCheckIcon } from "@heroicons/react/outline";
import Button from "components/atoms/Button";
import { useRouter } from "next/router";
import InputLabel from "components/atoms/InputLabel";
import Input from "components/atoms/Input";
import { useSession, signOut } from 'next-auth/react'
import { useState } from "react";


export default function ConfirmRequest() {
	const router = useRouter()
	const { status, data:session } = useSession()
	const [name, setName] = useState('')
	const [loading, setLoading] = useState(false)
	function onChange(e) {
		setName(e.target.value)
	}
	function onSubmit(e) {
		e.preventDefault()
		const { callback = "/" } = router.query
		setLoading(true)
		
    fetch(`/api/auth/user`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        
      })
    })
    .then(res => res.json())
    .then(data => {
			// @ts-ignore
      router.push(callback)
    })
	}


	return <AuthPageLayout>
		<Head url={"https://lachlankemp.com/auth/email-success"} description={"Successfully logged in to lachlankemp.com"} title={"Success!"} />	
		<ShieldCheckIcon width={100} className={"-translate-x-2 mb-3 stroke-light"} />
		<h1 className="mb-1 lg:text-5xl text-4xl">Success!</h1>
		<h2 className="mb-2 lg:text-4xl text-2xl">You&apos;re halfway there.</h2>
		<p className="mb-4">Before you log in, you must set your first name.</p>


		<form action="" onSubmit={onSubmit}>
			<InputLabel htmlFor="name" showskeleton={status === "loading"}>First Name</InputLabel>
    	<Input onChange={onChange} required className="mb-4" id="name" showskeleton={status === "loading"} placeholder={session?.user?.name ? session?.user?.name : "John"} />
			<Button isloading={loading} disabled={name.length < 3} flavor="primary" type="submit">Continue</Button>
			
		</form>
	
	</AuthPageLayout>
}