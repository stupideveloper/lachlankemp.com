import Button from 'components/atoms/Button';
import InputLabel from 'components/atoms/InputLabel';
import Input from 'components/atoms/Input';
import StandardPage from "../components/templates/StandardPage";
import fetcher from '../lib/utils/fetcher';
import useSWR, { useSWRConfig } from 'swr';
import { format } from 'date-fns'
import Box from 'components/atoms/Box';
import { useAuth, UserButton, useUser } from '@clerk/nextjs';
import { useRouter } from 'next/router';


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
			<p className="text-slate-400 text-sm">
				<span>{item.sender_name}</span> 
				<span className="mx-2">/</span> 
				<span>{format(new Date(item.updated_at), "d MMM yyyy 'at' h:mm bb")}</span>

				{user && item.created_by === user.id && (
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
  const { mutate } = useSWRConfig();
	const { data: entries, error } = useSWR<any>('/api/guestbook', fetcher)
  const { isLoaded, userId, sessionId, getToken } = useAuth();
	const { user } = useUser()
	const router = useRouter()

	
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
		<StandardPage title="Guestbook" description={`Leave a comment in my guestbook. It could be anything – information, appreciation, humor, or wisdom. Surprise me!`} url="https://lachlankemp.com/dashboard">
			<div>
				<h1 className="text-5xl font-black">Guestbook</h1>
				<p className="subtitle">Leave a comment below. It could be anything – information, appreciation, humor, or wisdom. Surprise me!</p>
			</div>
			<Box>
				<h2 className="text-2xl font-bold ">Sign the Guestbook</h2>
				{
					isLoaded ? (
						<div>
							<p>as {user?.firstName}</p>
							<form onSubmit={sendData} className='block md:flex gap-x-4 items-end'>
								<div className='mt-2 gap-x-2 sm:flex items-end'>
									<Input className='sm:mb-0 mb-2' style={{background: 'transparent', width: '100%'}} placeholder='Your message' id='message' name='message' type="text" required />
									<Button type='submit' flavor='primary'>Sign</Button>
								</div>
								
							</form>
						</div>
					) : (
						<div>
							<p className="mb-2">To share a message to a future viewer of my site, please login with GitHub.</p>
							<Button onClick={()=>{router.replace('/auth/sign-in?callback=/guestbook')}} flavor="primary">Sign in</Button>
							<p className='text-sm text-slate-400 mt-2 '>Your information will only be used to display your name and reply by email. No mailing list, I promise.</p>
						</div>
					)
				}
			
			</Box>
			<div className="mt-8">
				{!error && !entries && <p>Loading Data...</p>}
				<ul>
					{entries?.map((entry: any)=>(
						<GuestBookItem key={entry.id} item={entry} user={user} />
					))}
				</ul>
			</div>
		</StandardPage>
	)
}