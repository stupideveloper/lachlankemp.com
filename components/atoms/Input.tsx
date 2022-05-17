import { useState } from "react"
import Skeleton from 'react-loading-skeleton'

interface Props extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>,HTMLInputElement> {
	showskeleton?: boolean;
}

export default function Input({children, showskeleton, ...props} : Props) {
	const [textFilled, setTextFilled] = useState(false)
	if (showskeleton) return (
		<Skeleton width={'100%'} height={50} />
	)
	return (
		<input onChange={(event) => {
			event.target.value.length === 0 ? setTextFilled(false) : setTextFilled(true);
		}} className={`${textFilled ? 'border-transparent' : ''}`} {...props}>{children}</input>
	)
}