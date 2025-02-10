import styles from "./Layout.module.scss"

import { Outlet } from "react-router-dom"
import NavBar from "../navbar/Navbar"

function Layout() {
    return (
        <div className={styles.layout}>
            <NavBar />
            <Outlet />
        </div>
    )
}

export default Layout