import ReactTooltip from 'react-tooltip';
import NoSSR from '../NoSSR';

export default function Tooltip() {
	return (
		<NoSSR>
			<ReactTooltip effect="float" className="bg-slate-700 text-slate-200" />
		</NoSSR>
	);
}