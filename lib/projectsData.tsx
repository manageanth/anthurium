import { defaultImageSrc } from "@/utility/globalState"
import { serviceName } from "./servicesData"

export type categoryStyles = "traditional" | "modern" | "fun"

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
        image: require(`@/public/projects/luminousLens/luminous.jpg`).default.src,
        type: "landing page",
        categoryStyles: ["modern"],
        representingService: ["Website Development"],
        inspiration: "https://shtheme.org/demosd/jopho/?page_id=385"
    },
    {
        name: "Folliblanc Music",
        slug: "FolliblancMusic",
        image: require(`@/public/projects/folliblancMusic/titleimage.jpg`).default.src,
        type: "landing page",
        categoryStyles: ["fun"],
        representingService: ["Website Development"],
        inspiration: "https://www.imreallyatrex.com"
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