import { useTheme,    } from 'next-themes';
import { useState, useEffect } from 'react';

const ThemeToggle = () => {
	const [mounted, setMounted] = useState(false);
	const [isCustom, setIsCustom] = useState(false);
	const { theme, setTheme, resolvedTheme } = useTheme();
	
	// When mounted on client, now we can show the UI
	useEffect(() => setMounted(true), []);

	useEffect(() => {
		if (theme === 'light' || theme === 'dark') {
			setIsCustom(true);
		} else {
			setIsCustom(false);
		}
	}, [theme]);

	if (!mounted) return null;

	return (
		<div className="flex">
			<div className={` bg-cool-gray-300 rounded-lg ${isCustom ? 'rounded-r-none border-r dark:border-cool-gray-700 border-cool-gray-400':''} dark:bg-cool-gray-800 dark:hover:bg-cool-gray-400 hover:bg-cool-gray-100 transition-colors`}>
				{resolvedTheme === 'light' && 
					<button onClick={() => {setTheme('dark');}} aria-label="Switch to system theme mode" className="flex p-2">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
							<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
						</svg>
					</button>
				}
				{resolvedTheme === 'dark' && 
					<button onClick={() => setTheme('light')} aria-label="Switch to light mode" className="flex p-2">

						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
							<path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
						</svg>
					</button>
				}
			</div>
			<div>
				{isCustom &&
					<div className={` bg-cool-gray-300 rounded-lg ${isCustom ? 'rounded-l-none':''} dark:bg-cool-gray-800 dark:hover:bg-cool-gray-600 transition-colors hover:bg-cool-gray-100`}>
						<button onClick={() => setTheme('system')} aria-label="Switch to dark mode" className="flex p-2">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
								<path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
							</svg>
						</button>
					</div>
				}
			</div>
		</div>

	);
};
export default ThemeToggle;