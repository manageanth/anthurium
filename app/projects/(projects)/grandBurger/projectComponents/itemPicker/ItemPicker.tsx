"use client"
import Image from 'next/image'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { cartItemsGlobal, item } from '../../lib/products'
import { formatter } from '@/utility/globalState'
import { useAtom } from 'jotai'
import styles from "./styles.module.css"

export default function ItemPicker({ items, imageContHeight = "65vh" }: { items: item[], imageContHeight?: string }) {
    const [cartItems, cartItemsSet] = useAtom(cartItemsGlobal)

    const [activeIndex, activeIndexSet] = useState(0)
    const [fastTransition, fastTransitionSet] = useState(false)

    const clickedAlready = useRef(false)
    const fastClickTimeout = useRef<NodeJS.Timeout>()
    const clickedAlreadyResetTimeout = useRef<NodeJS.Timeout>()

    const transitionTime = `${fastTransition ? 200 : 1000}`

    function getNextInBounds(currentIndex: number) {
        let newIndex = (currentIndex + 1) % items.length

        return newIndex
    }

    function getPrevInBounds(currentIndex: number) {
        let newIndex = (currentIndex - 1 + items.length) % items.length

        return newIndex
    }

    function detectFastClick() {
        if (clickedAlready.current) {
            fastTransitionSet(true)

            if (fastClickTimeout.current) clearTimeout(fastClickTimeout.current)

            fastClickTimeout.current = setTimeout(() => {
                fastTransitionSet(false)
            }, 100);
        }

        //double click detection time
        if (clickedAlreadyResetTimeout.current) clearTimeout(clickedAlreadyResetTimeout.current)

        clickedAlreadyResetTimeout.current = setTimeout(() => {
            clickedAlready.current = false
        }, 250);

        clickedAlready.current = true
    }

    const amountOfItemInCart = useMemo(() => {
        const foundInCart = cartItems.find(eachCartObj => eachCartObj.product.id === items[activeIndex].id)
        if (foundInCart === undefined) return 0

        return foundInCart.quantity
    }, [cartItems, activeIndex, items])

    return (
        <div style={{ color: "#fff", textAlign: "center", display: "grid" }}>
            <div style={{ display: "grid", justifyItems: "center" }}>
                <button
                    onClick={() => {
                        detectFastClick()
                        activeIndexSet(prev => {
                            return getPrevInBounds(prev)
                        })
                    }}>
                    <span style={{ fontSize: "var(--mediumIconSize)" }} className="material-symbols-outlined">
                        keyboard_arrow_up
                    </span>
                </button>

                <div style={{ justifySelf: "stretch", position: 'relative', zIndex: 0, height: imageContHeight, overflow: "hidden" }}>
                    {items.map((eachItem, eachItemIndex) => {
                        const seekNumber = 2
                        let currentOffset = -1
                        let isPreviouseElement = false
                        let isNextElement = false

                        for (let index = 0; index < seekNumber; index++) {
                            if (eachItemIndex === getNextInBounds(activeIndex + index)) {
                                currentOffset = 104 * (index + 1)

                                if (index === 0) {
                                    isNextElement = true
                                }
                            }

                            if (eachItemIndex === getPrevInBounds(activeIndex - index)) {
                                currentOffset = -104 * (index + 1)

                                if (index === 0) {
                                    isPreviouseElement = true
                                }
                            }

                        }

                        if (eachItemIndex === activeIndex) {
                            currentOffset = 0
                        }

                        return (
                            <div key={eachItemIndex} style={{ position: "absolute", top: "50%", left: 0, width: "100%", height: "70%", transform: `translate(0, ${currentOffset - 50}%)`, display: currentOffset === -1 ? "none" : "", zIndex: currentOffset === 0 ? 10 : isPreviouseElement ? 9 : "", opacity: currentOffset === 0 ? "" : .3, scale: currentOffset === 0 ? "" : .8, transition: `transform ${transitionTime}ms, opacity ${transitionTime}ms, scale ${transitionTime}ms`, transformOrigin: "center", cursor: isNextElement || isPreviouseElement ? "pointer" : "" }}
                                onClick={() => {
                                    if (isNextElement || isPreviouseElement) {
                                        activeIndexSet(eachItemIndex)
                                    }
                                }}
                            >
                                <Image alt={`${eachItem.title}`} src={eachItem.image} style={{ objectFit: "contain" }} fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                            </div>
                        )
                    })}
                </div>

                <button
                    onClick={() => {
                        detectFastClick()
                        activeIndexSet(prev => {
                            return getNextInBounds(prev)
                        })
                    }}>
                    <span style={{ rotate: "180deg", fontSize: "var(--mediumIconSize)" }} className="material-symbols-outlined">
                        keyboard_arrow_up
                    </span>
                </button>
            </div>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
                <p style={{ color: "var(--color2)", fontSize: "var(--mediumFontSize)" }}>{formatter.format(items[activeIndex]?.price)}</p>

                <button className={styles.cartButton} style={{ zIndex: 1, position: "relative", color: amountOfItemInCart > 0 ? "var(--color2)" : "" }}
                    onClick={() => {
                        cartItemsSet(prevCart => {
                            const foundItem = prevCart.find(eachCartObj => eachCartObj.product.id === items[activeIndex].id)

                            if (foundItem !== undefined) {//found
                                const newCart = prevCart.map(eachCartObj => {
                                    if (eachCartObj.product.id === items[activeIndex].id) {
                                        eachCartObj.quantity++
                                    }

                                    return eachCartObj
                                })

                                return newCart
                            } else {
                                const newCart = [...prevCart, {
                                    product: items[activeIndex],
                                    quantity: 1
                                }]

                                return newCart
                            }
                        })
                    }}>
                    <span className="material-symbols-outlined">
                        add_shopping_cart
                    </span>

                    {amountOfItemInCart > 0 && (
                        <p style={{ position: "absolute", top: 0, right: 0, translate: "100% -50%" }}>{amountOfItemInCart}</p>
                    )}
                </button>
            </div>

            <h1>{items[activeIndex]?.title}</h1>

            <p style={{ textTransform: "uppercase", color: "var(--gray1)", marginTop: "1rem" }}>{items[activeIndex]?.description}</p>
        </div>
    )
}
