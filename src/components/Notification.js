import { useContext } from 'react'
import NotificationContext from '../NotificationContext'

const Notification = () => {
  const [counter] = useContext(NotificationContext)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }

  // if (true) return null

  return (
    <div style={style}>
      {counter}
    </div>
  )
}

export default Notification
