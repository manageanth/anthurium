export type serviceName = "Website Development" | "Mobile App Development" | "E-commerce Solutions" | "Cloud Solutions Integration" | "Custom Software Development" | "SEO and Marketing" | "Managed Hosting";

export type service = {
    image: string,
    name: serviceName,
    shortSummary: string,
    link: string,
    icon: JSX.Element,
    keyFeatures: string[],
    technologyUsed: string[],
    process: serviceProcess[]
}

export type serviceProcess = {
    stepName: string,
    step: string,
}

export const servicesData: service[] = [
    {
        image: require("@/public/services/web.png").default.src,
        name: "Website Development",
        shortSummary: "We Craft custom high performance websites tailored to the unique needs and branding of each client",
        link: "/services/websiteDevelopment",
        icon: <span style={{ fontSize: "var(--largeIconSize)" }} className="material-symbols-outlined">computer</span>,
        keyFeatures: ["SEO-friendly architecture for improved visibility and search engine rankings", "Server-side rendering for faster loading times and enhanced user experience", "Support for dynamic content and real-time updates", "Seamless integration with APIs and third-party services", "Scalable solutions to accommodate future growth and expansion"],
        technologyUsed: ["Next.js", "React.js", "Node.js", "GraphQL", "Tailwind CSS"],
        process: [
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
        ]
    },
    {
        image: require("@/public/services/phone.png").default.src,
        name: "Mobile App Development",
        shortSummary: "We designing and developing iOS and Android apps for a seamless user experiences.",
        link: "/services/mobileAppDevelopment",
        icon: <span style={{ fontSize: "var(--largeIconSize)" }} className="material-symbols-outlined">smartphone</span>,
        keyFeatures: ["Cross-platform development with React Native", "Seamless user experiences for iOS and Android platforms", "Integration with native device features", "Real-time updates and push notifications", "Scalable solutions for future app expansions"],
        technologyUsed: ["React Native", "Expo", "Redux", "Firebase"],
        process: [
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
        ]
    },
    {
        image: require("@/public/services/ecommerce.png").default.src,
        name: "E-commerce Solutions",
        shortSummary: "We build robust e-commerce platforms for businesses to sell products or services online.",
        link: "/services/eCommerceSolutions",
        icon: <span style={{ fontSize: "var(--largeIconSize)" }} className="material-symbols-outlined">store</span>,
        keyFeatures: ["Robust e-commerce platform development", "Integration of secure payment gateways", "Efficient order management systems", "Personalized shopping experiences", "Responsive design for mobile and desktop devices"],
        technologyUsed: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
        process: [
            {
                stepName: "Requirement Gathering",
                step: "Understand business goals and e-commerce requirements.",
            },
            {
                stepName: "Design & Development",
                step: "Create user-friendly designs and develop e-commerce platform.",
            },
            {
                stepName: "Integration & Testing",
                step: "Integrate payment gateways, test functionality, and security measures.",
            },
            {
                stepName: "Launch & Optimization",
                step: "Deploy the platform and optimize for performance and SEO.",
            },
            {
                stepName: "Maintenance & Support",
                step: "Provide ongoing maintenance and support to ensure smooth operation.",
            }
        ]
    },
    {
        image: require("@/public/services/customdev.png").default.src,
        name: "Custom Software Development",
        shortSummary: "We develop tailored software solutions to automate processes, improve efficiency, and address specific business challenges, from CRM systems to inventory management tools.",
        link: "/services/customSoftwareDevelopment",
        icon: <span style={{ fontSize: "var(--largeIconSize)" }} className="material-symbols-outlined">sdk</span>,
        keyFeatures: ["Tailored software solutions for specific business needs", "Automation of processes to improve efficiency", "Scalable and flexible architecture", "Intuitive user interfaces for enhanced usability", "Comprehensive support and maintenance services"],
        technologyUsed: ["JavaScript", "Python", "Java", "React", "Node.js"],
        process: [
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
        ]
    },
    {
        image: require("@/public/services/seo.jpg").default.src,
        name: "SEO and Marketing",
        shortSummary: "Our SEO specialists optimize your website to work better with Google, enhancing visibility and driving traffic. We handle everything from registering your business with Google Analytics to Google analytics and growth strategies.",
        link: "/services/seoAndMarketing",
        icon: <span style={{ fontSize: "var(--largeIconSize)" }} className="material-symbols-outlined">screen_search_desktop</span>,
        keyFeatures: [
            "Comprehensive SEO audits and strategy development",
            "On-page and off-page optimization",
            "Keyword research and content optimization",
            "Link building and backlink analysis",
            "Performance tracking and reporting with Google Analytics"
        ],
        technologyUsed: ["Google Analytics", "Google Search Console", "SEMrush", "Ahrefs", "JavaScript", "React", "Node.js"],
        process: [
            {
                stepName: "Initial Consultation",
                step: "Discuss client goals and current SEO standing.",
            },
            {
                stepName: "SEO Audit & Strategy",
                step: "Conduct a thorough SEO audit and develop a tailored strategy.",
            },
            {
                stepName: "Implementation",
                step: "Execute on-page and off-page SEO strategies.",
            },
            {
                stepName: "Monitoring & Optimization",
                step: "Continuously monitor performance and refine SEO tactics.",
            },
            {
                stepName: "Reporting & Analysis",
                step: "Provide regular reports and insights to track progress.",
            }
        ]
    },
    {
        image: require("@/public/services/hosting.jpg").default.src,
        name: "Managed Hosting",
        shortSummary: "With managed hosting we can handle your domain, business email, contact forms, and hosting to make setup a breeze. Or provide support to host your website with your preferred providers.",
        link: "/services/managedHosting",
        icon: <span style={{ fontSize: "var(--largeIconSize)" }} className="material-symbols-outlined">dvr</span>,
        keyFeatures: [
            "Full-service domain management",
            "Business email setup and management",
            "Reliable contact form integration",
            "Secure and scalable hosting solutions",
            "24/7 monitoring and support"
        ],
        technologyUsed: ["JavaScript", "React", "Node.js", "AWS", "Google Cloud Platform"],
        process: [
            {
                stepName: "Consultation & Setup",
                step: "Discuss hosting needs and set up domain and hosting services.",
            },
            {
                stepName: "Email & Contact Forms",
                step: "Configure business email and integrate contact forms.",
            },
            {
                stepName: "Hosting Configuration",
                step: "Set up secure and scalable hosting environments.",
            },
            {
                stepName: "Monitoring & Maintenance",
                step: "Provide ongoing monitoring and maintenance for optimal performance.",
            },
            {
                stepName: "Support & Troubleshooting",
                step: "Offer 24/7 support and troubleshooting services.",
            }
        ]
    },
];
