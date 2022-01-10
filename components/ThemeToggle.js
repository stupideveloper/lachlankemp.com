import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import useSound from 'use-sound';
import isMutedAtom from '/lib/isMuted';
import { useAtom } from 'jotai';

const ThemeToggle = () => {
	const [playbackRate, setPlaybackRate] = useState(0.75);
	const [mounted, setMounted] = useState(false);
	const { setTheme, resolvedTheme } = useTheme();
	const [isMuted, setIsMuted] = useAtom(isMutedAtom);

	
	const [playClick] = useSound('/assets/sounds/click.mp3', { 
		playbackRate,
		volume: 1.5 
	}
	);
	
	// When mounted on client, now we can show the UI
	useEffect(() => setMounted(true), []);

	function runSetTheme(theme) {
		setTheme(theme);
		if (isMuted) return;
		if (theme === 'dark') {
			setPlaybackRate(0.75);
			playClick();
		} else if (theme === 'light') {
			setPlaybackRate(1);
			playClick();
		}
	}



	if (!mounted) return null;

	return (
		<div className="flex">
			<div className={` bg-slate-300 rounded-lg  dark:bg-slate-800 dark:hover:bg-slate-400 hover:bg-slate-100 transition-colors`}>
				{resolvedTheme === 'light' && 
					<button onClick={() => {runSetTheme('dark');}} aria-label="Switch to dark theme mode" className="flex p-2">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" view	Box="0 0 20 20" fill="currentColor">
							<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
						</svg>
					</button>
				}
				{resolvedTheme === 'dark' && 
					<button onClick={() => runSetTheme('light')} aria-label="Switch to light mode" className="flex p-2">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
							<path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
						</svg>
					</button>
				}
			</div>
		</div>

	);
};
export default ThemeToggle;