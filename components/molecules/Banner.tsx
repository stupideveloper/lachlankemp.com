import bleed from 'styles/fullbleed.module.css'
import { XIcon } from '@heroicons/react/outline'
import useHasMounted from 'lib/hooks/useHasMounted';
import useStickyState from 'lib/hooks/useStickyState';

function ClientOnly() {
	const [closed, setClosed] = useStickyState(false, 'banner-closed');

	function close() {
		setClosed(true)
	}
	if (closed) return null
	return (
		<div className={`${bleed.wrapper} px-16 py-1`}>
			<div className='text-center'>
				<p>Welcome to the 3rd edition of <code>lachlankemp.com</code>.</p>
			</div>
			<div className='absolute right-8'>
				<button onClick={close} aria-label="close">
					<XIcon width={25} />
				</button>
				
			</div>
			
		</div>
	)
}
export default function Banner() {
	const hasMounted = useHasMounted();
	if (!hasMounted) return null
	return <ClientOnly />
}