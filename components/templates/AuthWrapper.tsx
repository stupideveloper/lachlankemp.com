import Link from "next/link";
export default function AuthWrapper({children}) {
	return (
		<div className="flex h-screen">
			<Link href={'/'}>
				<a>
					<img src="/images/logo-light.svg" className="fixed top-8 left-8" alt="logo" width={70} height={70} />
				</a>
			</Link>
			<div className="bg-gray-900 p-8 flex items-center flex-row w-full sm:w-auto xl:w-1/3 lg:w-1/2">
				<div className="w-full">{children}</div>
			</div>
			<div className="grow bg-gradient-to-b from-indigo-800 to-slate-900"></div>
		</div>
	)
}