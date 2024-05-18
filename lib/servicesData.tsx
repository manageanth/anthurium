export type serviceName = "Website Development" | "Mobile App Development" | "E-commerce Solutions" | "Cloud Solutions Integration" | "Custom Software Development";

export type service = {
    image: string;
    name: serviceName;
    shortSummary: string;
    link: string;
    svg: JSX.Element
}

export const servicesData: service[] = [
    {
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Website Development",
        shortSummary: "We Craft custom high performance websites tailored to the unique needs and branding of each client",
        link: "/services/websiteDevelopment",
        svg: <></>
    },
    {
        image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?q=80&w=1858&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Mobile App Development",
        shortSummary: "We designing and developing iOS and Android apps for a seamless user experiences.",
        link: "/services/mobileAppDevelopment",
        svg: <></>
    },
    {
        image: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "E-commerce Solutions",
        shortSummary: "We build robust e-commerce platforms for businesses to sell products or services online.",
        link: "/services/eCommerceSolutions",
        svg: <></>
    },
    // {
    //     image: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //     name: "Cloud Solutions Integration",
    //     shortSummary: "Assisting businesses in migrating to cloud platforms like AWS, Google Cloud, or Azure, optimizing infrastructure, and implementing scalable solutions for storage, computing, and data management.",
    //     link: "/services/cloudSolutionsIntegration",
    // svg: <></>
    // },
    {
        image: "https://images.unsplash.com/photo-1581092583537-20d51b4b4f1b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Custom Software Development",
        shortSummary: "We develop tailored software solutions to automate processes, improve efficiency, and address specific business challenges, from CRM systems to inventory management tools.",
        link: "/services/customSoftwareDevelopment",
        svg: <></>
    },
];
