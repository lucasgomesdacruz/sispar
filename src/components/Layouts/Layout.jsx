import styles from "./Layout.module.scss"

// import Header from "../header/Header.jsx"
import { Outlet } from "react-router-dom"
import NavBar from "../navbar/Navbar"

function Layout() {
    return (
        <div className={styles.layout}>
            <NavBar />
            <section>
                {/* <Header /> */}
                <Outlet />
            </section>
            

        </div>
    )
}

export default Layout