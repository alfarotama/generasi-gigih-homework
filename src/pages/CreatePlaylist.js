import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearSelectedTracks } from '../store/playlist'
import { FaPlus } from 'react-icons/fa'
import Track from '../components/Track'
import Modal from '../components/Modal'
import PlaylistForm from '../components/PlaylistForm'
import Button from '../components/Button'

const CreatePlaylist = () => {
  const dispatch = useDispatch()
  const { tracks, selectedTracks } = useSelector(state => state.playlist)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h2>Tracks</h2>
        <span style={{ display: 'flex', alignItems: 'center' }}>
          <Button
            onClick={() => dispatch(clearSelectedTracks())}
            type="button"
            variant="transparent"
            disabled={selectedTracks.length === 0}
          >
            Clear Selection
          </Button>
          <Button
            icon={<FaPlus />}
            onClick={() => setIsModalOpen(true)}
            disabled={selectedTracks.length === 0}
          >
            Create Playlist
          </Button>
        </span>
      </div>
      <div>
        {tracks.map(track => (
          <Track track={track} key={track.id} />
        ))}
      </div>
      <Modal
        title="Create Playlist"
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
      >
        <PlaylistForm />
      </Modal>
    </div>
  )
}

export default CreatePlaylist
