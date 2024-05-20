import { projectsData } from '@/lib/projectsData'
import { service, servicesData } from '@/lib/servicesData'
import { tesimonials } from '@/lib/testimonials'
import Link from 'next/link'
import React from 'react'
import ShowService from './ShowService'
import styles from "./displayOtherServiceInfo.module.css"

export default function DisplayOtherServiceInfo({ service }: { service: service }) {
    return (
        <>
            <h2>Key Features</h2>

            <ul style={{ padding: '1rem', display: "grid", gap: ".5rem" }}>
                {service.keyFeatures.map((eachFeature, eachFeatureIndex) => {
                    return (
                        <li key={eachFeatureIndex} style={{ display: "flex", gap: ".5rem" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 122.88 109.76">
                                <path d="m0 52.88 22.68-.3c8.76 5.05 16.6 11.59 23.35 19.86C63.49 43.49 83.55 19.77 105.6 0h17.28C92.05 34.25 66.89 70.92 46.77 109.76 36.01 86.69 20.96 67.27 0 52.88z" style={{ fillRule: "evenodd", clipRule: "evenodd", fill: "var(--primaryColor)", }} />
                            </svg>

                            {eachFeature}
                        </li>
                    )
                })}
            </ul>


            {projectsData.filter(eachProject => eachProject.representingService.includes(service.name)).length > 0 && (
                <>
                    <h2>Portfolio</h2>

                    <div>
                        {projectsData.filter(eachProject => eachProject.representingService.includes(service.name)).map(eachProject => {
                            return (
                                <div key={eachProject.slug}>{eachProject.name}</div>
                            )
                        })}
                    </div>
                </>
            )}

            <h2>Technlogy used</h2>

            <ul style={{ display: "flex", gap: "1rem", overflowX: "auto", padding: "1rem" }}>
                {service.technologyUsed.map((eachItem, eachItemIndex) => {
                    return (
                        <li key={eachItemIndex} style={{ padding: '.5rem 1rem', borderRadius: "2rem", backgroundColor: "var(--primaryColor)", fontWeight: "bold", color: "#fff", whiteSpace: "nowrap" }}>{eachItem}</li>
                    )
                })}
            </ul>

            <h2 style={{ textAlign: "center", background: "linear-gradient(to left, var(--primaryColor), var(--tertiaryColor))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontSize: 'var(--largerFontSize)' }}>Our Process</h2>

            <ul className='snap' style={{ display: "grid", width: "min(60ch, 80%)", margin: "1rem auto" }}>
                {service.process.map((eachStep, eachStepIndex) => {
                    return (
                        <li key={eachStepIndex} className={styles.process} style={{ filter: `hue-rotate(${eachStepIndex * 10}deg)` }}>
                            {eachStep.icon}

                            <div style={{ flex: "1 1 30ch" }}>
                                <h3>{eachStep.stepName}</h3>

                                <p style={{}}>{eachStep.step}</p>
                            </div>
                        </li>
                    )
                })}
            </ul>

            {tesimonials.filter(eachTestimonial => eachTestimonial.forService.includes(service.name)).length > 0 && (
                <>
                    <h2>Testimonials</h2>
                    {tesimonials.filter(eachTestimonial => eachTestimonial.forService.includes(service.name)).map((eachTestimonial, eachTestimonialIndex) => {
                        return (
                            <div key={eachTestimonialIndex}>{eachTestimonial.name}</div>
                        )
                    })}
                </>
            )}

            <Link href={"/contact"} style={{ justifySelf: "center", marginTop: "1rem" }}>
                <button className='mainButton'>Get Started</button>
            </Link>

            <h2>Related services</h2>

            <div className='snap' style={{ marginTop: "1rem", display: "grid", gridAutoFlow: "column", gridAutoColumns: "min(300px, 100%)", overflowX: "auto" }}>
                {servicesData.filter(eachService => eachService.name !== service.name).map((eachService, eachServiceIndex) => {
                    return (
                        <ShowService key={eachServiceIndex} service={eachService} />
                    )
                })}
            </div>
        </>
    )
}
