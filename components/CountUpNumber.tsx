import { useEffect, useState } from 'react'
export default function CountUpNumber({number, duration}) {

	const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

	const [counter, setCounter] = useState(number)
	useEffect(() => {
		let startTimestamp = null;
		const step = (timestamp) => {
			if (!startTimestamp) startTimestamp = timestamp;
			const progress = Math.min((timestamp - startTimestamp) / duration, 1);
			setCounter(Math.floor(progress * (counter - 0) + 0))
			if (progress < 1) {
				window.requestAnimationFrame(step);
			}
		};
		window.requestAnimationFrame(step);
		// return () => {
		// 	setCounter(0);
		// }
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [number, duration])

	if (!hasMounted) {
    return <span>0</span>;
  }
	return <span>{counter ? counter : 0}</span>
}