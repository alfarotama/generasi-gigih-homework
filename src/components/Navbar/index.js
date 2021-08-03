import { useState } from 'react'
import Button from '../Button'
import style from './style.module.css'
import { FaSpotify } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'
import { authorize, getTracks } from '../../libs/spotify'
import { useSelector, useDispatch } from 'react-redux'
import { setTracks } from '../../store/playlist'
import { logout } from '../../store/auth'
import Dropdown from '../Dropdown'

const Navbar = () => {
  const [query, setQuery] = useState('')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const { isAuthenticated, accessToken, user } = useSelector(
    state => state.auth
  )
  const dispatch = useDispatch()

  const image =
    Object.keys(user).length > 0 && user.images.length > 0
      ? user.images[0].url
      : 'https://picsum.photos/64'

  const handleSubmit = e => {
    e.preventDefault()
    if (!query) alert('Pwease input the query')
    getTracks(accessToken, {
      q: query,
      type: 'track',
      limit: 12,
    }).then(res => dispatch(setTracks(res.tracks.items)))
  }

  return (
    <nav className={style.navbar}>
      <div className={style.logo}>
        <a href="/">GenGIGIH</a>
      </div>
      <form className={style.search} onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          placeholder="Search..."
          onChange={e => setQuery(e.target.value)}
          value={query}
        />
        <Button onClick={handleSubmit} variant="transparent">
          <FiSearch size="1.25em" style={{ margin: 0 }} />
        </Button>
      </form>
      <div className={style.user}>
        {isAuthenticated ? (
          <>
            <Button variant="danger" onClick={() => dispatch(logout())}>
              Logout
            </Button>
            <Button
              variant="transparent"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <img
                style={{ width: '3rem', borderRadius: '9999px' }}
                src={image}
                alt="Profile"
              />
            </Button>
            <Dropdown isOpen={isDropdownOpen} />
          </>
        ) : (
          <Button onClick={authorize} icon={<FaSpotify />}>
            Login to Spotify
          </Button>
        )}
      </div>
    </nav>
  )
}

export default Navbar
