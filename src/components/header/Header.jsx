import styles from "./Header.module.scss"
import { AiOutlineHome } from "react-icons/ai"
import { MdOutlineNavigateNext } from "react-icons/md";

import Notifications from "../notifications/Notifications";


function Header({icon, text}) {
    return (
        <header className={styles.header}>    
            <div>
                <AiOutlineHome />
                <MdOutlineNavigateNext className={styles.next}/>
                <nav>
                    <ul>
                        <li>Reembolsos</li>
                        <li>{icon}</li>
                        <li>{text}</li>
                    </ul>
                </nav>
            </div>

            <span>
                <Notifications />
            </span>
        </header>
    )
}

export default Header