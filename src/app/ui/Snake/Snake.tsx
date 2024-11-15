"use client";

import styles from "./Snake.module.scss";

export default function Snake() {
    return (
        <div className={styles.Snake}>
            <h1>Snake</h1>
            <div className={styles.board}>
            </div>
        </div>
    );
}
