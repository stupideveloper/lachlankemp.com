import { ButtonHTMLAttributes, ReactElement, useState } from "react"
interface Props extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>,HTMLInputElement> {}

export default function Input({children, ...props} : Props) {
	const [textFilled, setTextFilled] = useState(false)
	return (
		<input onChange={(event) => {
			event.target.value.length === 0 ? setTextFilled(false) : setTextFilled(true);
		}} className={`${textFilled ? 'border-transparent' : ''}`} {...props}>{children}</input>
	)
}