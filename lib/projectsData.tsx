import { defaultImageSrc } from "@/utility/globalState"
import { serviceName } from "./servicesData"

export type categoryStyles = "traditional" | "modern"

export type projectData = {
    name: string,
    slug: string,
    image: string,
    type: "landing page" | "website",
    categoryStyles: categoryStyles[],
    representingService: serviceName[],
    inspiration?: string
}


export const projectsData: projectData[] = [
    {
        name: "Luminous Lens Photography",
        slug: "luminousLensPhotography",
        image: require(`@/public/projects/luminous.jpg`).default.src,
        type: "landing page",
        categoryStyles: ["modern"],
        representingService: ["Website Development"],
        inspiration: "https://shtheme.org/demosd/jopho/?page_id=385"
    }
    // {
    //     name: "",
    //     slug: "",
    //     image: "",
    //     component: <></>,
    //     type: "landing page",
    //     categoryStyles: [],
    //     representingService: []
    // }
]