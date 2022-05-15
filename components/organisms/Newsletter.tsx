import React,{ useEffect, useState } from 'react';
import { motion,useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import Emoji from '../functional/Emoji'
import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import Button from 'components/atoms/Button';
import Input from 'components/atoms/Input';
import InputLabel from 'components/atoms/InputLabel';
import Image from 'next/image';

const isSubscribedAtom = atomWithStorage('isSubscribed', false)
const emailIdAtom = atomWithStorage('emailIdTemp', '')


const waveStates = {
  wave: { rotate: 20,  },
	static: { rotate: 0 },
  unwave: { rotate: -20 }
};

function Hand() {
	const handControls = useAnimation();
  const [ref, inView] = useInView({
		rootMargin: '-250px 0px',
	});
  useEffect(() => {
    if (inView) {
			setTimeout(() => {
				handControls.start("wave", {
					duration: 0.3,
					repeat: 3,
					repeatType: "reverse",
				});
			}, 2000);
		}
  }, [handControls, inView]);
	return (
		<motion.div
			ref={ref}
			className="text-[9rem]"
			style={{
				marginBottom: '-50px',
				marginRight: '-20px',
				paddingBottom: '20px',
				paddingRight: '90px',
				display: 'inline-block',
			}}
			animate={handControls}
			initial="static"
			variants={waveStates}
		>
			<Image src="/images/wave.svg" width={150} height={150} />
		</motion.div>
	)
}

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
	const [isSubscribed, setIsSubscribed] = useAtom(isSubscribedAtom)
	const [emailId, setEmailId] = useAtom(emailIdAtom)
	const [showingMessage, setShowingMessage] = useState(false)
	const [hasVerified, setHasVerified] = useState(true)
	const [handShown, setHandShown] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
	const [visible, setVisible] = useState(true);
	const [loading, setLoading] = useState(false);
	const [responseMessage, setResponseMessage] = useState('');
  useEffect(() => {
    setHasMounted(true);
  }, []);
	useEffect(() => {
		window.innerWidth > 900 && setHandShown(true)
	}, [])
	useEffect(()=>{
		isSubscribed && setVisible(false)
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[])

	useEffect(() => {
		if (emailId !== '') {
			fetch(`/api/mail/check-validity?id=${emailId}`)
				.then(response => response.json())
				.then(data =>{
					if (data.subscriberType === 'unactivated') {
						setHasVerified(false)
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
			setIsSubscribed(true);
			setEmailId(data.id)
		}
		setResponseMessage(data.message);
		setShowingMessage(true)
				
	}
	function trySignupAgain() {
		setShowingMessage(false)
		setHasVerified(true)
		setEmailId('')
		setVisible(true)
		setIsSubscribed(false)
	}




	if (hasVerified === false) {
		return (
		<div id='subscribe' className='scroll-mt-12 mt-8 flex place-content-between items-center'>
			<div className='max-w-xl'>
				<h2 className="text-3xl font-bold">
					Be sure to check your email!
				</h2>
				<p className="mt-1 text-slate-500 text-xl mb-6" >It looks like you haven&apos;t confirmed your subscription yet, check your inbox (and junk) for the email. If you entered the wrong email click <button onClick={trySignupAgain} className='highlighted'>here</button> to sign up again.</p>
				{isSubscribed || showingMessage ? (
					<div>
						<p>{responseMessage}</p>
					</div>
				) : (
					<Form submitForm={submitForm} loading={loading} />
				)}
			</div>
			<div className='overflow-hidden'>
				{handShown && <Hand />}
			</div>
		</div>
		)
	}
	if (!hasMounted || !visible) {
    return null;
  }

	return (
		<div id='subscribe' className='scroll-mt-12 mt-8 flex place-content-between items-center'>
			<div className='max-w-xl'>
				<h2 className="text-3xl font-bold">
					Subscribe to my (future) newsletter
				</h2>
				<p className="mt-1 text-slate-400 text-xl mb-6" >Subscribe to my newsletter so when it drops, you can get emails from me about web development, tech, and early access to my new projects.</p>
				{isSubscribed || showingMessage ? (
					<div>
						<p>{responseMessage}</p>
					</div>
				) : (
					<Form submitForm={submitForm} loading={loading} />
				)}
			</div>
			<div className='overflow-hidden'>
				{handShown && <Hand />}
			</div>
		</div>
	)
}