"use client"
import { useRef, useEffect, useState } from "react"
import styles from "./animateIntro.module.css"
import { wait } from "@/useful/UsefulFunctions"

export default function AnimateIntroText() {
    const textLines = useRef([
        {
            text: "We transform your vision into a stunning and functional website",
            duration: 5000
        },
        {
            text: "Trust us to handle everything from conceptualization to the final product",
            supportingText: "Let us ensure your online presence is unmatched",
            duration: 10000
        },
    ])

    const headingContainerRef = useRef<HTMLHeadingElement>(null)
    const supportingTextContainerRef = useRef<HTMLHeadingElement>(null)
    const [started, startedSet] = useState(false)

    //start things off
    const mounted = useRef(false)
    useEffect(() => {
        if (mounted.current) return
        mounted.current = true

        startAnimation()
        startedSet(true)

        return () => {
        }
    }, [])

    async function startAnimation() {
        if (!headingContainerRef.current || !supportingTextContainerRef.current) return

        for (let index = 0; index < textLines.current.length; index++) {
            //clear all
            headingContainerRef.current.innerHTML = ""
            supportingTextContainerRef.current.innerHTML = ""

            const eachObj = textLines.current[index]

            //adds each word as a span to the container
            const wordArray = eachObj.text.split(" ")
            for (let smallIndex = 0; smallIndex < wordArray.length; smallIndex++) {
                const eachWord = wordArray[smallIndex]

                createAndAppendWord(eachWord, smallIndex, "heading")
            }

            if (eachObj.supportingText) {

                //adds each word as a span to the container
                const supportingTextArray = eachObj.supportingText.split(" ")
                for (let smallIndex = 0; smallIndex < supportingTextArray.length; smallIndex++) {
                    const eachWord = supportingTextArray[smallIndex]

                    createAndAppendWord(eachWord, smallIndex, "support")

                    await wait(300)
                }
            }


            //get ready to start next
            await wait(eachObj.duration)
        }

        startAnimation()
    }

    function createAndAppendWord(wordToAppend: string, index: number, type: "heading" | "support") {
        if (!headingContainerRef.current || !supportingTextContainerRef.current) return

        const el = document.createElement(type === "heading" ? "div" : "p")
        el.innerText = wordToAppend
        el.style.animationDelay = `${index * (type === "heading" ? 400 : 200)}ms`
        el.classList.add(type === "heading" ? styles.wordDiv : styles.supportTextEl)

        if (Math.random() > 0.3 && type === "heading") {
            el.classList.add(styles.highlight)
        }

        if (type === "heading") {
            headingContainerRef.current.append(el)
        } else {
            supportingTextContainerRef.current.append(el)
        }
    }

    return (
        <div className={styles.main} style={{ width: "min(500px, 100%)", display: "grid", position: "relative", zIndex: 1, justifyItems: "center", padding: "1rem", backgroundColor: "rgba(255,255,255,0.9)", opacity: started ? 1 : 0, transition: "opacity 1s", gap: "1rem" }}>
            <h1 ref={headingContainerRef} style={{ display: "flex", flexWrap: "wrap", textTransform: "uppercase", }} ></h1>

            <div ref={supportingTextContainerRef} style={{ display: "flex", flexWrap: "wrap", gap: ".2rem", justifySelf: "flex-end", paddingRight: "1rem", fontWeight: "bold" }} ></div>
        </div>
    )
}


