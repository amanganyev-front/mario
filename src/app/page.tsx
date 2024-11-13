import styles from "./page.module.scss";
import { TicTacToe } from "./ui";

export default function Home() {
    return (
        <main className={styles.Home}>
            <TicTacToe />
        </main>
    );
}
