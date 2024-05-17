export type pricingTableType = {
    planName: string,
    shortDescription: string,
    pricing: number,
    featureTitle: string,
    features: { id: keyof featuresList, modifier?: string }[]
}

export type featuresList = {
    pageAmt: string;
    hostingTime: string;
    domainName: string;
    cms: string;
    socialLinks: string;
    businessStrategy: string;
    googleBusiness: string;
    seo: string;
    analytics: string;
    graphicDesign: string;
    marketing: string;
    techSupport: string;
    revisions: string;
}


export const featureListDatabase: featuresList = {
    "pageAmt": "",
    "hostingTime": "",

    "domainName": "domain services",
    "cms": "content management",
    "socialLinks": "social link creation",
    "googleBusiness": "google business suite",
    "businessStrategy": "custom business strategy",
    "seo": "seo optimization",
    "analytics": "analytics",
    "graphicDesign": "graphic design",
    "marketing": "marketing campaigning",
    "techSupport": "24/7 support",

    "revisions": "revisions",
}

export const pricingTables: pricingTableType[] = [
    {
        planName: "basic",
        shortDescription: "Start advertising your business",
        pricing: 150,
        featureTitle: "Business Basic",
        features: [{ id: "pageAmt", modifier: "1" }, { id: "hostingTime", modifier: "1" }, { id: "domainName" }, { id: "cms" }, { id: "socialLinks" }, { id: "seo" }],
    },
    {
        planName: "small website",
        shortDescription: "Make a strong impression",
        pricing: 400,
        featureTitle: "Business VIP",
        features: [{ id: "pageAmt", modifier: "3" }, { id: "hostingTime", modifier: "1" }, { id: "domainName" }, { id: "cms" }, { id: "socialLinks" }, { id: "seo" }, { id: "googleBusiness" }, { id: "businessStrategy" }, { id: "analytics" }],
    },
    {
        planName: "medium website",
        shortDescription: "Handle your clients needs",
        pricing: 800,
        featureTitle: "Business Enterprise",
        features: [{ id: "pageAmt", modifier: "5" }, { id: "hostingTime", modifier: "2" }, { id: "domainName" }, { id: "cms" }, { id: "socialLinks" }, { id: "seo" }, { id: "graphicDesign" }, { id: "businessStrategy" }, { id: "analytics" }, { id: "marketing" }, { id: "googleBusiness" }, { id: "techSupport" }, { id: "revisions", modifier: "3" }],
    },
    {
        planName: "large website",
        shortDescription: "The Best",
        pricing: 1000,
        featureTitle: "Unlimited",
        features: [{ id: "pageAmt", modifier: "9" }, { id: "hostingTime", modifier: "3" }, { id: "domainName" }, { id: "cms" }, { id: "socialLinks" }, { id: "seo" }, { id: "graphicDesign" }, { id: "businessStrategy" }, { id: "analytics" }, { id: "marketing" }, { id: "googleBusiness" }, { id: "techSupport" }, { id: "revisions", modifier: "unlimited" }],
    },
]

