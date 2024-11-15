import styles from "./page.module.scss";
import { Snake } from "./ui";

export default function Home() {
    return (
        <main className={styles.Home}>
            <Snake/>
        </main>
    );
}
