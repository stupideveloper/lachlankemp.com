import Image from 'next/image';
import { motion,useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const waveStates = {
  wave: { rotate: 20,  },
	static: { rotate: 0 },
  unwave: { rotate: -20 }
};


export default function Hand() {
	const handControls = useAnimation();
  const [ref, inView] = useInView({
		rootMargin: '-250px 0px',
	});
  useEffect(() => {
    if (inView) {
			setTimeout(() => {
				handControls.start("wave", {
					duration: 0.3,
					repeat: 3,
					repeatType: "reverse",
				});
			}, 2000);
		}
  }, [handControls, inView]);
	return (
		<motion.div
			ref={ref}
			className="text-[9rem]"
			style={{
				marginBottom: '-50px',
				marginRight: '-20px',
				paddingBottom: '20px',
				paddingRight: '90px',
				display: 'inline-block',
			}}
			animate={handControls}
			initial="static"
			variants={waveStates}
		>
			<Image src="/images/wave.svg" alt="Waving hand emoji" width={150} height={150} />
		</motion.div>
	)
}