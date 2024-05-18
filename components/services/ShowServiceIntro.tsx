import { service } from '@/lib/servicesData'
import Image from 'next/image'
import React from 'react'

export default function ShowServiceIntro({ service }: { service: service }) {
    return (
        <div style={{ display: 'flex', flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 350px", aspectRatio: "16/9", position: "relative" }} >
                <Image alt={`${service.name} alt`} src={service.image} fill={true} style={{ objectFit: "cover", }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </div>

            <p style={{ flex: "2 1 350px", padding: "1rem" }}>Our Next.js web development service combines cutting-edge technology with strategic design to create web applications that exceed client expectations. We leverage the power of Next.js, to build robust, scalable, and SEO-friendly web apps that perform exceptionally well across devices. <br /><br /> From custom features to complex functionalities, we ensure every aspect of your web app aligns with your business objectives.</p>
        </div>
    )
}
