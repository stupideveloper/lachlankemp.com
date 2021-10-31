import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
export default function Subscribe() {
	const inputEl = useRef(null);
	const [message, setMessage] = useState('');
	const [isSubscribed, setisSubscribed] = useState(false);

	const controls = useAnimation();
	const { ref, inView } = useInView({
		threshold: 0.3,
		delay: 200
	});

	useEffect(() => {
		if (window.localStorage.getItem('isSubscribed')) {
			console.log('Already Subscribed');
			setisSubscribed(true);
		}
	}, []);
	useEffect(() => {
		if (inView) {
			controls.start('visible');
		}
		if (!inView) {
			controls.start('hidden');
		}
	}, [controls, inView]);
	const varients = {
		hidden: { opacity: 0, scale: 0.7},
		visible: {
			scale: 1, 
			opacity: 1,
			transition: {
				duration: 0.3
			}
		}
	}

	const subscribe = async (e) => {
		e.preventDefault();

		const res = await fetch('/api/mail/subscribe', {
			body: JSON.stringify({
				email: inputEl.current.value
			}),
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST'
		});

		const { error } = await res.json();

		if (error) {
			setMessage(error);
			return;
		}

		inputEl.current.value = '';
		setMessage('Success, you are now subscribed to the newsletter, you wont regret it! 🎉');
		window.localStorage.setItem('isSubscribed', true);
	};

	return (
		<motion.div ref={ref} className="Box" initial="hidden" animate={controls} variants={varients}>
			{!isSubscribed &&
        <div className="bg-cool-gray-100 dark:bg-cool-gray-900 p-4 rounded-lg">
        	<p className="text-xl font-bold">Subscribe to the newsletter</p>
        	<p className="mt-1 mb-4 dark:text-cool-gray-300" >Get emails from me about web development, tech, and early access to my new projects.</p>
        	{!message && 
            <form onSubmit={subscribe}>
            	<div className="">
            		<div className="md:flex block md:space-x-2 space-x-0 mb-2">
            			<input
            				type="email"
            				className="
										max-w-sm
                      block
                      w-full
                      rounded-lg
                      dark:placeholder-cool-gray-400
                      dark:bg-cool-gray-900
                      shadow-sm
                    
                      focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                    "
            				placeholder="john@example.com"
            				ref={inputEl}
            				required
            			/>
            			<><button className="font-bold px-4 transition bg-cool-gray-300 hover:bg-cool-gray-400 dark:bg-cool-gray-600 dark:hover:bg-cool-gray-800 rounded-lg py-2 sm:mt-0 mt-2" type="submit">Subscribe ✨</button></>

            		</div>


            	</div>
            </form>
        	}
        	<div className="dark:text-cool-gray-400 text-sm">
        		{message ? message : ``}
        		{!message &&
              <div>
              	<p>I&apos;ll only send emails when new content is posted. No spam and a maximum of 1 email a month.</p>
              	<p className="mt-2">PS. If you sign up, you&apos;ll never see this window again 👍.</p>
              </div>
        		}
        	</div>
        </div>
			}
		</motion.div>
	);
}