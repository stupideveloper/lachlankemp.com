import BigTitle from "../components/text/BigTitle";
import AnimatedText from "../components/text/AnimatedText";
import styles from "../styles/pages/Home.module.scss";
import Header from "components/pageSections/Header";
import Button from "components/forms/Button";
import MainContent from "components/pageSections/MainContent";
import PageWrapper from "components/pageSections/PageWrapper";

function Sparkles() {
  return (
    <svg className={styles.sparkles} id="a" viewBox="0 0 607.4278 590.7611">
      <g id={styles.sparkle1}>
  
        <path
          d="M251.2075,502.415C251.2075,248.7203,253.6947,251.2075,0,251.2075,253.6947,251.2075,251.2075,253.6947,251.2075,0c0,253.6947-2.4872,251.2075,251.2075,251.2075-253.6947,0-251.2075-2.4872-251.2075,251.2075Z"
          style={{ fill: "none", stroke: "#f2f2f3", strokeMiterlimit: 10 }}
        />
      </g>
      <g id={styles.sparkle2}>
        <path
          d="M356.2203,590.7611c0-253.6947,2.4872-251.2075-251.2075-251.2075,253.6947,0,251.2075,2.4872,251.2075-251.2075,0,253.6947-2.4872,251.2075,251.2075,251.2075-253.6947,0-251.2075-2.4872-251.2075,251.2075Z"
          style={{ fill: "none", stroke: "#f2f2f3", strokeMiterlimit: 10 }}
        />
      </g>
    </svg>
  );
}

export default function Home() {
  return (
    <PageWrapper>
      <div className={styles.whole_wrap}>
        <div>
          <Header /> 
          <div className={styles.title_wrap}>
            <h1>The Internet Residence of Lachlan Kemp.</h1>
          </div>
        </div>
        <div className={styles.bottom_container}>
          <p className={styles.description}>Hey there! I&apos;m Lachlan Kemp, <br /> currently creating various things with JavaScript. <br /> Contact me at me@lachlankemp.com.</p>
          <img className={styles.logo} src="/assets/logos/logo.svg" alt="The lachlan kemp logo featuring 2, corner cut squares intersecting to form a box." />
        </div>
      </div>
      
    </PageWrapper>
  );
}
