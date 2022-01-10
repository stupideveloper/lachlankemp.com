import Footer from "../../components/Footer";
import Header from "../../components/Header/index";
import styles from "../Containers/BaseContainer.module.css";

export default function BaseContainer({children}) {
	return (
		<div className="flex flex-col">
			<Header />

			<div className={styles.wrapper}>
				{children}
				<Footer/>        
			</div>

		</div>
	);
}