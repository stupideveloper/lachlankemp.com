import { getCurrentlyPlaying } from '../../../lib/spotify';

const currentlyPlaying = async (_, res) => {
  const response = await getCurrentlyPlaying();
  if(response.status === 204) {
    return res.status(200)
  }
  if(response.status !== 200) {
    return res.status(500)
  }
  const items = await response.json()

  if (items.currently_playing_type === 'episode') {
    return res.status(200).json({})
  } 
  
  if (items.currently_playing_type === 'track') {
    const relativeProgress = Math.round((100 * items.progress_ms) / items.item.duration_ms)
    return res.status(200).json({ 
      title: items.item.name,
      album: items.item.album.name,
      artists: items.item.artists,
      link: items.item.external_urls.spotify,
      albumCover: items.item.album.images[1],
      length: items.item.duration_ms/5,
      progress: items.progress_ms/5,
      relativeProgress: relativeProgress
    });
  }
  
};
export default currentlyPlaying