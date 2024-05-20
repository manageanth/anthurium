import { servicesData } from '@/lib/servicesData'
import React from 'react'
import serviceStyles from "../servicesStyles.module.css"
import ShowServiceIntro from '@/components/services/ShowServiceIntro'
import DisplayOtherServiceInfo from '@/components/services/DisplayOtherServiceInfo'

export default function Page() {
    const currentService = servicesData.find(eachService => eachService.name === "SEO and Marketing")
    if (currentService === undefined) return (<p>Service Not Found</p>)

    return (
        <main className={serviceStyles.mainDiv} style={{ display: "grid", padding: "1rem" }}>
            <ShowServiceIntro
                service={currentService}
                text={
                    <>
                        Our SEO and Marketing service helps your business improve its online visibility and drive traffic. Our SEO specialists utilize comprehensive strategies to optimize your website, ensuring it ranks higher on search engines. We manage everything from keyword research and content optimization to link building and performance tracking. <br /><br /> With our expertise, we help your business grow organically, attract more visitors, and convert them into loyal customers.
                    </>
                } />


            <DisplayOtherServiceInfo service={currentService} />
        </main>
    )
}
