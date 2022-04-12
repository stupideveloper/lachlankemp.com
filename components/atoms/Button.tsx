import React from "react";
import Spinner from "../icons/Spinner";
interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>,HTMLButtonElement> {
	flavor: "primary" | "secondary" | "ghost";
	isloading?: boolean;
	
}


function getClass(flavor) {
	switch(flavor) {
		case 'primary':
			// primary button
			return 'btn-primary';
		case 'ghost':
			// ghost button
			return 'btn-ghost';
		default:
			return 'btn-secondary';
	} 
}
export default function Button(props : Props) {
	const { flavor, isloading, children } = props;
	const btnClass = getClass(flavor)
	
	return (
		<button className={`btn ${btnClass} ${isloading ? 'cursor-wait' : 'cursor-pointer'}`} {...props}>
			{isloading && (
				<Spinner />
			)}
			
			<div className="">
				{children}
			</div>
		</button>
	)
}