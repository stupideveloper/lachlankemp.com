interface Props extends React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>,HTMLLabelElement> {}

export default function InputLabel(props: Props) {
	const { children } = props
	return (
		<label className="block text-gray-500 mb-2 " {...props}>{children}</label>
	)
}