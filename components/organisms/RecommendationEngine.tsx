import { useState, useEffect } from 'react'
import useStickyState from 'lib/hooks/useStickyState'

const colorClasses = [
	{
		bg: 'bg-indigo-100',
		text: 'text-dark',
		hover: 'hover:bg-indigo-200'
	},
	{
		bg: 'bg-green-100',
		text: 'text-dark',
		hover: 'hover:bg-green-200'
	},
	{
		bg: 'bg-slate-200',
		text: 'text-dark',
		hover: 'hover:bg-slate-300'
	},

]

export default function RecommendedActions() {

	const [recommendations, setRecommendations] = useState([
		{
			name: 'Contact',
			action: '#contact'
		}
	])
	
	const [isSubscribed, setIsSubscribed] = useStickyState(false, 'isSubscribed')

	useEffect(() => {
		var temp = [...recommendations]
		if (!isSubscribed) {
			temp.push({
				name: 'Subscribe',
				action: '#subscribe'
			})
		}
		if (window.localStorage.getItem('guestbookUsed') !== 'true') {
			temp.push({
				name: 'Guestbook',
				action: '/guestbook'
			})
		}
		setRecommendations(temp)
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])


	return (
		<div>
			<p className='text-slate-300 mb-2'>Things to do:</p>
			<div className='flex gap-x-2 justify-center'>
				{recommendations.slice(0,3).map((recommendation, index) => (
					<div key={index}>
						<a href={recommendation.action} className={`${colorClasses[index].bg} ${colorClasses[index].text} ${colorClasses[index].hover} rounded-full opacity-80 transition hover:opacity-100  px-2 py-1`}>{recommendation.name}</a>
					</div>
				))}
			</div>
		</div>

	)
}