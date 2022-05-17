import StandardPage from "components/templates/StandardPage";
import { SignedIn, useUser, useClerk } from "@clerk/nextjs";
import Button from "components/atoms/Button";
import Router, { useRouter } from "next/router";
import { withServerSideAuth } from "@clerk/nextjs/ssr";
import { GetServerSideProps } from "next";
import Skeleton from "react-loading-skeleton";
import Box from "components/atoms/Box";
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import ButtonGroup from "components/atoms/ButtonGroup";


function DeleteModal({isOpen, setIsOpen}) {
  const { signOut } = useClerk();
  const router = useRouter();
  async function deleteAccount() {
    await signOut();
    router.push('/auth/sign-in?callback=/profile');
    const response = await fetch('/api/auth/user', {
      method: 'DELETE',
    })
    const data = await response.json()
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
  const { user, isLoaded } = useUser();
  const { signOut } = useClerk();
  const router = useRouter();
	const [deleteModalOpen, setDeleteModalOpen] = useState(false)

  return (
    <StandardPage
      title="Profile"
      description={`Your lachlankemp.com profile.`}
      url="https://lachlankemp.com/profile"
    >
     
			<DeleteModal isOpen={deleteModalOpen} setIsOpen={setDeleteModalOpen} />
      <SignedIn>
        <div className="flex flex-col">
          {!isLoaded && (
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
          {isLoaded && (
            <>
              <div>
                <img
                  src={user?.profileImageUrl}
                  className="h-56 fadeIn rounded-3xl mb-2"
                  alt={`${user?.firstName}'s profile picture`}
                />
              </div>

              <h1 className="text-5xl font-black">{user?.fullName}</h1>
              <p className="mb-2">{user?.primaryEmailAddress.emailAddress}</p>
            </>
          )}

          <ButtonGroup>
            <Button
              showskeleton={!isLoaded}
              flavor="secondary"
              onClick={async () => {
                await signOut();
                router.replace("/auth/sign-in?callback=/profile");
              }}
            >
              Sign Out
            </Button>
            <Button
              showskeleton={!isLoaded}
              flavor="danger"
              onClick={() => setDeleteModalOpen(true)}
            >
              Deactivate Account
            </Button>
          </ButtonGroup>
        </div>
      </SignedIn>
    </StandardPage>
  );
}

// @ts-ignore
export const getServerSideProps: GetServerSideProps = withServerSideAuth(
	// @ts-ignore
  ({ req, resolvedUrl }) => {
    const { sessionId } = req.auth;
    if (!sessionId) {
      return {
        redirect: { destination: "/auth/sign-in?callback=" + resolvedUrl },
      };
    }
    return { props: {} };
  }
);
