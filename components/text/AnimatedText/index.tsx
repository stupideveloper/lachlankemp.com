import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./AnimatedText.module.scss";

const sentance = {
  visible: {
    transition: {
      delay: 5,
      staggerChildren: 0.1
    },
  },
}
const item = {
  hidden: {
    y: "200%",
    opacity: 0,
    transition: { ease: [0.455, 0.03, 0.515, 0.955] }
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 }
  }
};
function WithoutIntersect({lines}) {
  return (
    <motion.span 
      variants={sentance}
      initial="hidden"
      animate={"visible"}
      className={styles.sentance}
      >
      {lines.map((character, index) => (
        <motion.span
          key={index}   
          variants={item}
          className={styles.line}
        >
          {character}&nbsp;&nbsp;
        </motion.span>
        ))}
    </motion.span>
  )
}
function WithIntersect({lines}) {
  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    } else {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);


  return (
    <motion.span 
      variants={sentance}
      initial="hidden"
      animate={ctrls}
      ref={ref}
      >
      {lines.map((character, index) => (
        <motion.span
          key={index}   
          variants={item}
        >
          {character}&nbsp;&nbsp;
        </motion.span>
        ))}
    </motion.span>

  );
}
export default function AnimatedText({lines, waitForIntersect = false, ...props} : {lines: Array<string>, waitForIntersect?: boolean}) {
  if (waitForIntersect) {
    return <WithIntersect lines={lines} {...props} />
  } else {
    return <WithoutIntersect lines={lines} {...props} /> 
  }

}
