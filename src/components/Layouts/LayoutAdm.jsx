import styles from "./Layout.module.scss"

// import Header from "../header/Header.jsx"
import { Outlet } from "react-router-dom"
import NavbarAdm from "../navbarAdm/NavbarAdm"

function LayoutAdm() {
    return (
        <div className={styles.layout}>
            <NavbarAdm />
            <section>
                <Outlet />
            </section>
            

        </div>
    )
}

export default LayoutAdm