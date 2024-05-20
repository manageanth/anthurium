import { service } from '@/lib/servicesData'
import Image from 'next/image'
import React from 'react'

export default function ShowServiceIntro({ service, text }: { service: service, text: JSX.Element }) {
    return (
        <div>
            <section style={{ backgroundColor: "var(--backgroundColor)", color: "#fff" }}>
                <h2 style={{ textAlign: "center", }}>{service.name}</h2>
            </section>

            <div style={{ display: 'flex', flexWrap: "wrap" }}>
                <div style={{ flex: "1 1 350px", aspectRatio: "16/9", position: "relative" }} >
                    <Image alt={`${service.name} alt`} src={service.image} fill={true} style={{ objectFit: "cover", }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                </div>

                <p style={{ flex: "2 1 350px", padding: "1rem" }}>
                    {text}
                </p>
            </div>
        </div>
    )
}
