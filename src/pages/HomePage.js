import { useAuth } from '../libs/useAuth'

const Homepage = () => {
  const { isAuthenticated } = useAuth()

  return isAuthenticated ? (
    <p>You are authorized</p>
  ) : (
    <div
      style={{
        display: 'grid',
        placeItems: 'center',
        backgroundColor: 'var(--dark-foreground-color)',
        borderRadius: 4,
      }}
    >
      <p>
        Pwease authorize yourself by clicking that nice looking button on
        <strong> top-right</strong> corner of the page before using this app.
      </p>
    </div>
  )
}

export default Homepage
