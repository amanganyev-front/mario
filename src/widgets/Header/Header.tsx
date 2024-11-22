"use client";

import Link from "next/link";
import styles from "./Header.module.scss";
import { usePathname } from "next/navigation";
import { PATHS } from "@/shared/variables";

export default function Header() {
    const pathname = usePathname();
    return (
        <header className={styles.Header}>
            {PATHS.map((el, i) => (
                <Link
                    key={i}
                    href={el.href}
                    className={pathname === el.href ? styles.active : ""}
                >
                    {el.name}
                </Link>
            ))}
        </header>
    );
}
