import Link from "next/link";
import styles from './startGame.module.css'
export default function StartGame(){

    return(
        <div className={styles.startGameContainer}>
            <Link href="/user">
                    <img src="/playnow.png" alt="Start Game" />
            </Link>
        </div>
    );
}