import Link from "next/link";
export default function HeaderItem(props) {
	let isPrimary = props.pathName === props.pathNameMatch;

	return(
		<Link href={props.url}>
			<a className={`${isPrimary ? 'dark:text-slate-300 font-bold' : 'dark:text-slate-400 text-slate-700'} block md:flex px-3 py-1  lg:px-4 rounded-full dark:hover:bg-slate-900 dark:hover:text-slate-100 hover:text-slate-800 hover:bg-slate-300 transition-colors duration-300`}>{props.children}</a>
		</Link>
	);
}