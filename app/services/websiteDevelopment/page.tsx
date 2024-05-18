import ServiceTitle from '@/components/services/ServiceTitle'
import ShowKeyFeatures from '@/components/services/ShowKeyFeatures'
import ShowProcess from '@/components/services/ShowProcess'
import ShowTechnologyUsed from '@/components/services/ShowTechnologyUsed'
import ThirdButton from '@/components/thirdButton/ThirdButton'
import { projectsData } from '@/lib/projectsData'
import { servicesData } from '@/lib/servicesData'
import { tesimonials } from '@/lib/testimonials'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import serviceStyles from "../servicesStyles.module.css"
import ShowServiceIntro from '@/components/services/ShowServiceIntro'
import ShowService from '@/components/services/ShowService'

export default function Page() {
    const currentService = servicesData.find(eachService => eachService.name === "Website Development")
    if (currentService === undefined) return (<p>Service Not Found</p>)

    return (
        <main className={serviceStyles.mainDiv} style={{ display: "grid", padding: "1rem" }}>
            <ServiceTitle name={"Website Development"} />

            <ShowServiceIntro service={currentService} />

            <h2>Key Features</h2>
            <ShowKeyFeatures features={["SEO-friendly architecture for improved visibility and search engine rankings", "Server-side rendering for faster loading times and enhanced user experience", "Support for dynamic content and real-time updates", "Seamless integration with APIs and third-party services", "Scalable solutions to accommodate future growth and expansion"]} />

            {projectsData.filter(eachProject => eachProject.representingService.includes(currentService.name)).length > 0 && (
                <>
                    <h2>Portfolio</h2>

                    <div>
                        {projectsData.filter(eachProject => eachProject.representingService.includes(currentService.name)).map(eachProject => {
                            return (
                                <div key={eachProject.slug}>{eachProject.name}</div>
                            )
                        })}
                    </div>
                </>
            )}

            <h2>Technlogy used</h2>
            <ShowTechnologyUsed items={["Next.js", "React.js", "Node.js", "GraphQL", "Tailwind CSS"]} />

            <h2>Process</h2>
            <ShowProcess steps={[
                {
                    stepName: "Discovery & Planning",
                    step: "Understand client requirements and define project goals.",
                },
                {
                    stepName: "Design & Prototyping",
                    step: "Create wireframes and design mockups for client approval.",
                },
                {
                    stepName: "Development",
                    step: "Implement features and functionality using Next.js and related technologies.",
                },
                {
                    stepName: "Testing",
                    step: "Conduct comprehensive testing to identify and fix any issues.",
                },
                {
                    stepName: "Deployment",
                    step: "Deploy the web app to production environment and ensure smooth launch.",
                },
                {
                    stepName: "Maintenance & Support",
                    step: "Provide ongoing maintenance and support to keep the web app running smoothly.",
                }
            ]} />

            {tesimonials.filter(eachTestimonial => eachTestimonial.forService.includes(currentService.name)).length > 0 && (
                <>
                    <h2>Testimonials</h2>
                    {tesimonials.filter(eachTestimonial => eachTestimonial.forService.includes(currentService.name)).map((eachTestimonial, eachTestimonialIndex) => {
                        return (
                            <div key={eachTestimonialIndex}>{eachTestimonial.name}</div>
                        )
                    })}
                </>
            )}

            <Link href={"/contact"} style={{ justifySelf: "center", marginTop: "1rem" }}>
                <button className='mainButton'>Get Started</button>
            </Link>

            {/* <h2>Related services</h2>
            <div style={{ display: "grid", gap: "1rem", gridAutoColumns: "min(300px, 100%)", gridAutoFlow: "column", padding: "1rem", overflowX: "auto" }}>
                {servicesData.filter(eachService => eachService.name !== "Website Development").map((eachService, eachServiceIndex) => {
                    return (
                        <div key={eachServiceIndex} style={{ borderRadius: "1rem", display: "flex", flexDirection: "column", gap: "1rem", padding: "1rem", alignContent: "flex-start", backgroundColor: "#fff" }}>
                            <Image alt={`${eachService.name}'s image`} src={eachService.image} height={400} width={400} style={{ objectFit: "cover", width: "100%", height: "300px", borderRadius: "1rem", }} />

                            <h2>{eachService.name}</h2>

                            <p style={{ flex: 1 }}>{eachService.shortSummary}</p>

                            <ThirdButton link={eachService.link} text='Read More' />
                        </div>
                    )
                })}
            </div> */}

            <div style={{ marginTop: "1rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", borderBottom: "1px solid #000", borderRight: "1px solid #000" }}>
                {servicesData.filter(eachService => eachService.name !== "Website Development").map((eachService, eachServiceIndex) => {
                    return (
                        <ShowService key={eachServiceIndex} service={eachService} startHovering={eachServiceIndex === 0} />
                    )
                })}
            </div>
        </main>
    )
}
