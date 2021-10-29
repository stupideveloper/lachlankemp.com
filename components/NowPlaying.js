import useSWR from "swr"
import fetcher from '../lib/fetcher'
import Tooltip from "./Decorations/Tooltip"
export default function NowPlaying() {
  const { data, error } = useSWR('/api/spotify/currently-playing', fetcher, { refreshInterval: 60000 })

  if (error) {console.error(error)}
  return (
    <div className="flex box-border">
      <a href={data?.link ? data.link : 'https://open.spotify.com/user/begv4cjczdeoyhbaj1vfdb59j?si=a5b22d553e47406e'} target="_blank" rel="noopener noreferrer" data-tip={data?.link ? "Visit song on spotify" : "Visit profile on spotify"}>
        <Tooltip />
        <div className="min-w-max	md:max-w-sm max-w-xs flex h-12 border border-cool-gray-700 rounded-xl overflow-y-hidden truncate">
          {data?.albumCover &&
            <img className="relative max-h-full" src={data?.albumCover.url} alt={`${data.album} cover`}  />
          }
          <div className="flex flex-col my-auto w-full max-w-full overflow-x-hidden">
            <span className="text-xs text-cool-gray-400 text-center ">I&apos;m listening to:</span>
            <div className="w-max flex overflow-hidden	">
            <div className={`flex ${data?.title ? 'scroll-text' : ''} w-full px-2`}>
                {data?.title &&
                  <span className="font-bold">{data.title}</span>
                }
                {!data?.title &&
                  <span className="font-bold">Not Playing</span>
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