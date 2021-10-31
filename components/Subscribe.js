import React, { useRef, useState, useEffect } from 'react';

export default function Subscribe() {
  const inputEl = useRef(null);
  const [message, setMessage] = useState('');
  const [isSubscribed, setisSubscribed] = useState(false);
  useEffect(() => {
    if (window.localStorage.getItem('isSubscribed')) {
      console.log('Already Subscribed');
      setisSubscribed(true);
    }
  }, []);

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
      // 4. If there was an error, update the message in state.
      setMessage(error);

      return;
    }

    // 5. Clear the input value and show a success message.
    inputEl.current.value = '';
    setMessage('Success, you are now subscribed to the newsletter, you wont regret it! 🎉');
    window.localStorage.setItem('isSubscribed', true);
  };

  return (
    <>
      {!isSubscribed &&
        <div className="bg-cool-gray-100 dark:bg-cool-gray-900 p-4 rounded-lg">
          <p className="text-xl font-bold">Subscribe to the newsletter</p>
          <p className="mb-4" >Get emails from me about web development, tech, and early access to my new projects.</p>
          {!message && 
            <form onSubmit={subscribe}>
            <div className="max-w-md">
              <div className="flex mb-2">
                  <input
                    type="email"
                    className="
                      
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
                <><button className="font-bold px-4 transition bg-cool-gray-300 hover:bg-cool-gray-400 dark:bg-cool-gray-600 ml-2 rounded-lg" type="submit">Subscribe</button></>

              </div>


            </div>
            </form>
          }
          <div className="dark:text-cool-gray-400 text-sm">
            {message ? message : ``}
            {!message &&
              <div>
                <p>I&apos;ll only send emails when new content is posted. No spam and a maximum of 1 email a month.</p>
                <p>PS. If you sign up, you&apos;ll never see this window again 👍.</p>
              </div>
            }
          </div>
        </div>
      }
    </>
  );
}