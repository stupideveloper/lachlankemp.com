import React,{ useEffect, useState } from 'react';
import Button from 'components/atoms/Button';
import Input from 'components/atoms/Input';
import InputLabel from 'components/atoms/InputLabel';
import useWindowSize from 'lib/hooks/useWindowSize';
import dynamic from 'next/dynamic';
import useStickyState from 'lib/hooks/useStickyState';

const WavingHand = dynamic(() => import('components/atoms/WavingHand'));

function Form({submitForm, loading : isLoading}) {
	return (
		<>
		<form onSubmit={submitForm} className='block md:flex gap-x-4 items-end'>
			<div className='mt-6 md:mt-0 gap-x-4 sm:flex	items-end mr-auto'>
				<div className='mb-2 sm:mb-0'>
					<InputLabel htmlFor='email'>Email</InputLabel>
					<Input id='email' name='email' type="email" required />
				</div>
				<div className='mr-auto block flex-col gap-4'>
				<Button flavor='primary' isloading={isLoading}>Subscribe</Button>


				</div>
				
			</div>
			 
		</form>
		<p className='block mt-4 text-slate-400'>No spam, you can unsubscribe at any time.</p>
	</>
	)
}

export default function NewsletterSignup() {

	const [isSubscribed, setIsSubscribed] = useStickyState(false, 'isSubscribed')
	const [emailId, setEmailId] = useStickyState('', 'emailIdTemp')
	const [awaitingConfirmation, setAwaitingConfirmation] = useStickyState(false, 'awaitingConfirmation')
	const [loading, setLoading] = useState(false);
	const [responseMessage, setResponseMessage] = useState('');
	const windowSize = useWindowSize()
 

	useEffect(() => {
		if (emailId !== '') {
			fetch(`/api/mail/check-validity?id=${emailId}`)
				.then(response => response.json())
				.then(data =>{
					if (data.subscriberType !== 'unactivated') {
						setIsSubscribed(true)
					}
				});
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])


	async function submitForm(event:React.SyntheticEvent<HTMLFormElement>) {
		event.preventDefault();
		const formData = new FormData(event.target as HTMLFormElement);
		const email = formData.get('email');
	
		setLoading(true); 
		const request = await fetch('/api/mail', {
			method: 'POST',
			body: JSON.stringify({ email }),
		})
		const data = await request.json();

		if (request.status === 201) {
			//setIsSubscribed(true);
			setAwaitingConfirmation(true)
			setEmailId(data.id)
		}
		setResponseMessage(data.message);
				
	}
	function trySignupAgain() {
		setAwaitingConfirmation(false)
		setEmailId('')
		setIsSubscribed(false)
	}

	if (awaitingConfirmation) {
		return (
		<div id='subscribe' className='scroll-mt-12 mt-8 flex place-content-between items-center'>
			<div className='max-w-xl'>
				<h2>
					Make sure to check your email!
				</h2>
				<p className="mt-1 text-slate-500 text-xl mb-6" >Be sure to check your email (and junk) to confirm your subscription. If you entered the wrong email click <button onClick={trySignupAgain} className='highlighted'>here</button> to sign up again.</p>
				<p>{responseMessage}</p>
			</div>
			<div className='overflow-hidden'>
				{windowSize.width > 900 && <WavingHand />}
			</div>
		</div>
		)
	}

	return (
		<div id='subscribe' className='scroll-mt-12 mt-8 flex place-content-between items-center'>
			<div className='max-w-xl'>
				<h2>
					Subscribe to my (future) newsletter
				</h2>
				<p className="mt-1 text-slate-400 text-xl mb-6" >Subscribe to my newsletter so when it drops, you can get emails from me about web development, tech, and early access to my new projects.</p>
			
				<Form submitForm={submitForm} loading={loading} />
			</div>
			<div className='overflow-hidden'>
				{windowSize.width > 900 && <WavingHand />}
			</div>
		</div>
	)
}