import Image from "next/image"
import styles from "./logo.module.css"

export default function Logo() {
    return (
        <div className={styles.logo}>
            <p>BURGER</p>

            <span className="material-symbols-outlined">
                lunch_dining
            </span>

            <p>BLISS</p>
        </div>
    )
}