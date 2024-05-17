"use client"
import { defaultImageSrc2, defaultImageSrc } from '@/utility/globalState'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import styles from "./slideShow.module.css"
import MainButton from '../mainButton/MainButton'

const slides = [
    {
        title: "Wedding Bliss",
        name: "Emma & Liam",
        supportingText: "Capturing the magic of your special day with timeless elegance.",
        image: require(`@/public/projects/luminousLens/wedding.jpg`).default.src,
        buttonText: "View Gallery",
    },
    {
        title: "Corporate Headshots",
        name: "Elite Agency",
        supportingText: "Professional headshots that make a lasting impression.",
        image: require(`@/public/projects/luminousLens/corporate.jpg`).default.src,
        buttonText: "Explore More",
    },
    {
        title: "Family Portraits",
        name: "The Johnsons",
        supportingText: "Cherishing family moments with beautiful, candid portraits.",
        image: require(`@/public/projects/luminousLens/family.jpg`).default.src,
        buttonText: "See More",
    },
    {
        title: "Event Coverage",
        name: "Tech Conference 2024",
        supportingText: "Comprehensive coverage of your events, capturing every detail.",
        image: require(`@/public/projects/luminousLens/conference.jpg`).default.src,
        buttonText: "Learn More",
    },
    {
        title: "Product Photography",
        name: "Artisan Goods",
        supportingText: "Showcasing your products with high-quality, detailed images.",
        image: require(`@/public/projects/luminousLens/product.jpg`).default.src,
        buttonText: "View Collection",
    },
    {
        title: "Lifestyle Shoot",
        name: "Urban Living",
        supportingText: "Dynamic lifestyle photography that tells your story.",
        image: require(`@/public/projects/luminousLens/fun.jpg`).default.src,
        buttonText: "Discover More",
    },
    {
        title: "Commercial Advertising",
        name: "Fashion Forward",
        supportingText: "Creative and impactful images for your advertising campaigns.",
        image: require(`@/public/projects/luminousLens/ad.jpg`).default.src,
        buttonText: "See Portfolio",
    },
    {
        title: "Newborn Photography",
        name: "Baby Noah",
        supportingText: "Capturing the precious first moments of life with tender care.",
        image: require(`@/public/projects/luminousLens/newborn.jpg`).default.src,
        buttonText: "View Photos",
    },
    {
        title: "Real Estate",
        name: "Luxury Homes",
        supportingText: "Showcasing properties with stunning real estate photography.",
        image: require(`@/public/projects/luminousLens/home.jpg`).default.src,
        buttonText: "Explore Listings",
    },
    {
        title: "Food Photography",
        name: "Gourmet Delights",
        supportingText: "Deliciously crafted food photography that tantalizes the senses.",
        image: require(`@/public/projects/luminousLens/food.jpg`).default.src,
        buttonText: "See Dishes",
    }
];

export default function SlideShow() {
    const [currentIndex, currentIndexSet] = useState(Math.floor(Math.random() * slides.length))
    const [transitionClick, transitionClickSet] = useState(true)
    const [userClicked, userClickedSet] = useState(false)
    const [goingDirection, goingDirectionSet] = useState<"left" | "right">("right")

    const userClickedDebounce = useRef<NodeJS.Timeout>()

    //auto scroll
    useEffect(() => {
        if (userClicked) return

        const myInterval = setInterval(() => {
            handleSeek("next")
        }, 5000)

        return () => { clearInterval(myInterval) }
    }, [userClicked])

    function handleSeek(option: "next" | "prev") {
        if (option === "next") {
            currentIndexSet(prevIndex => {
                let newIndex = prevIndex + 1

                if (newIndex > slides.length - 1) {
                    newIndex = 0
                }

                return newIndex
            })

            goingDirectionSet("right")
        } else {
            currentIndexSet(prevIndex => {
                let newIndex = prevIndex - 1

                if (newIndex < 0) {
                    newIndex = slides.length - 1
                }

                return newIndex
            })

            goingDirectionSet("left")
        }

        transitionClickSet(false)
        setTimeout(() => {
            transitionClickSet(true)
        }, 1);
    }

    function handleClick(option: "next" | "prev") {
        handleSeek(option)

        userClickedSet(true)

        if (userClickedDebounce.current) clearTimeout(userClickedDebounce.current)
        userClickedDebounce.current = setTimeout(() => {
            userClickedSet(false)
        }, 30000);
    }

    function getInRange(option: "minus" | "add") {
        if (option === "minus") {

            let val = currentIndex - 1
            if (val < 0) val = slides.length - 1

            return val
        } else {
            let val = currentIndex + 1
            if (val > slides.length - 1) val = 0

            return val
        }
    }

    return (
        <div style={{ height: "100svh", display: "grid", alignContent: "flex-end", padding: "1rem", position: "relative", overflow: "hidden" }}>
            {slides.map((eachSlide, eachSlideIndex) => {
                return (
                    <Image key={eachSlideIndex} className={`${eachSlideIndex === currentIndex && styles.fadeIn}`} alt={`${eachSlide.name} image`} priority={eachSlideIndex === currentIndex} src={eachSlide.image} width={1500} height={1500} style={{ objectFit: "cover", position: "absolute", width: "100%", height: "100%", zIndex: eachSlideIndex === currentIndex ? 2 : eachSlideIndex === (goingDirection === "right" ? getInRange("minus") : getInRange("add")) ? 1 : "", }} />
                )
            })}

            <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0, backgroundColor: "rgba(0,0,0,0.7)", zIndex: 2 }}></div>

            <div style={{ padding: "3rem", display: "grid", gap: ".5rem", justifyItems: "flex-end", zIndex: 2 }}>
                <h2 className={`${styles.opacity} ${transitionClick && styles.slideUp}`}>{slides[currentIndex].title}</h2>

                <p className={`${styles.opacity} ${styles.largeText} ${transitionClick && styles.slideUp}`} style={{ fontSize: "var(--extraLargeFontSize)", animationDelay: "500ms" }}>{slides[currentIndex].name}</p>

                <p className={`${styles.opacity} ${transitionClick && styles.slideUp}`} style={{ animationDelay: "1000ms" }}>{slides[currentIndex].supportingText}</p>

                <div className={`${styles.opacity} ${transitionClick && styles.slideUp}`} style={{ animationDelay: "1250ms", marginTop: ".5rem" }}>
                    <MainButton link={""} text={slides[currentIndex].buttonText} />
                </div>
            </div>

            <div className={styles.buttonCont} style={{ position: "relative", zIndex: 2, display: "flex", gap: ".1rem" }}>
                <button onClick={() => { handleClick("prev") }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" /></svg>
                </button>

                <button onClick={() => { handleClick("next") }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
                </button>
            </div>
        </div>
    )
}
