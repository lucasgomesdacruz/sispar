import styles from "./NavbarAdm.module.scss"

import { useEffect, useState } from "react";
import { MdMenuOpen } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { FaFileInvoiceDollar, FaUsers } from "react-icons/fa6";
import { TbClipboardSearch, TbReportAnalytics } from "react-icons/tb";
import { LuHistory } from "react-icons/lu";
import { FiLogOut } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";
import Api from "../../Services/Api";
import { IoHelpCircleOutline } from "react-icons/io5";

function NavbarAdm() {
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(true); 


    const toggleCollapse = () => {
        setCollapsed(prevState => !prevState);
    };

    const closeMenu = () => {
        setCollapsed(true);
    };

    function handleLogOut(event) {
        event.preventDefault();
        navigate("/loginAdm");
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
                            <h2>Usuário</h2>
                            <p>Cargo</p>
                            <Link to="perfil" onClick={closeMenu}>Perfil</Link>
                        </>
                    )}
                </section>
                

                <ul className={styles.navList}>
                    <li>
                        <Link to="/dashboardAdm" onClick={closeMenu}>
                            <span className={styles.containerIcon}><AiOutlineHome /></span>

                            <span className={collapsed ? styles.hidden : ""}>Início</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/reembolsoAdm" onClick={closeMenu}>
                            <span className={styles.containerIcon}><TbReportAnalytics /></span>

                            <span className={collapsed ? styles.hidden : ""}>Reembolsos</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/gerenciarUsuarios" onClick={closeMenu}>
                            <span className={styles.containerIcon}><FaUsers /></span>

                            <span className={collapsed ? styles.hidden : ""}>Gerenciar Usuários</span>
                        </Link>
                    </li>
                </ul>

                <button className={styles.fiLogOut} onClick={handleLogOut}>
                    <FiLogOut  />
                </button>   
                
            </aside>
        </nav>
    );
}

export default NavbarAdm;
