import ShowService from '@/components/services/ShowService'
import { servicesData } from '@/lib/servicesData'
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
                            <ShowService key={eachServiceIndex} service={eachService} />
                        )
                    })}
                </div>
            </section>
        </main>
    )
}
