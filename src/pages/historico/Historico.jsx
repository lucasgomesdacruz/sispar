import styles from "./Historico.module.scss"
import Header from "../../components/header/Header.jsx"
import { MdOutlineNavigateNext } from "react-icons/md"


function Historico() {
    return (
        <main className={styles.historico}>
            <Header  icon={<MdOutlineNavigateNext />} text="Historico"/>

            <div>
                <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20professions/Construction%20Worker%20Light%20Skin%20Tone.png" alt="Construction Worker Light Skin Tone" width="25" height="25" />
                <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Construction.png" alt="Construction" width="25" height="25" />
            </div>
            
        </main>
    )
}

export default Historico