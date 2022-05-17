import React from "react";
import Spinner from "../icons/Spinner";
import Skeleton from 'react-loading-skeleton'
import styles from 'styles/buttons.module.css'
interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>,HTMLButtonElement> {
	flavor?: "primary" | "secondary" | "ghost" | "danger";
	isloading?: boolean;
	showskeleton?: boolean;
}


function getClass(flavor) {
	switch(flavor) {
		case 'primary':
			// primary button
			return styles.primary;
		case 'ghost':
			// ghost button
			return styles.ghost;
		case 'danger':
			return styles.danger;
		default:
			return styles.secondary;
	} 
}
export default function Button({ flavor, isloading, children, showskeleton, ...props } : Props) {
	const btnClass = getClass(flavor)
	const skeletonLength = typeof children === 'string' ? children.length * 11 + 30 : 180;
	
	if (showskeleton) return (
		<Skeleton width={skeletonLength} height={50} />
	)

	return (
		<button className={`${styles.btn} ${btnClass} ${isloading ? 'cursor-wait' : 'cursor-pointer'}`} {...props}>
			{isloading && (
				<Spinner />
			)}
			
			<div className="">
				{children}
			</div>
		</button>
	)
}