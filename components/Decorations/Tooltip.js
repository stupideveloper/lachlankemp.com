import ReactTooltip from 'react-tooltip';
import NoSSR from '../NoSSR';

export default function Tooltip() {
	return (
		<NoSSR>
			<ReactTooltip effect="float" className="bg-cool-gray-700 text-cool-gray-200" />
		</NoSSR>
	);
}