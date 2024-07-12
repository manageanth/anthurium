import * as React from 'react';
import Z from "zod"

export const userFormSchema = Z.object({
    name: Z.string().min(1),
    email: Z.string().min(1),
    message: Z.string().min(1),
    company: Z.string().min(1).nullable(),

    primaryPurpose: Z.string().min(1).nullable(),

    websiteName: Z.string().min(1).nullable(),
    websiteTagline: Z.string().min(1).nullable(),
    siteContent: Z.string().min(1).nullable(),
    socialMediaLinks: Z.string().min(1).nullable(),

    targetAudience: Z.string().min(1).nullable(),
    keyFeatures: Z.string().min(1).nullable(),
    designPreference: Z.string().min(1).nullable(),//edit for fonts and colors
    thirdPartyIntegrations: Z.string().min(1).nullable(),
    hostingPreferences: Z.string().min(1).nullable(),
    desiredTimeline: Z.string().min(1).nullable(),
    budget: Z.string().min(1).nullable(),
    additionalComments: Z.string().min(1).nullable(),
})

export type userForm = Z.infer<typeof userFormSchema>

export const EmailTemplate = ({ seenForm }: { seenForm: userForm }) => (
    <div>
        <h1>{seenForm.name} has contacted you! - email: {seenForm.email}</h1>

        {seenForm.company && <h2>Company: {seenForm.company}</h2>}

        <p>Message: {seenForm.message}</p>


        {Object.entries(seenForm).map(([key, value]) => {
            return (
                <p key={key}>{key}: {value}</p>
            )
        })}
    </div>
);
