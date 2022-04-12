import { ButtonHTMLAttributes, ReactElement, useState } from "react"

export default function Input(props) {
	const {children} = props
	const [textFilled, setTextFilled] = useState(false)
	return (
		<input onChange={(event) => {
			event.target.value.length === 0 ? setTextFilled(false) : setTextFilled(true);
			console.log(event.target.value.length)
		}} className={`${textFilled ? 'border-transparent' : ''}`} {...props}>{children}</input>
	)
}