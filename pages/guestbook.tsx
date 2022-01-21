import { Button, Input, InputLabel } from 'pretty-things';
import StandardPage from "../components/StandardPage";
import { useSession, signIn, signOut } from "next-auth/react"
import fetcher from '../lib/utils/fetcher';
import useSWR, { useSWRConfig } from 'swr';
import { format } from 'date-fns'


function GuestBookItem({item, user}: {item: any, user: any}) {
	const { mutate } = useSWRConfig();
  const deleteEntry = async (e:any) => {
    e.preventDefault();

    await fetch(`/api/guestbook/${item.id}`, {
      method: 'DELETE'
    });

    mutate('/api/guestbook');
  };

	return (
		<li className="mb-6">
			<p className="mb-2">{item.body}</p>
			<p className="text-gray-600 text-sm">
				<span>{item.created_by}</span> 
				<span className="mx-2">/</span> 
				<span>{format(new Date(item.updated_at), "d MMM yyyy 'at' h:mm bb")}</span>

				{user && item.created_by === user.name && (
          <>
            <span className="mx-2">/</span> 
            <button
              className="text-sm text-red-600 "
              onClick={deleteEntry}
            >
              Delete
            </button>
          </>
        )}
			</p>
			
		</li>
	)
}
// TODO: CONNECT TO HASURA

export default function Guestbook() {
	const { data: session, status } = useSession();
  const { mutate } = useSWRConfig();
	const { data: entries, error } = useSWR<any>('/api/guestbook', fetcher)

	async function sendData(event:any) {
		event.preventDefault();
		const value = event.target.message.value
		event.target.message.value =''
		await fetch('/api/guestbook', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				body: value,
			})
		})
		mutate('/api/guestbook');
		window.localStorage.setItem('guestbookUsed', 'true');
	}
	return (
		<StandardPage>
			<div>
				<h1 className="text-5xl font-black">Guestbook</h1>
				<p className="text-xl mt-2 mb-6 text-gray-600 ">Leave a comment below. It could be anything – information, appreciation, humor, or wisdom. Surprise me!</p>
			</div>
			<div className="mt-4 p-4 bg-blue-100 rounded-lg">
				<h2 className="text-2xl font-bold">Sign the Guestbook</h2>
				{
					session ? (
						<div>
							as {session.user?.name}
							<form onSubmit={sendData} className='block md:flex gap-x-4 items-end'>
								<div className='mt-2 gap-x-4 sm:flex	items-end'>
									<Input style={{background: 'transparent', width: '100%'}} placeholder='Your message' id='message' name='message' type="text" required />
									<Button type='submit' label={'Sign'} />
								</div>
								
							</form>
						</div>
					) : (
						<div>
							<p className="mb-2">To share a message to a future viewer of my site, please login with GitHub.</p>
							<Button onClick={()=>{signIn('github')}} label="Sign In" />
							<p className='text-sm text-gray-600 mt-2 '>Your information will only be used to display your name and reply by email. No mailing list, I promise.</p>
						</div>
					)
				}
			
			</div>
			<div className="mt-8">
				{!error && !entries && <p>Loading Data...</p>}
				<ul>
					{entries?.map((entry: any)=>(
						<GuestBookItem key={entry.id} item={entry} user={session?.user} />
					))}
				</ul>
			</div>
		</StandardPage>
	)
}