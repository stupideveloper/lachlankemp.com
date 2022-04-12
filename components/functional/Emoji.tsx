export default function Emoji({label, symbol}: {label?: string, symbol: string}) {
	return (
		<span
			className="emoji"
			role="img"
			aria-label={label ? label : ""}
			aria-hidden={label ? "false" : "true"}
		>
			{symbol}
		</span>
	)
}
