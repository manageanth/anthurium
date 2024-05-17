export type serviceName = "Website Development" | "Mobile App Development" | "E-commerce Solutions" | "Cloud Solutions Integration" | "Custom Software Development";

type servicesDataType = {
    image: string;
    name: serviceName;
    shortSummary: string;
    link: string;
}

export const servicesData: servicesDataType[] = [
    {
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Website Development",
        shortSummary: "Crafting custom websites tailored to the unique needs and branding of each client, using modern technologies like Next.js for dynamic and high-performance web experiences.",
        link: "/services/websiteDevelopment",
    },
    {
        image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?q=80&w=1858&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Mobile App Development",
        shortSummary: "Designing and developing mobile applications for iOS and Android platforms, offering seamless user experiences and leveraging native or cross-platform frameworks like React Native.",
        link: "/services/mobileAppDevelopment",
    },
    {
        image: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "E-commerce Solutions",
        shortSummary: "Building robust e-commerce platforms for businesses to sell products or services online, integrating secure payment gateways, order management systems, and personalized shopping experiences.",
        link: "/services/eCommerceSolutions",
    },
    // {
    //     image: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //     name: "Cloud Solutions Integration",
    //     shortSummary: "Assisting businesses in migrating to cloud platforms like AWS, Google Cloud, or Azure, optimizing infrastructure, and implementing scalable solutions for storage, computing, and data management.",
    //     link: "/services/cloudSolutionsIntegration",
    // },
    {
        image: "https://images.unsplash.com/photo-1581092583537-20d51b4b4f1b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Custom Software Development",
        shortSummary: "Developing tailored software solutions to automate processes, improve efficiency, and address specific business challenges, ranging from CRM systems to inventory management tools.",
        link: "/services/customSoftwareDevelopment",
    },
];
