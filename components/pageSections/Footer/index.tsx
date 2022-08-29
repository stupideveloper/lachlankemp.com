import styles from './Footer.module.scss';
export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.inner}>
				<a href="mailto:me@lachlankemp.com">me@lachlankemp.com</a>
			</div>
			<img className={styles.logo} src="/assets/logos/logo-light-grey.svg" alt="" />
		</footer>
		
	)
}