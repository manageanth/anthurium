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
    const currentService = servicesData.find(eachService => eachService.name === "Mobile App Development")
    if (currentService === undefined) return (<p>Service Not Found</p>)

    return (
        <main className={serviceStyles.mainDiv} style={{ display: "grid", padding: "1rem" }}>
            <ServiceTitle name={"Mobile App Development"} />

            <div style={{ display: "flex" }}>
                <div style={{ flex: "1 1 300px", position: "relative" }}>
                    <Image alt={`${currentService.name} alt`} src={currentService.image} width={1000} height={1000} style={{ objectFit: "cover", position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectPosition: "0 69%" }} />
                </div>

                <p style={{ flex: "1 1 300px", padding: "1rem" }}>Our Mobile App Development service with React Native offers cutting-edge solutions for businesses seeking to establish a strong presence on iOS and Android platforms. Leveraging the versatility of React Native, we craft seamless and intuitive mobile apps that provide exceptional user experiences across devices. <br /><br /> From concept to deployment, we tailor each app to meet your unique requirements, ensuring that every feature aligns with your business goals. Whether you need a native app or cross-platform solution, we deliver high-quality mobile experiences that captivate your audience and drive success.</p>
            </div>

            <h2>Key Features</h2>
            <ShowKeyFeatures features={["Cross-platform development with React Native", "Seamless user experiences for iOS and Android platforms", "Integration with native device features", "Real-time updates and push notifications", "Scalable solutions for future app expansions"]} />

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
            <ShowTechnologyUsed items={["React Native", "Expo", "Redux", "Firebase"]} />

            <h2>Process</h2>
            <ShowProcess steps={[
                {
                    stepName: "Discovery & Planning",
                    step: "Understand client requirements and define app goals.",
                },
                {
                    stepName: "Design & Prototyping",
                    step: "Create UI/UX wireframes and design mockups for client approval.",
                },
                {
                    stepName: "Development",
                    step: "Implement features and functionality using React Native and related technologies.",
                },
                {
                    stepName: "Testing",
                    step: "Conduct comprehensive testing to ensure app functionality and performance.",
                },
                {
                    stepName: "Deployment",
                    step: "Deploy the app to respective app stores and ensure smooth launch.",
                },
                {
                    stepName: "Maintenance & Support",
                    step: "Provide ongoing maintenance and support to keep the app up-to-date and bug-free.",
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
                {servicesData.filter(eachService => eachService.name !== "Mobile App Development").map((eachService, eachServiceIndex) => {
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

