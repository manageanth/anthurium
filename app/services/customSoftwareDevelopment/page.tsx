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

export default function Page() {
    const currentService = servicesData.find(eachService => eachService.name === "Custom Software Development")
    if (currentService === undefined) return (<p>Service Not Found</p>)

    return (
        <main className={serviceStyles.mainDiv} style={{ display: "grid", padding: "1rem" }}>
            <ServiceTitle name={"Custom Software Development"} />

            <div style={{ display: "flex" }}>
                <div style={{ flex: "1 1 300px", position: "relative" }}>
                    <Image alt={`${currentService.name} alt`} src={currentService.image} width={1000} height={1000} style={{ objectFit: "cover", position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectPosition: "0 69%" }} />
                </div>

                <p style={{ flex: "1 1 300px", padding: "1rem" }}>Our Custom Software Development service empowers businesses by providing tailored solutions to automate processes, boost efficiency, and overcome specific challenges. From CRM systems to inventory management tools, we develop software that aligns perfectly with your unique requirements and business objectives. <br /><br /> Our expertise lies in understanding your needs and translating them into intuitive and scalable software solutions that drive growth and success.</p>
            </div>

            <h2>Key Features</h2>
            <ShowKeyFeatures features={["Tailored software solutions for specific business needs", "Automation of processes to improve efficiency", "Scalable and flexible architecture", "Intuitive user interfaces for enhanced usability", "Comprehensive support and maintenance services"]} />

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

            <h2>Technologies/Frameworks Used</h2>
            <ShowTechnologyUsed items={["JavaScript", "Python", "Java", "React", "Node.js"]} />

            <h2>Process</h2>
            <ShowProcess steps={[
                {
                    stepName: "Requirement Analysis",
                    step: "Gather and analyze business requirements to understand needs.",
                },
                {
                    stepName: "Design & Development",
                    step: "Create customized software solutions tailored to client specifications.",
                },
                {
                    stepName: "Testing & Quality Assurance",
                    step: "Thoroughly test software for functionality, performance, and security.",
                },
                {
                    stepName: "Deployment & Integration",
                    step: "Deploy software and integrate with existing systems, ensuring seamless operation.",
                },
                {
                    stepName: "Maintenance & Support",
                    step: "Provide ongoing maintenance and support to optimize software performance.",
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

            <h2>Related services</h2>
            <div style={{ display: "grid", gap: "1rem", gridAutoColumns: "min(300px, 100%)", gridAutoFlow: "column", padding: "1rem", overflowX: "auto" }}>
                {servicesData.filter(eachService => eachService.name !== "Custom Software Development").map((eachService, eachServiceIndex) => {
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
        </main>
    )
}



