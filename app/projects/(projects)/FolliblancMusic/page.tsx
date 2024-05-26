"use client"
import Image from "next/image"
import styles from "./page.module.css"
import Parallax from "./projectComponents/parallax/Parallax"
import InfiniteScroll from "./projectComponents/infiniteScroll/InfiniteScroll"
import Link from "next/link"

export default function Page() {

    return (
        <div className={styles.main}>
            <nav></nav>

            <>
                <h1 style={{ fontSize: "var(--extraLargeFontSize)", justifySelf: "center", color: "var(--color1)", marginTop: "10rem" }}>Folliblanc</h1>

                <Parallax speed={-.2} style={{ position: "relative", width: "min(600px, 90%)", height: "90vh", justifySelf: "center", top: "-4vw", display: "grid", gridTemplateRows: "auto 1fr auto" }}>
                    <div style={{ backgroundColor: "#000", color: "#fff", padding: ".5rem" }}>hey</div>

                    <div style={{ overflow: "hidden", width: "100%" }}>
                        <Parallax speed={.1} style={{ position: "relative", width: "100%", height: "100%" }}>
                            <Image alt="bg" src={require(`@/public/projects/folliblancMusic/titleimage.jpg`)} fill={true} sizes="(max-width: 600px) 100vw, 50vw" style={{ objectFit: "cover", overflow: "visible" }} />
                        </Parallax>
                    </div>

                    <div style={{ backgroundColor: "#000", color: "#fff", padding: ".5rem" }}>hi</div>
                </Parallax>


                <Parallax style={{ width: "min(700px, 100%)", justifySelf: "center" }} speed={-.1}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus perspiciatis qui, nulla omnis quos nisi suscipit provident fugit ut excepturi delectus, animi modi laboriosam </p>
                </Parallax>
            </>

            <Link href={""} style={{ rotate: "3deg", scale: 1.1, fontSize: "var(--smallFontSize)" }}>
                <InfiniteScroll
                    trainProps={{
                        style: { display: "flex", alignItems: "center", gap: "1rem", marginRight: "1rem", backgroundColor: "var(--color2)", color: "#000" }
                    }}
                    amountOfTrains={2}
                    initialTimeToLoop={20}
                    respondToHover={false}>
                    {["New Drop!", "Listen Here!", "New Drop!", "Listen Here!", "New Drop!", "Listen Here!", "New Drop!", "Listen Here!", "New Drop!", "Listen Here!", "New Drop!", "Listen Here!", "New Drop!", "Listen Here!", "New Drop!", "Listen Here!",].map((eachWord, eachWordIndex) => {
                        return (
                            <p key={eachWordIndex} style={{ textTransform: "uppercase", whiteSpace: "nowrap" }}>{eachWord}</p>
                        )
                    })}
                </InfiniteScroll>
            </Link>

            <section>
                content
            </section>
        </div>
    )
}
