import ThirdButton from '@/components/thirdButton/ThirdButton'
import { servicesData } from '@/lib/servicesData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Page() {
    //show all services

    return (
        <main>
            <section>
                <div style={{ textAlign: "center", display: "grid", justifyItems: "center" }}>
                    <p className='supportingTitle2'>Services</p>
                    <h1>What we provide</h1>
                </div>

                <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fill, minmax(min(300px, 100%), 1fr))", padding: "1rem" }}>
                    {servicesData.map((eachService, eachServiceIndex) => {
                        return (
                            <div key={eachServiceIndex} style={{ borderRadius: "1rem", display: "flex", flexDirection: "column", gap: "1rem", padding: "1rem", alignContent: "flex-start", backgroundColor: "#fff" }}>
                                <Image alt={`${eachService.name}'s image`} src={eachService.image} height={400} width={400} style={{ objectFit: "cover", width: "100%", height: "300px", borderRadius: "1rem", }} />

                                <h2>{eachService.name}</h2>

                                <p style={{ flex: 1 }}>{eachService.shortSummary}</p>

                                <ThirdButton link={eachService.link} text='Read More' />
                            </div>
                        )
                    })}
                </div>
            </section>
        </main>
    )
}
