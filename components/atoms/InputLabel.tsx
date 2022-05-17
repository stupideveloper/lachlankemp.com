import Skeleton from 'react-loading-skeleton'
interface Props extends React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>,HTMLLabelElement> {
	showskeleton?: boolean;
}


export default function InputLabel({children, showskeleton, ...props}: Props) {

	if (showskeleton) return (
		<Skeleton width={150} height={10} />
	)

	return (
		<label className="block text-slate-400 mb-2 " {...props}>{children}</label>
	)
}