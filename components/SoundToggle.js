import { useState, useEffect } from 'react';
import useSound from 'use-sound';
import { useAtom } from 'jotai';
import isMutedAtom from '/lib/isMuted';
import ClientOnly from './ClientOnly';

const SoundToggle = () => {

	const [isMuted, setIsMuted] = useAtom(isMutedAtom);
 
  
  


	const [playSoundOff] = useSound('/assets/sounds/soundoff.mp3', { 
		volume: 1.5 
	}
	);
	const [playSoundOn] = useSound('/assets/sounds/soundon.mp3', { 
		volume: 1.5 
	}
	);
	function setSoundState(state) {
		setIsMuted(!isMuted);
		if (state) {
			playSoundOn();
		} else {
			playSoundOff();
		}
	}

	return (
		<ClientOnly>
      		<div className="flex">
				<div className={` bg-slate-300 rounded-lg  dark:bg-slate-800 dark:hover:bg-slate-400 hover:bg-slate-100 transition-colors`}>
					{!isMuted && 
					<button onClick={() => {setSoundState(false);}} aria-label="Switch to system theme mode" className="flex p-2">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
							<path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
						</svg>
					</button>
					}
					{isMuted && 
					<button onClick={() => {setSoundState(true);}} aria-label="Switch to light mode" className="flex p-2">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
							<path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
						</svg>
					</button>
					}
				</div>
			</div>
		</ClientOnly>


	);
};
export default SoundToggle;