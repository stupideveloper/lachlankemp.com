import StandardPage from "components/templates/StandardPage";
import Button from "components/atoms/Button";
import { useRouter } from "next/router";
import Skeleton from "react-loading-skeleton";
import Box from "components/atoms/Box";
import { useState, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import ButtonGroup from "components/atoms/ButtonGroup";
import { useSession, signOut } from 'next-auth/react'
import gravatar from 'gravatar'
import useSWR, { useSWRConfig } from 'swr';
import fetcher from "lib/utils/fetcher";
import Input from "components/atoms/Input";
import InputLabel from "components/atoms/InputLabel";

function DeleteModal({isOpen, setIsOpen}) {
  const router = useRouter();

  async function deleteAccount() {
    await signOut();
    router.push('/auth/sign-in?callback=/profile');
  }
  return (
    <Dialog className="relative z-50" open={isOpen} onClose={() => setIsOpen(false)}>
			<div className="fixed inset-0 bg-black/90" aria-hidden="true" />
			<div className="fixed inset-6 flex items-center justify-center ">
				<Dialog.Panel className="w-full max-w-lg">
					<Box>
						<Dialog.Title as={'h2'} className={"text-4xl text-light font-black"}>Are you sure you want to deactivate your account?</Dialog.Title>
						<Dialog.Description className={"mb-2 text-red-400 font-semibold"}>
							This will permanently deactivate your account!
						</Dialog.Description>

						<p className="mb-6">
							Are you sure you want to deactivate your account? All of your data
							will be permanently removed.
						</p>
						<ButtonGroup>
							<Button flavor="danger" onClick={deleteAccount}>Deactivate</Button>
							<Button flavor="ghost" onClick={() => setIsOpen(false)}>Cancel</Button>
						</ButtonGroup>
					</Box>
				</Dialog.Panel>
			</div>
    </Dialog>
  )
}

export default function Profile() {
  const { status } = useSession()
  const { mutate } = useSWRConfig()
  const router = useRouter();
	const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const { data:session, error } = useSWR<any>(`/api/auth/user`, fetcher);

  const [updateLoading, setUpdateLoading] = useState(false)

  useEffect(()=>{
    if (status === 'unauthenticated') {
      router.push('/auth/signup')
    }
  }, [status])

  function changeName(event) {
    event.preventDefault()

    setUpdateLoading(true)

    const name = event.target.name.value
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
      event.target.name.value = ''
      mutate('/api/auth/user')
      setUpdateLoading(false)

    })
  }

  return (
    <StandardPage
      title="Profile"
      description={`Your lachlankemp.com profile.`}
      url="https://lachlankemp.com/profile"
    >
     
			<DeleteModal isOpen={deleteModalOpen} setIsOpen={setDeleteModalOpen} />
        <div className="flex flex-col">
          {status === "loading" && (
            <>
              <Skeleton
                width={"14rem"}
                borderRadius={"1.5rem"}
                className={"mb-2"}
                height={"14rem"}
              />
              <Skeleton height={50} width={150} />
              <Skeleton height={20} width={200} className={"mb-2"} />
            </>
          )}
          {status === "authenticated" && (
            <>
              <div>
                {session?.user?.email && (
                  <img
                  src={gravatar.url(session?.user?.email, {
                    s: '200',
                    r: 'pg',
                    d: 'retro',

                  })}
                  className="h-56 fadeIn rounded-3xl mb-2"
                  alt={`${session?.user?.email}'s profile picture`}
                  />
                )} 
              </div>
              <h1>{session?.user?.name ? session?.user?.name : session?.user?.email}</h1>
         
            </>
          )}
          <form onSubmit={changeName} action="" className="flex flex-col max-w-sm mb-6 mt-4"> 
            <InputLabel showskeleton={status === "loading"} htmlFor="email">Email:</InputLabel>
            <Input showskeleton={status === "loading"} id="email" value={session?.user?.email ? session?.user?.email : "Loading..."} disabled={true} />
            <p className="mb-2 mt-1 text-slate-400 text-sm">* This controls your avatar via <a href="https://gravatar.com" className="link">Gravatar</a> and cannot be changed.</p>  
            <InputLabel htmlFor="name" showskeleton={status === "loading"}>First Name</InputLabel>
            <Input required className="mb-4" id="name" showskeleton={status === "loading"} placeholder={session?.user?.name ? session?.user?.name : "John"} />
            
            <ButtonGroup>
              <Button type="submit" flavor="primary" showskeleton={status === "loading"} isloading={updateLoading}>Save changes</Button>
              <Button
                showskeleton={status === "loading"}
                flavor="secondary"
                onClick={async () => {
                  await signOut()
                  router.push('/')
                }}
              >
                Sign Out
              </Button>
              <Button
                showskeleton={status === "loading"}
                flavor="danger"
                onClick={() => setDeleteModalOpen(true)}
              >
                Deactivate Account
              </Button>
            </ButtonGroup>
          </form>
         
        </div>
    </StandardPage>
  );
}

