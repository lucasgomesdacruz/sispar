import styles from "./Header.module.scss"
import { AiOutlineHome } from "react-icons/ai"
import { MdOutlineNavigateNext } from "react-icons/md";


function Header() {
    return (
        <header className={styles.header}>    
            <AiOutlineHome />

            <MdOutlineNavigateNext className={styles.next}/>

            <nav>
                <ul>
                    <li>Reembolsos</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header