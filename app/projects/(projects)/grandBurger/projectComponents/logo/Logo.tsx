import Image from "next/image"
import styles from "./logo.module.css"

export default function Logo({ alternate }: { alternate?: boolean }) {
    return (
        <div className={styles.logo}>
            <Image alt="logo" src={require(alternate !== undefined ? `@/public/projects/grandBurger/logodark.png` : `@/public/projects/grandBurger/logo.png`).default.src} width={300} height={300} style={{ objectFit: "contain", width: "clamp(20px, 60vw,300px)" }} />
        </div>
    )
}