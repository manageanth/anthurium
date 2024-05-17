"use client"
import React, { useState, FormEvent } from 'react'
import styles from "./styles.module.css"
import { toast } from 'react-hot-toast'
import { sendEmail } from '@/serverFunctions/SendEmail'
import { userForm, userFormSchema } from '@/components/EmailTemplate'
import TextInput from '../reusables/textInput/TextInput'
import TextAreaInput from '../reusables/textAreaInput/TextAreaInput'
import ShowMore from '../showMore/ShowMore'

export default function ContactForm() {

    const initialForm: userForm = {
        name: "",
        email: "",
        company: null,
        message: "",

        primaryPurpose: null,
        targetAudience: null,
        keyFeatures: null,
        designPreference: null,
        contentIncluded: null,
        thirdPartyIntegrations: null,
        hostingPreferences: null,
        desiredTimeline: null,
        budget: null,
        additionalComments: null,
    }

    const [formObj, formObjSet] = useState({ ...initialForm })
    const [formErrors, formErrorsSet] = useState<{ [key: string]: string | null }>({})

    function checkIfValid<T>(seenFormObj: T, seenName: keyof T, schema: any) {
        //@ts-ignore
        const testSchema = schema.pick({ [seenName]: true }).safeParse(seenFormObj);

        if (testSchema.success) {//worked
            formErrorsSet(prevObj => {
                const newObj = { ...prevObj }
                //@ts-ignore
                newObj[seenName] = null

                return newObj
            })

        } else {
            formErrorsSet(prevObj => {
                const newObj = { ...prevObj }

                let errorMessage = ""

                JSON.parse(testSchema.error.message).forEach((eachErrorObj: any) => {
                    errorMessage += eachErrorObj.message
                })

                //@ts-ignore
                newObj[seenName] = errorMessage

                return newObj
            })
        }
    }

    const handleSubmit = async () => {
        try {
            if (!userFormSchema.safeParse(formObj).success) return toast.error("Form not valid")
            await sendEmail(formObj)

            toast.success("Sent!")
            formObjSet({ ...initialForm })
        } catch (error) {
            toast.error("Couldn't send")
            console.log(`$seomething else happened`, error);
        }
    }

    return (
        <form action={handleSubmit} className={styles.formDiv} style={{ display: "grid", alignContent: "flex-start" }}>
            <div style={{ textAlign: "center", display: "grid", gap: "1rem", marginBottom: "2rem" }}>
                <h1>Request Free Consultation</h1>

                <p>Get in touch and discover how we can help. We will be in touch with you as soon as possible.</p>
            </div>

            <div className={styles.formColCont} style={{ display: "grid", gap: "1rem" }}>
                <TextInput
                    name={"name"}
                    value={formObj.name}
                    placeHolder='Your Name'
                    onChange={e => {
                        formObjSet(prevObj => {
                            // @ts-ignore
                            prevObj.name = e.target.value

                            return { ...prevObj }
                        })
                    }}
                    onBlur={() => {
                        checkIfValid(formObj, "name", userFormSchema)
                    }}
                    errors={formErrors["name"] ?? undefined}
                />

                <TextInput
                    name='email'
                    value={formObj.email}
                    placeHolder='Your Email'
                    onChange={e => {
                        formObjSet(prevObj => {
                            // @ts-ignore
                            prevObj.email = e.target.value

                            return { ...prevObj }
                        })
                    }}
                    onBlur={() => {
                        checkIfValid(formObj, "email", userFormSchema)
                    }}
                    errors={formErrors["email"] ?? undefined}
                />

                <TextInput
                    name={"company"}
                    value={formObj.company ?? ""}
                    placeHolder={"Your Company Name"}
                    onChange={e => {
                        formObjSet(prevObj => {
                            // @ts-ignore
                            prevObj.company = e.target.value
                            if (prevObj.company === "") prevObj.company = null

                            return { ...prevObj }
                        })
                    }}
                    onBlur={() => { checkIfValid(formObj, "company", userFormSchema) }}
                    errors={formErrors["company"] ?? undefined}
                />

                <TextAreaInput
                    name={"message"}
                    value={formObj.message}
                    placeHolder={"Your Message"}
                    onInput={e => {
                        formObjSet(prevObj => {
                            // @ts-ignore
                            prevObj.message = e.target.value

                            return { ...prevObj }
                        })
                    }}
                    onBlur={() => { checkIfValid(formObj, "message", userFormSchema) }}
                    errors={formErrors["message"] ?? undefined}
                />

                <ShowMore label='Website Details' content={
                    <>
                        <TextInput
                            name={"primaryPurpose"}
                            value={formObj.primaryPurpose ?? ""}
                            label={"What is the primary purpose of your website? (optional)"}
                            placeHolder={"Primary Purpose"}
                            onChange={e => {
                                formObjSet(prevObj => {
                                    // @ts-ignore
                                    prevObj.primaryPurpose = e.target.value
                                    if (prevObj.primaryPurpose === "") prevObj.primaryPurpose = null

                                    return { ...prevObj }
                                })

                            }}
                            onBlur={() => { checkIfValid(formObj, "primaryPurpose", userFormSchema) }}
                            errors={formErrors["primaryPurpose"] ?? undefined}
                        />

                        <TextInput
                            name={"targetAudience"}
                            value={formObj.targetAudience ?? ""}
                            label={"Who is your target audience? (optional)"}
                            placeHolder={"Target Audience"}
                            onChange={e => {
                                formObjSet(prevObj => {
                                    // @ts-ignore
                                    prevObj.targetAudience = e.target.value
                                    if (prevObj.targetAudience === "") prevObj.targetAudience = null

                                    return { ...prevObj }
                                })

                            }}
                            onBlur={() => { checkIfValid(formObj, "targetAudience", userFormSchema) }}
                            errors={formErrors["targetAudience"] ?? undefined}
                        />

                        <TextAreaInput
                            name={"keyFeatures"}
                            value={formObj.keyFeatures ?? ""}
                            label={"What key features do you envision for your website? (optional)"}
                            placeHolder={"Key Features"}
                            onInput={e => {
                                formObjSet(prevObj => {
                                    // @ts-ignore
                                    prevObj.keyFeatures = e.target.value
                                    if (prevObj.keyFeatures === "") prevObj.keyFeatures = null

                                    return { ...prevObj }
                                })

                            }}
                            onBlur={() => { checkIfValid(formObj, "keyFeatures", userFormSchema) }}
                            errors={formErrors["keyFeatures"] ?? undefined}
                        />

                        <TextAreaInput
                            name={"designPreference"}
                            value={formObj.designPreference ?? ""}
                            label={"Do you have any specific design preferences or branding guidelines? (optional)"}
                            placeHolder={"Design Preference"}
                            onInput={e => {
                                formObjSet(prevObj => {
                                    // @ts-ignore
                                    prevObj.designPreference = e.target.value
                                    if (prevObj.designPreference === "") prevObj.designPreference = null

                                    return { ...prevObj }
                                })

                            }}
                            onBlur={() => { checkIfValid(formObj, "designPreference", userFormSchema) }}
                            errors={formErrors["designPreference"] ?? undefined}
                        />

                        <TextAreaInput
                            name={"contentIncluded"}
                            value={formObj.contentIncluded ?? ""}
                            label={"What content will be included on the website? (optional)"}
                            placeHolder={"Content Included"}
                            onInput={e => {
                                formObjSet(prevObj => {
                                    // @ts-ignore
                                    prevObj.contentIncluded = e.target.value
                                    if (prevObj.contentIncluded === "") prevObj.contentIncluded = null

                                    return { ...prevObj }
                                })

                            }}
                            onBlur={() => { checkIfValid(formObj, "contentIncluded", userFormSchema) }}
                            errors={formErrors["contentIncluded"] ?? undefined}
                        />

                        <TextInput
                            name={"thirdPartyIntegrations"}
                            value={formObj.thirdPartyIntegrations ?? ""}
                            label={"Are there any third-party integrations needed (e.g., CRM systems, payment gateways)? (optional)"}
                            placeHolder={"Third Party Integrations - list if present"}
                            onChange={e => {
                                formObjSet(prevObj => {
                                    // @ts-ignore
                                    prevObj.thirdPartyIntegrations = e.target.value
                                    if (prevObj.thirdPartyIntegrations === "") prevObj.thirdPartyIntegrations = null

                                    return { ...prevObj }
                                })

                            }}
                            onBlur={() => { checkIfValid(formObj, "thirdPartyIntegrations", userFormSchema) }}
                            errors={formErrors["thirdPartyIntegrations"] ?? undefined}
                        />

                        <TextInput
                            name={"hostingPreferences"}
                            value={formObj.hostingPreferences ?? ""}
                            label={"Do you have any specific requirements for hosting? (optional)"}
                            placeHolder={"Hosting Preferences"}
                            onChange={e => {
                                formObjSet(prevObj => {
                                    // @ts-ignore
                                    prevObj.hostingPreferences = e.target.value
                                    if (prevObj.hostingPreferences === "") prevObj.hostingPreferences = null

                                    return { ...prevObj }
                                })

                            }}
                            onBlur={() => { checkIfValid(formObj, "hostingPreferences", userFormSchema) }}
                            errors={formErrors["hostingPreferences"] ?? undefined}
                        />

                        <TextInput
                            name={"desiredTimeline"}
                            value={formObj.desiredTimeline ?? ""}
                            label={"What is your desired timeline for the project? (optional)"}
                            placeHolder={"Desired Timeline"}
                            onChange={e => {
                                formObjSet(prevObj => {
                                    // @ts-ignore
                                    prevObj.desiredTimeline = e.target.value
                                    if (prevObj.desiredTimeline === "") prevObj.desiredTimeline = null

                                    return { ...prevObj }
                                })

                            }}
                            onBlur={() => { checkIfValid(formObj, "desiredTimeline", userFormSchema) }}
                            errors={formErrors["desiredTimeline"] ?? undefined}
                        />

                        <TextInput
                            name={"budget"}
                            value={formObj.budget ?? ""}
                            label={"What is your budget for the website project? (optional)"}
                            placeHolder={"Budget"}
                            onChange={e => {
                                formObjSet(prevObj => {
                                    // @ts-ignore
                                    prevObj.budget = e.target.value
                                    if (prevObj.budget === "") prevObj.budget = null

                                    return { ...prevObj }
                                })

                            }}
                            onBlur={() => { checkIfValid(formObj, "budget", userFormSchema) }}
                            errors={formErrors["budget"] ?? undefined}
                        />

                        <TextAreaInput
                            name={"additionalComments"}
                            value={formObj.additionalComments ?? ""}
                            label={"Do you have any additional comments or specific requirements for the website? (optional)"}
                            placeHolder={"Additional Comments"}
                            onInput={e => {
                                formObjSet(prevObj => {
                                    // @ts-ignore
                                    prevObj.additionalComments = e.target.value
                                    if (prevObj.additionalComments === "") prevObj.additionalComments = null

                                    return { ...prevObj }
                                })

                            }}
                            onBlur={() => { checkIfValid(formObj, "additionalComments", userFormSchema) }}
                            errors={formErrors["additionalComments"] ?? undefined}
                        />
                    </>
                } />
            </div>


            <button disabled={!userFormSchema.safeParse(formObj).success} type='submit' style={{ justifySelf: "flex-end", opacity: !userFormSchema.safeParse(formObj).success ? ".6" : "", backgroundColor: "var(--primaryColor)", padding: '1rem 2rem', borderRadius: ".2rem", marginTop: '1rem' }}>Send Message</button>
        </form>
    )
}
