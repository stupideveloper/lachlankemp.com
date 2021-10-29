import useSWR from "swr"
import Image from 'next/image'
import fetcher from '../lib/fetcher'
import Tooltip from "./Decorations/Tooltip"
export default function NowPlaying() {
  const { data, error } = useSWR('/api/spotify/currently-playing', fetcher, { refreshInterval: 30000 })

  if (error) {console.error(error)}
  return (
    <div className="flex box-border">
      <a href={data?.link ? data.link : 'https://open.spotify.com/user/begv4cjczdeoyhbaj1vfdb59j?si=a5b22d553e47406e'} target="_blank" rel="noopener noreferrer" data-tip={data?.link ? "Visit song on spotify" : "Visit profile on spotify"}>
        <Tooltip />
        <div className="box-border flex h-12 border border-cool-gray-700 rounded-xl relative overflow-hidden w-max">
          {data?.albumCover &&
            <img className="relative max-h-full" src={data.albumCover.url} alt={`${data.album} cover`}  />
          }
          <div className="flex flex-col my-auto">
            <span className="text-xs text-cool-gray-400 text-center">I&apos;m listening to:</span>
            <div className="flex items-center text-cool-gray-300 mx-3">
              {data?.title &&
                <span className="font-bold">{data.title}</span>
              }
              {!data?.title &&
                <span className="font-bold width: max-content;">Not Playing</span>
              }
              <span className="mx-2 text-cool-gray-400"> – </span>
              {data?.artists &&
                <ul className="artists flex text-cool-gray-400 space-x-1">
                  {data.artists.map(artist => (
                    <li key={artist.name}>
                      {artist.name}
                    </li>
                  ))}
                </ul>
              }
              {!data?.artists && 
                <span className="flex text-cool-gray-200">Spotify</span>
              }
  
            </div>
            {data?.relativeProgress && 
              <div>
                <label htmlFor="song" className="hidden">Song progress</label>
                <progress className="w-full song-progress" id="song" max={100} value={data?.relativeProgress}> {data?.relativeProgress}% </progress>
              </div>
            }

          </div>
        </div>
      </a>
    </div>
  )
}