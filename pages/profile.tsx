import StandardPage from "components/templates/StandardPage";
import { useSession } from "next-auth/react";


export default function Profile() {
	const { data: session, status } = useSession();
	return (
		<StandardPage title="Profile" description={`Your lachlankemp.com profile.`} url="https://lachlankemp.com/profile">
			{session && (
				<>
					<img src={session?.user?.image}  className="h-56 fadeIn" alt={`${session?.user?.name}'s profile picture`} />
					<div className="mt-6 flex flex-col">
						<h1 className="text-5xl font-black">{session?.user?.name}</h1>
						<p>{session?.user?.email}</p>
						<p>{status} - Expires: {session?.expires}</p>
						
					</div>
				</>
			)}
		</StandardPage>

	)
}