"use client"
import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'
import styles from "./gallery.module.css"
import AnimateElements from '../animateElements/AnimateElements'

export default function Gallery({ galleryItems }: { galleryItems: { name: string; image: string; }[] }) {
    const [activeImageIndex, activeImageIndexSet] = useState(0)
    const [viewingFullScreen, viewingFullScreenSet] = useState(false)
    const [showingSettings, showingSettingsSet] = useState(false)
    const debounce = useRef<NodeJS.Timeout>()

    //stop scrolling on select
    useEffect(() => {
        if (viewingFullScreen) {
            const body = document.querySelector("body") as HTMLBodyElement
            body.style.overflow = "hidden"
        } else {
            const body = document.querySelector("body") as HTMLBodyElement
            body.style.overflow = "auto"
        }
    }, [viewingFullScreen])

    function handleSeek(option: "next" | "prev") {
        if (option === "next") {
            activeImageIndexSet(prevIndex => {
                if (prevIndex === undefined) return prevIndex

                let newIndex = prevIndex + 1

                if (newIndex > galleryItems.length - 1) {
                    newIndex = 0
                }

                return newIndex
            })
        } else {
            activeImageIndexSet(prevIndex => {
                if (prevIndex === undefined) return prevIndex

                let newIndex = prevIndex - 1

                if (newIndex < 0) {
                    newIndex = galleryItems.length - 1
                }

                return newIndex
            })
        }
    }

    return (
        <div>
            <div style={{ display: viewingFullScreen ? "grid" : "none", position: "fixed", top: 0, left: 0, bottom: 0, right: 0, backgroundColor: "rgba(0,0,0,0.9)", zIndex: 100, gridTemplateRows: "auto 1fr auto" }}
                onClick={() => { viewingFullScreenSet(false) }}
                onMouseMove={() => {
                    showingSettingsSet(true)

                    if (debounce.current) clearTimeout(debounce.current)

                    debounce.current = setTimeout(() => {
                        showingSettingsSet(false)
                    }, 1000);
                }}
            >
                <div style={{ opacity: showingSettings ? 1 : 0, display: "flex", alignItems: "center", padding: "1rem" }}>
                    <p style={{ fontWeight: "bold" }}>{activeImageIndex + 1} / {galleryItems.length}</p>

                    <button style={{ marginLeft: "auto" }} onClick={(e) => { viewingFullScreenSet(false) }}>
                        <svg style={{ width: "2rem" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                    </button>
                </div>

                <div style={{ position: "relative", overflow: "hidden", width: "min(800px, 100%)", justifySelf: "center" }} onClick={(e) => { e.stopPropagation() }}>
                    {galleryItems.map((eachItem, eachItemIndex) => {
                        return (
                            <Image key={eachItemIndex} alt={`${eachItem.name}'s image`} src={eachItem.image} width={1000} height={1000} style={{ objectFit: "contain", height: "100%", width: "100%", display: activeImageIndex !== eachItemIndex ? "none" : "" }} />
                        )
                    })}

                    <button style={{ opacity: showingSettings ? 1 : 0 }} className={`${styles.seekButton} ${styles.prevButton}`} onClick={(e) => { e.stopPropagation(); handleSeek("prev"); if (debounce.current) clearTimeout(debounce.current) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg>
                    </button>

                    <button style={{ opacity: showingSettings ? 1 : 0 }} className={`${styles.seekButton} ${styles.nextButton}`} onClick={(e) => { e.stopPropagation(); handleSeek("next"); if (debounce.current) clearTimeout(debounce.current) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                    </button>
                </div>

                <p style={{ justifySelf: "center", textTransform: "capitalize", padding: "1rem" }}>{galleryItems[activeImageIndex].name}</p>
            </div>

            <AnimateElements animationOption={"slideUp"} style={{ display: "grid", alignContent: "flex-start", gridTemplateColumns: "repeat(auto-fit, minmax(min(250px, 100%), 1fr))", gridAutoRows: "250px", gap: "1rem" }}>
                {galleryItems.map((eachItem, eachItemIndex) => {
                    return (
                        <div className={styles.itemCont} key={eachItemIndex} onClick={() => { activeImageIndexSet(eachItemIndex); viewingFullScreenSet(true) }}>
                            <Image alt={`${eachItem.name}'s image`} src={eachItem.image} width={400} height={400} style={{ objectFit: "cover", width: "100%", height: "100%" }} />

                            <div className={styles.backdrop} style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0, backgroundColor: "#000" }}></div>

                            <div className={styles.fullscreenButton} style={{ position: "absolute", top: "50%", left: "50%", translate: "-50% -50%", cursor: "pointer" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z" /></svg>
                            </div>
                        </div>
                    )
                })}
            </AnimateElements>
        </div>
    )
}
