export const pricingFeatures = [
    {
        name: "pageAmt",
        content: "web design"
    },
    {
        name: "hostingTime",
        content: "web hosting"
    },
    {
        name: "domainName",
        content: "domain services"
    },
    {
        name: "cms",
        content: "content management"
    },
    {
        name: "seo",
        content: "seo optimization"
    },
    {
        name: "socialLinks",
        content: "social link creation"
    },
    {
        name: "googleBusiness",
        content: "google business suite"
    },
    {
        name: "businessStrategy",
        content: "custom business strategy"
    },
    {
        name: "analytics",
        content: "analytics"
    },
    {
        name: "graphicDesign",
        content: "graphic design"
    },
    {
        name: "marketing",
        content: "marketing campaigning"
    },
    {
        name: "apiCreation",
        content: "custom api creation"
    },
    {
        name: "authentication",
        content: "authentication/role based access"
    },
    {
        name: "databaseCreation",
        content: "database creation"
    },
    {
        name: "revisions",
        content: "revisions"
    },
    {
        name: "techSupport",
        content: "24/7 support"
    },
] as const

export type PricingFeature = (typeof pricingFeatures[number])

export type PricingFeatureKeys = PricingFeature['name'];

export type pricingTable = {
    planName: string,
    shortDescription: string,
    pricing: number,
    features: { id: PricingFeatureKeys, modifier?: string }[]
}

export const pricingTables: pricingTable[] = [
    {
        planName: "basic",
        shortDescription: "Recommended for basic landing pages",
        pricing: 150,
        features: [{ id: "pageAmt", modifier: "1 page" }, { id: "hostingTime", modifier: "1 year" }, { id: "domainName" }, { id: "cms" }, { id: "socialLinks" }, { id: "seo" }],
    },
    {
        planName: "small website",
        shortDescription: "Make A strong impression and facilitate customer connections",
        pricing: 400,
        features: [{ id: "pageAmt", modifier: "3 page" }, { id: "hostingTime", modifier: "1 year" }, { id: "domainName" }, { id: "cms" }, { id: "socialLinks" }, { id: "seo" }, { id: "googleBusiness" }, { id: "businessStrategy" }, { id: "analytics" }],
    },
    {
        planName: "medium website",
        shortDescription: "Handle all your client's needs",
        pricing: 800,
        features: [{ id: "pageAmt", modifier: "5 page" }, { id: "hostingTime", modifier: "2 years" }, { id: "domainName" }, { id: "cms" }, { id: "socialLinks" }, { id: "seo" }, { id: "graphicDesign" }, { id: "businessStrategy" }, { id: "analytics" }, { id: "marketing" }, { id: "googleBusiness" }, { id: "techSupport" }, { id: "revisions", modifier: "3" }, { id: "authentication" }],
    },
    {
        planName: "large website",
        shortDescription: "Custom software Integration to fit any need",
        pricing: 1000,
        features: [{ id: "pageAmt", modifier: "9 page" }, { id: "hostingTime", modifier: "4 years" }, { id: "domainName" }, { id: "cms" }, { id: "socialLinks" }, { id: "seo" }, { id: "graphicDesign" }, { id: "businessStrategy" }, { id: "analytics" }, { id: "marketing" }, { id: "googleBusiness" }, { id: "techSupport" }, { id: "revisions", modifier: "unlimited" }, { id: "apiCreation" }, { id: "databaseCreation" }, { id: "authentication" }],
    },
]

