import Link from "next/link"
export default function HeaderItem(props) {
  let isPrimary = props.pathName === props.pathNameMatch

  return(
    <Link href={props.url}>
      <a className={`${isPrimary ? 'text-cool-gray-300 font-bold' : 'text-cool-gray-500'} block md:flex px-3 py-1  lg:px-4 rounded-full hover:bg-cool-gray-400 hover:text-cool-gray-900 transition-colors duration-300`}>{props.children}</a>
    </Link>
  )
}