export default function BaseLayout({children}) {
	return <div className="dark:text-white dark:bg-black flex-col items-center justify-center min-h-screen">{children}</div>;
}