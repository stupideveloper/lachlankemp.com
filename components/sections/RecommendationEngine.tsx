import { useAtom } from 'jotai'
import { useState, useEffect } from 'react'
import { atomWithStorage } from 'jotai/utils'


const isSubscribedAtom = atomWithStorage('isSubscribed', false)

const colorClasses = [
	{
		bg: 'bg-blue-100',
		text: 'text-blue-900',
		hover: 'hover:bg-blue-200'
	},
	{
		bg: 'bg-green-100',
		text: 'text-green-900',
		hover: 'hover:bg-green-200'
	},
	{
		bg: 'bg-gray-200',
		text: 'text-gray-800',
		hover: 'hover:bg-gray-300'
	},

]

export default function RecommendedActions() {
	const [recommendations, setRecommendations] = useState([
		{
			name: 'Contact',
			action: '#contact'
		}
	])
	const [isSubscribed, setIsSubscribed] = useAtom(isSubscribedAtom)

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
<<<<<<< HEAD
				name: 'Sign Guestbook',
=======
				name: 'Guestbook',
>>>>>>> 37cd1d48382be700cddd9ec143de566a64ae4635
				action: '/guestbook'
			})
		}
		setRecommendations(temp)
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])


	return (
		<div>
			<p className='text-gray-600 mb-2'>Things to do:</p>
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