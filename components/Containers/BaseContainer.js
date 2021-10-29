import Footer from "../../components/Footer"
import Header from "../../components/Header/index"
import styles from "../Containers/BaseContainer.module.css"

export default function BaseContainer({children}) {
  return (
    <div className="flex flex-col">
      <Header />

      <div className={styles.wrapper}>
        <div className="flex-grow m-4 mb-4">
          {children}
        </div>
        <div className="">
          <Footer/>
        </div>
        
      </div>

    </div>
  )
}