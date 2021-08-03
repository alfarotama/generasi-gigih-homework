import { useEffect } from 'react'
import { getProfile } from './spotify'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { login, storeUser } from '../store/auth'

export const useAuth = () => {
  const { isAuthenticated, accessToken, user } = useSelector(
    state => state.auth
  )
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    if (!isAuthenticated && window.location.hash) {
      const params = window.location.hash.substr(1).split('&')
      params.forEach(param => {
        const [key, value] = param.split('=')
        if (key === 'access_token') dispatch(login(value))
      })
    }
    if (isAuthenticated && Object.keys(user).length === 0) {
      getProfile(accessToken).then(user => {
        dispatch(storeUser(user))
        history.push('/create-playlist')
      })
    }
  }, [isAuthenticated, accessToken, user, history, dispatch])

  return useSelector(state => state.auth)
}
