"use client"
import "./page.css"
import Image from "next/image"
import styles from "./page.module.css"
import Parallax from "./projectComponents/parallax/Parallax"
import InfiniteScroll from "./projectComponents/infiniteScroll/InfiniteScroll"
import Link from "next/link"
import AnimateBackgroundTile from "./projectComponents/animateBackgroundTile/AnimateBackgroundTile"
import React from "react"
import Logo from "./projectComponents/logo/Logo"
import History from "./projectComponents/history/History"
import Shop from "./projectComponents/shop/Shop"

export default function Page() {

    return (
        <main className={styles.main}>

            <>
                {/* distortion effect */}
                <svg style={{ display: "none" }}>
                    <defs>
                        <filter id="distort">
                            <feTurbulence baseFrequency=".00015" type="fractalNoise" />
                            <feDisplacementMap in="SourceGraphic" scale="300" xChannelSelector="R" yChannelSelector="B" />
                        </filter>
                    </defs>
                </svg>

                <AnimateBackgroundTile initialColor="var(--gray1)" endColor="var(--backgroundColor)" initialDelay={1000} numOfTiles={5} />

                <div style={{ marginTop: "5rem", justifySelf: "center", position: "relative" }}>
                    <h1 className={`slideUp`} style={{ fontSize: "var(--extraLargeFontSize)", color: "var(--color1)", }}><div>Folliblanc</div></h1>

                    <h1 className={`${styles.textOutline}`} style={{ position: "absolute", fontSize: "var(--extraLargeFontSize)", top: 0, left: 0, WebkitTextStroke: ".2vw var(--gray1)", color: "transparent", translate: ".4vw .4vw", filter: "url(#distort)", WebkitFontSmoothing: "antialiased", animation: `opacity 200ms 2000ms both, translate 2s infinite alternate` }}><div>Folliblanc</div></h1>
                </div>

                <Parallax className={styles.topImageCont} speed={-.2} style={{ position: "relative", width: "min(700px, 100%)", height: "450px", justifySelf: "center", top: "", display: "grid", gridTemplateRows: "auto 1fr auto", animation: `transformRotateY 1s 1600ms both, opacity 2500ms 1600ms both`, rotate: "-2deg" }}>
                    <div style={{ backgroundColor: "#000", color: "#fff", padding: "1rem" }}></div>

                    <div style={{ overflow: "hidden", width: "100%" }}>
                        <Parallax speed={.2} style={{ position: "relative", width: "100%", height: "100%" }}>
                            <Image alt="bg" src={require(`@/public/projects/folliblancMusic/titleimage.jpg`)} fill={true} sizes="(max-width: 600px) 100vw, 50vw" style={{ objectFit: "cover", overflow: "visible", objectPosition: "0 47%" }} />
                        </Parallax>
                    </div>

                    <div style={{ backgroundColor: "#000", color: "#fff", padding: "1.5rem" }}></div>
                </Parallax>


                <Parallax style={{ width: "min(700px, 100%)", padding: "1rem", justifySelf: "center", fontSize: "var(--mediumFontSize)" }} speed={-.1}>
                    <p>Welcome to my world. I&apos;m Folliblanc, a rapper and songwriter dedicated to transforming my thoughts and emotions into music. My journey is fueled by the desire to release and express the ideas and feelings I hold within myself. Each track I create is a reflection of my soul, a piece of my story that I share with you.</p>
                </Parallax>
            </>

            <Link href={""} style={{ rotate: "3deg", scale: 1.3, fontSize: "var(--smallFontSize)", whiteSpace: "nowrap", display: "grid", color: "var(--backgroundColor)", textTransform: "uppercase", fontFamily: "var(--albertExtraBold)" }}>
                <InfiniteScroll
                    items={[<p key={0}>New Drop!</p>, <p key={1}>Listen Here!</p>, <Logo key={2} />]}
                    amountOfCarts={3}
                    timeToLoop={15000}
                    respondToHover={false}
                    trainProps={{
                        style: {
                            gap: "1rem",
                            marginLeft: "1rem"
                        }
                    }}
                    style={{
                        backgroundColor: "var(--color2)"
                    }}
                />
            </Link>

            <section>
                <div style={{ display: "flex", flexWrap: "wrap", columnGap: "4rem", rowGap: "1rem", alignItems: "flex-start", justifyContent: "center", margin: "0 auto", maxWidth: "1000px" }}>
                    <Image alt="profile" width={1000} height={1000} src={require(`@/public/projects/folliblancMusic/about.jpg`).default.src} style={{ flex: "0 1 500px", width: "min(400px, 100%)", }} />

                    <p style={{ flex: "0 1 350px", fontSize: "var(--smallFontSize)", fontWeight: "bold", animation: "translate both linear", animationTimeline: "view()", "--translateFrom": "0 20%" } as React.CSSProperties}>For me, music is a way to express the ideas and emotions that are often locked inside. Growing up, I found solace in rhythm and poetry, using them to navigate the highs and lows of life. This journey led me to the world of rap, where I blend melodic, psychedelic, trap, and rage elements to craft a sound that's uniquely mine. <br /><br />

                        My music is an exploration of my mind and a way to connect with others on a deeper level. Whether it&apos;s the hypnotic beats of a psychedelic track or the raw energy of a trap anthem, every song is a piece of me. I&apos;m here to take you on a journey through my experiences, thoughts, and dreams. So, buckle up and get ready to vibe with Folliblanc</p>
                </div>
            </section>

            <section style={{ padding: "4rem 0" }}>
                <div className={styles.headingCont}>
                    <h1>History</h1>

                    <p>A look back in time</p>

                    <Image alt="headerBackgroundImage" width={200} height={200} src={require(`@/public/projects/folliblancMusic/mic.png`).default.src} style={{ animation: "translate both linear", animationTimeline: "view()" }} />
                </div>

                <History />
            </section>


            <section style={{ display: "grid" }}>
                <div className={styles.headingCont}>
                    <h1>New Merch</h1>

                    <p>All in the store</p>

                    <Image alt="headerBackgroundImage" width={200} height={200} src={require(`@/public/projects/folliblancMusic/mic.png`).default.src} style={{ animation: "translate both linear", animationTimeline: "view()" }} />
                </div>

                <Shop />
            </section>

            <section style={{ display: "grid", gap: "1rem" }}>
                <Link className={styles.emailCont} href={""} style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", padding: "1rem", textTransform: "uppercase", color: "var(--color1)" }}>
                    <h1 style={{ fontSize: "var(--largeFontSize)" }}>Got Email</h1>

                    <button>
                        <span style={{ fontSize: "var(--mediumIconSize)" }} className="material-symbols-outlined">
                            arrow_right_alt
                        </span>
                    </button>
                </Link>

                <p style={{ fontSize: "var(--mediumFontSize)", maxWidth: "750px", backgroundColor: "var(--color1)", color: "var(--gray1)", lineHeight: "45px" }}>Get updates, drops, advance ticket infomation and more direct to your inbox. No spam!</p>
            </section>
        </main>
    )
}
