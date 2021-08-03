import { useSelector } from 'react-redux'
import style from './style.module.css'

const Dropdown = ({ isOpen }) => {
  const user = useSelector(state => state.auth.user)
  return !isOpen ? null : (
    <div className={style.dropdown}>
      <p>
        Hewwo <strong>{user.display_name}</strong>
      </p>
    </div>
  )
}

export default Dropdown
