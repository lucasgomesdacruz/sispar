import { IoNotificationsOutline } from "react-icons/io5"
import styles from "./Notifications.module.scss"
import { useState } from "react"

const Notifications = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [number, setNumber] = useState(4)

  function handleNumber() {
    number(0)
  }

  function handleToggle() {
    setIsOpen(prev => !prev)

    if (!isOpen) {
      setNumber(0)
    }
  }
  return (
    <figcaption className={styles.notificationsBg}>
      <IoNotificationsOutline onClick={handleToggle}/>

      {isOpen && (
        <div className={styles.notificationsContainer}>
          <div className={styles.notificationsHeader}>
            <h2>Notificações</h2>
          </div>
          <div className={styles.notificationsInfo}>
            <div>
              <h3>Novo reembolso solicitado</h3> <span>Info</span>
            </div>
            <p>João Silva solicitou reembolso de R$ 450,0</p>
            <p>há 5 min</p>
          </div>
          <div className={styles.notificationsInfo}>
            <div>
              <h3>Novo reembolso solicitado</h3> <span>Info</span>
            </div>
            <p>João Silva solicitou reembolso de R$ 450,0</p>
            <p>há 5 min</p>
          </div>
          <div className={styles.notificationsInfo}>
            <div>
              <h3>Novo reembolso solicitado</h3> <span>Info</span>
            </div>
            <p>João Silva solicitou reembolso de R$ 450,0</p>
            <p>há 5 min</p>
          </div>
          <div className={styles.notificationsInfo}>
            <div>
              <h3>Novo reembolso solicitado</h3> <span>Info</span>
            </div>
            <p>João Silva solicitou reembolso de R$ 450,0</p>
            <p>há 5 min</p>
          </div>
        </div>
      )}
      {number > 0 && (
        <span className={styles.notificationsNumber}>{number}</span>
      )}
    </figcaption>
  )
}

export default Notifications
