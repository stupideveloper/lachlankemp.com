import styles from './PageWrapper.module.scss';
export default function PageWrapper({children}) {
	return (
		<div className={styles.page_wrapper}>
			{children}
		</div>
	)
}