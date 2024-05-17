import * as React from 'react';
import Z from "zod"

export const userFormSchema = Z.object({
    name: Z.string().min(1),
    email: Z.string().min(1),
    message: Z.string().min(1),
    company: Z.string().min(1).nullable(),

    primaryPurpose: Z.string().min(1).nullable(),
    targetAudience: Z.string().min(1).nullable(),
    keyFeatures: Z.string().min(1).nullable(),
    designPreference: Z.string().min(1).nullable(),
    contentIncluded: Z.string().min(1).nullable(),
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

        <p>{seenForm.message}</p>

        {seenForm.primaryPurpose && <p>:primaryPurpose: {seenForm.primaryPurpose}</p>}
        {seenForm.targetAudience && <p>targetAudience: {seenForm.targetAudience}</p>}
        {seenForm.keyFeatures && <p>keyFeatures: {seenForm.keyFeatures}</p>}
        {seenForm.designPreference && <p>designPreference: {seenForm.designPreference}</p>}
        {seenForm.contentIncluded && <p>contentIncluded: {seenForm.contentIncluded}</p>}
        {seenForm.thirdPartyIntegrations && <p>thirdPartyIntegrations: {seenForm.thirdPartyIntegrations}</p>}
        {seenForm.hostingPreferences && <p>hostingPreferences: {seenForm.hostingPreferences}</p>}
        {seenForm.desiredTimeline && <p>desiredTimeline: {seenForm.desiredTimeline}</p>}
        {seenForm.budget && <p>budget: {seenForm.budget}</p>}
        {seenForm.additionalComments && <p>additionalComments: {seenForm.additionalComments}</p>}
    </div>
);
