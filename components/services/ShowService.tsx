"use client"
import { service } from '@/lib/servicesData'
import React, { useState } from 'react'
import styles from "./showService.module.css"
import Image from 'next/image'
import ThirdButton from '../thirdButton/ThirdButton'
import DefaultSvg from '@/components/DefaultSvg'

export default function ShowService({ service, startHovering }: { service: service, startHovering?: boolean }) {
    const [hovering, hoveringSet] = useState(startHovering ?? false)

    return (
        <div className={`${styles.service} ${hovering && styles.hovering}`} onMouseEnter={() => { hoveringSet(true) }} onMouseLeave={() => { hoveringSet(false) }}>
            <div className={styles.backdropCont}>
                <Image className={styles.backdropImage} alt={`${service.name}'s image`} src={service.image} fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: "cover", width: "100%", height: "100%", }} />

                <div className={styles.backdrop} style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0, backgroundColor: "rgba(0,0,0,0.8)", }}></div>
            </div>

            <div style={{ position: "relative", zIndex: 1 }}>
                <DefaultSvg style={{ width: "50px", height: "50px" }} />

                <h3>{service.name}</h3>

                <p style={{ flex: 1 }}>{service.shortSummary}</p>

                {/* <Link href={service.link} style={{ display: "flex", gap: ".5rem", alignItems: "center", flexWrap: "wrap" }}>
                    Read More

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M334.5 414c8.8 3.8 19 2 26-4.6l144-136c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22l0 72L32 192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l288 0 0 72c0 9.6 5.7 18.2 14.5 22z" /></svg>
                </Link> */}

                <ThirdButton link={service.link} text='See More' isHovering={hovering} />
            </div>
        </div>
    )
}
