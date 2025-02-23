import styles from "./Analises.module.scss"

import { MdOutlineNavigateNext } from "react-icons/md"
import Header from "../../components/header/Header.jsx"

function Analises() {
    return (
        <main className={styles.analises}>
            <Header  icon={<MdOutlineNavigateNext />} text="Análises"/>

            <div>
                <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20professions/Construction%20Worker%20Light%20Skin%20Tone.png" alt="Construction Worker Light Skin Tone" width="25" height="25" />
                <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Construction.png" alt="Construction" width="25" height="25" />
            </div>
            
        </main>
    )
}

export default Analises