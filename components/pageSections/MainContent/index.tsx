import styles from './MainContent.module.scss';

export default function MainContent({children}) {
	return (
		<main className={styles.mc}>
			{children}
		</main>
	)
}