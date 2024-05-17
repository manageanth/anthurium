import { service } from '@/lib/servicesData'
import Image from 'next/image'
import React from 'react'

export default function ShowServiceIntro({ service }: { service: service }) {
    return (
        <div style={{ display: "flex" }}>
            <Image alt={`${service.name} alt`} src={service.image} width={1000} height={1000} style={{ objectFit: "contain", flex: "1 1 300px", }} />

            <p style={{ flex: "1 1 300px", padding: "1rem" }}>Our Next.js web development service combines cutting-edge technology with strategic design to create web applications that exceed client expectations. We leverage the power of Next.js, to build robust, scalable, and SEO-friendly web apps that perform exceptionally well across devices. <br /><br /> From custom features to complex functionalities, we ensure every aspect of your web app aligns with your business objectives.</p>
        </div>
    )
}
