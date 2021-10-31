import Link from "next/link"
export default function HeaderItem(props) {
  let isPrimary = props.pathName === props.pathNameMatch

  return(
    <Link href={props.url}>
      <a className={`${isPrimary ? 'dark:text-cool-gray-300 font-bold' : 'dark:text-cool-gray-400 text-cool-gray-700'} block md:flex px-3 py-1  lg:px-4 rounded-full dark:hover:bg-cool-gray-900 dark:hover:text-cool-gray-100 hover:text-cool-gray-800 hover:bg-cool-gray-300 transition-colors duration-300`}>{props.children}</a>
    </Link>
  )
}