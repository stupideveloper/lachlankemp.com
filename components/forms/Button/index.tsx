import React from "react";
import styles from './Button.module.scss'
interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>,HTMLButtonElement> {
	flavor?: "primary" | "secondary" | "ghost" | "danger";
	isloading?: boolean;
	showskeleton?: boolean;
	as?: React.ElementType;
	className?: string;
}


function getClass(flavor) {
	switch(flavor) {
		case 'primary':
			return styles.primary;
		case 'ghost':
			return styles.ghost;
		case 'danger':
			return styles.danger;
		default:
			return styles.secondary;
	} 
}
export default function Button({ flavor = "primary", as: Component = "button", children, className, ...props } : Props) {
	const btnClass = getClass(flavor)
	console.log(btnClass)
	return (
		<Component className={`${className ? className : ''} ${styles.button} ${btnClass} `} {...props}>
			<div className={styles.button_inner}>
				{children}
			</div>
			
		</Component>
	)
}
