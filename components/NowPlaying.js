import useSWR from "swr"
import Tooltip from "./Decorations/Tooltip"
export default function NowPlaying() {
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error } = useSWR('/api/spotify/currently-playing', fetcher, { refreshInterval: 60000 })
  if (error) {console.error(error)}
  return (
    <div className="flex box-border">
      {data?.songStatus === 'Playing' && 
        <a href={data.link} target="_blank" rel="noopener noreferrer" data-tip={"Visit song on spotify"}>
          <Tooltip />
          <div className="min-w-max	md:max-w-sm max-w-xs flex h-12 border dark:border-cool-gray-700 rounded-xl overflow-y-hidden truncate">
            <img className="relative max-h-full" src={data.albumCover.url} alt={`${data.album} cover`}  />
            <div className="flex flex-col my-auto w-full max-w-full overflow-x-hidden">
              <span className="text-xs dark:text-cool-gray-400 text-center ">I&apos;m listening to:</span>
              <div className="w-max flex overflow-hidden	">
              <div className={`text-cool-gray-600 dark:text-cool-gray-400  flex ${data?.title ? 'scroll-text' : ''} w-full px-2`}>
                  <span className="font-bold">{data.title}</span>
                
                  <span className="mx-2 dark:text-cool-gray-400"> – </span>
                  <ul className="artists flex space-x-1">
                    {data.artists.map(artist => (
                      <li key={artist.name}>
                        {artist.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <label htmlFor="song" className="hidden">Song progress</label>
                <progress className="w-full song-progress" id="song" max={100} value={data?.relativeProgress}> {data?.relativeProgress}% </progress>
              </div>
            </div>
          </div>
        </a>
      }
      {data?.songStatus === 'NotPlaying' &&
        <a href={'https://open.spotify.com/user/begv4cjczdeoyhbaj1vfdb59j?si=a5b22d553e47406e'} target="_blank" rel="noopener noreferrer" data-tip={"Visit profile on spotify"}>
        <Tooltip />
        <div className="min-w-max	md:max-w-sm max-w-xs flex h-12 border dark:border-cool-gray-700 rounded-xl overflow-y-hidden truncate">
          <div className="flex flex-col my-auto w-full max-w-full overflow-x-hidden">
            <span className="text-xs dark:text-cool-gray-400 text-center ">I&apos;m listening to:</span>
            <div className="w-max flex overflow-hidden	">
            <div className={`text-cool-gray-600 dark:text-cool-gray-400  flex ${data?.title ? 'scroll-text' : ''} w-full px-2`}>

                <span className="font-bold">Not Playing</span>
                
                <span className="mx-2 dark:text-cool-gray-400"> – </span>

                <span className="flex dark:text-cool-gray-200">Spotify</span>
                
              </div>
            </div>
    

          </div>
        </div>
      </a>
      }
  
    </div>
  )
}