import styles from './Header.module.scss';
import { Suspense, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic'

function OnlineLabel() {
	// Utility to add leading zero
	function leadingZero(n) {
		return (n < 10? '0' : '') + n;
	}
	var currentDateTime = new Date()
  var becomeOnline = new Date(currentDateTime.getFullYear(), currentDateTime.getMonth(), currentDateTime.getDate(), 7, 30);
	var becomeOffline = new Date(currentDateTime.getFullYear(), currentDateTime.getMonth(), currentDateTime.getDate(), 19, 30);

	if (currentDateTime > becomeOnline && currentDateTime < becomeOffline) {
		return (
			<p id={styles.online_label} className={styles.online}>Online</p>
		)
	}
	const hoursUntil = new Date(becomeOnline.getTime() - currentDateTime.getTime()).getHours()
		return (
			<p id={styles.online_label}>Online in {hoursUntil} hours</p>
		)
	
}

const Menu = dynamic(() => import('../Menu'), {
	suspense: true
})

{/* Lazy Load */}
export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false);

	const ref = useRef(null);
	useEffect(() => {
		window.addEventListener('scroll', scroll);
		return () => {
			window.removeEventListener('scroll', scroll);
		}
	}, []);

	const scroll = (e) => {
		if (window.scrollY > 35	) {
			ref.current.classList.add(styles.scrolled);
		}	
		else if (window.scrollY < 5) {
			ref.current.classList.remove(styles.scrolled);
		}
	};
	return (
			<header className={styles.header} ref={ref}>
				<div className={styles.inner}>
					<div className={styles.first}>
						<Suspense fallback={<button className={`${styles.link} ${styles.mobile_menu_button}`}>MENU LOADING</button>}>
							<button className={`${styles.nav_link} ${styles.mobile_menu_button}`} onClick={()=>{setMenuOpen(!menuOpen)}}>MENU</button>
							<Menu open={menuOpen} setOpen={setMenuOpen} />
						</Suspense>
					</div>
					<div className={styles.center}>
						<Link href="/" >
							<a className={`${styles.nav_link} ${styles.logo_wrapper}`} >
								<div className={styles.logo}></div>
							</a>
						</Link>
					</div>
					
					<div className={styles.last}><Link href="mailto:me@lachlankemp.com"><a id={styles.hello_link} className={styles.nav_link}><p>Say Hello</p><OnlineLabel /></a></Link></div>
				</div>
			</header>
	
	)
}