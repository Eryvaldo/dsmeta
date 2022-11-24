import img from "../../assets/img/notification-image.svg"

import './styles.css'

function NotificationButton
    () {
    return (

        <div className="dsmeta-red-btn">
            <img src={img} alt="Notificar" />
        </div>
    )
}

export default NotificationButton
