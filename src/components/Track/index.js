import Button from '../Button'
import style from './style.module.css'
import { useSelector, useDispatch } from 'react-redux'
import {
  addSelectedTracks,
  substractSelectedTracks,
} from '../../store/playlist'

const Track = ({ track }) => {
  const dispatch = useDispatch()
  const selectedTracks = useSelector(state => state.playlist.selectedTracks)

  const isSelected = selectedTracks.includes(track.uri)

  const handleSelect = () => {
    if (isSelected) {
      dispatch(substractSelectedTracks(track.uri))
    } else {
      dispatch(addSelectedTracks(track.uri))
    }
  }

  const artists = track.artists.map((artist, index) => {
    const isLast = index === track.artists.length - 1
    return (
      <a
        href={artist.external_urls.spotify}
        target="_blank"
        rel="noreferrer"
        key={artist.id}
      >
        {artist.name + (isLast ? '' : ', ')}
      </a>
    )
  })

  const image = track.album.images.find(image => image.width === 64)

  return (
    <div className={style.wrapper}>
      <img className={style.image} src={image.url} alt={track.name} />
      <span className={style.info}>
        <a className={style.title} href={track.external_urls.spotify}>
          {track.name}
        </a>
        <p className={style.artist}>{artists}</p>
      </span>
      <span className={style.action}>
        <Button
          onClick={handleSelect}
          variant={isSelected ? 'secondary' : 'primary'}
        >
          {isSelected ? 'Deselect' : 'Select'}
        </Button>
      </span>
    </div>
  )
}

export default Track
