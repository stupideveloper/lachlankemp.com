import DashItem from "../DashboardItem"
import useSWR from "swr";
import fetcher from "lib/utils/fetcher";
import { ExternalLinkIcon, CheckIcon, SelectorIcon } from "@heroicons/react/outline";
import { Listbox, Transition } from '@headlessui/react'
import { useState, Fragment } from "react";
import Link from "next/link";
import CountUpNumber from "components/CountUpNumber";

const timeframes = [
  { name: 'Day' },
  { name: 'Week' },
  { name: 'Month' },
	{ name: 'All Time' },
]

export default function Views() {
	const [selected, setSelected] = useState(timeframes[0])
	const timeframe = selected.name
	const { data, error } = useSWR<any>(`/api/dashboard/umami/stats?timeframe=${timeframe.toLowerCase()}`, fetcher);
	return (
		<DashItem>
			<div className="flex">
				<div className="flex-1">
					<a target="_blank" rel="noreferrer" href="https://umami.lachlankemp.com/share/dbwjG1hN/lachlankemp.com"><h3 className="text-xl flex-1 cursor-pointer">Website Views <ExternalLinkIcon className="w-4 h-4 inline" /></h3></a>
				</div>
				

				<Listbox value={selected} onChange={setSelected}>
        <div className="relative w-28">
          <Listbox.Button className="cursor-pointer relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
            <span className="block truncate">{selected.name}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute w-full py-1 mt-1 text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {timeframes.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `${active ? 'text-blue-900 bg-blue-100' : 'text-gray-900'}
                           select-none relative py-2 pl-10 pr-4 cursor-pointer`
                  }
                  value={person}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`${
                          selected ? 'font-medium' : 'font-normal'
                        } block truncate`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span
                          className={`${
                            active ? 'text-blue-600' : 'text-blue-600'
                          }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                        >
                          <CheckIcon className="w-5 h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
			</div>
			{data && !error && (
				<span className="text-4xl font-bold"><CountUpNumber number={data.pageviews.value} duration={1500} /></span>
			)}
			{!data && (
				<span className="text-4xl font-bold">-</span>
			)}
			
		</DashItem>
	)
}