import { useState } from "react";
import { MdMenuOpen } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { TbClipboardSearch } from "react-icons/tb";
import { LuHistory } from "react-icons/lu";
import { FiLogOut } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

import styles from "./Navbar.module.scss";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(true); 

    const toggleCollapse = () => {
        setCollapsed(prevState => !prevState);
    };

    function handleLogOut(event) {
        event.preventDefault();
        navigate("/");
    }

    return (
        <nav>
            <aside className={`${styles.navbar} ${collapsed ? styles.collapsed : ""}`}>
                <button onClick={toggleCollapse} className={styles.menuToggle}>
                    <MdMenuOpen />
                </button>

                <section className={styles.userInfo}>
                    <FaUserCircle />
                    {!collapsed && (
                        <>
                            <h2>Dominick Silva</h2>
                            <p>Comércio Exterior</p>
                        </>
                    )}
                </section>

                <ul className={styles.navList}>
                    <li>
                    <Link to="/dashboard">
                        <AiOutlineHome />
                        <span className={collapsed ? styles.hidden : ""}>Início</span>
                    </Link>
                        
                    </li>
                    <li>
                    <Link to="reembolso">
                        <FaFileInvoiceDollar />
                        <span className={collapsed ? styles.hidden : ""}>Reembolsos</span>
                    </Link>
                        
                    </li>
                    <li>
                        <Link to="analises">
                            <TbClipboardSearch />
                            <span className={collapsed ? styles.hidden : ""}>Análises</span>
                        </Link>
                        
                    </li>
                    <li>
                    <Link to="historico"> 
                        <LuHistory />
                        <span className={collapsed ? styles.hidden : ""}>Histórico</span>
                    </Link>
                        
                    </li>
                </ul>

                <span className={styles.fiLogOut} onClick={handleLogOut}>
                    <FiLogOut  />
                </span>   
                
            </aside>
        </nav>
    );
}

export default NavBar;
