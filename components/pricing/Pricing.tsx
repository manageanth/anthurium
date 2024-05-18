"use client"
import React, { useEffect, useRef, useState } from 'react'
import styles from "./pricing.module.css"
import { pricingFeatures, pricingTable, pricingTables } from './pricingTypes'
import { formatter } from '@/utility/globalState'
import FourthButton from '../fourthButton/FourthButton'

export default function Pricing() {
    const containerRef = useRef<HTMLDivElement>(null!)

    function scrollToRecommended(currentPosition: number) {
        containerRef.current.scrollLeft = currentPosition
    }

    return (
        <div ref={containerRef} className='snap' style={{ display: "grid", gap: "1rem", gridAutoFlow: "column", gridAutoColumns: "300px", overflowX: "auto", marginBlock: "1rem", padding: "1rem", scrollBehavior: "smooth" }}>
            {pricingTables.map((eachTable, eachTableIndex) => {
                return (
                    <DisplayPricingTable key={eachTableIndex} pricingTable={eachTable} startHovering={eachTableIndex === 2} recommended={eachTableIndex === 2} scrollToRecommended={scrollToRecommended} />
                )
            })}
        </div>
    )
}

function DisplayPricingTable({ pricingTable, startHovering, recommended, scrollToRecommended }: { pricingTable: pricingTable, startHovering?: boolean, recommended?: boolean, scrollToRecommended: (currentPosition: number) => void }) {
    const [hovering, hoveringSet] = useState(startHovering ?? false)

    const pricingTableRef = useRef<HTMLDivElement>(null!)

    useEffect(() => {
        if (recommended && window.innerWidth < 800) {
            scrollToRecommended(pricingTableRef.current.offsetLeft)
        }
    }, [])

    return (
        <div ref={pricingTableRef} className={`${styles.pricingTable} ${hovering && styles.pricingTableHovering}`} style={{}} onMouseEnter={() => { hoveringSet(true) }} onMouseLeave={() => { hoveringSet(false) }}>
            <p style={{ textTransform: "capitalize", fontSize: "var(--mediumFontSize)" }}>{pricingTable.planName}</p>

            {recommended && (
                <p style={{ position: "absolute", top: 0, right: 0, margin: "1rem", backgroundColor: "var(--primaryColor)", color: "#fff", padding: ".5rem", fontSize: "var(--smallFontSize)", borderRadius: "1rem", fontWeight: "bold" }}>Bestseller</p>
            )}

            <p style={{ minHeight: "50px" }}>{pricingTable.shortDescription}</p>

            <div style={{ display: "flex", fontSize: "var(--largerFontSize)", alignItems: "center" }}>
                {pricingTable.pricing >= 1000 && (
                    <p style={{ fontSize: "var(--smallFontSize)" }}>From</p>
                )}

                <span style={{ fontSize: "var(--largeIconSize)" }} className="material-symbols-outlined">
                    attach_money
                </span>

                <p style={{ position: "relative", left: "-.4rem" }}>{pricingTable.pricing}</p>
            </div>

            <FourthButton link={`/contact?=${pricingTable.planName}`} text='Get Started' hovering={hovering} />

            <ul>
                {pricingFeatures.map((eachFeature, eachFeatureIndex) => {
                    const tableContainsFeature = pricingTable.features.find(tableFeatures => tableFeatures.id === eachFeature.name)
                    if (tableContainsFeature === undefined) return null

                    return (
                        <li key={eachFeatureIndex} style={{ display: "flex", gap: ".3rem" }}>
                            <div style={{ position: "relative", aspectRatio: "1/1", }}>
                                <div style={{ aspectRatio: "1/1", backgroundColor: "var(--primaryColor)", position: "absolute", top: 0, left: 0, bottom: 0, right: 0, zIndex: -1, borderRadius: "50%", opacity: .05, scale: 1.2 }}></div>

                                <span className="material-symbols-outlined" style={{ color: "var(--primaryColor)" }}>check</span>
                            </div>

                            <p>{tableContainsFeature.modifier} {eachFeature.content}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
