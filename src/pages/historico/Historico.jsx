import styles from "./Historico.module.scss";
import Header from "../../components/header/Header.jsx";
import { MdOutlineNavigateNext } from "react-icons/md";

function Historico() {
    return (
        <main className={styles.historico}>
            <Header icon={<MdOutlineNavigateNext />} text="Histórico" />
            
            <div className={styles.constructionContainer}>
                <img 
                    src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20professions/Construction%20Worker%20Light%20Skin%20Tone.png" 
                    alt="Construction Worker" 
                    width="50" 
                    height="50" 
                />
                <img 
                    src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Construction.png" 
                    alt="Construction Sign" 
                    width="50" 
                    height="50" 
                />
                <p className={styles.constructionText}>Esta seção ainda está em construção. Em breve teremos novidades!</p>
            </div>
        </main>
    );
}

export default Historico;
