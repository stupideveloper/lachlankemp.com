import styles from './BigTitle.module.scss';

export default function BigTitle({children}) {
	return (
		<h1 className={styles.title}>{children}</h1>
	)
}