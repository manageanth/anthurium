import React from 'react'
import styles from "./pricing.module.css"
import { featureListDatabase, pricingTables } from './pricingTypes'
import Link from 'next/link'
import { formatter } from '@/utility/globalState'

function CheckMark({ checked = true, text }: { checked?: boolean, text?: string }) {

    return (
        <>
            {checked ? (
                <div style={{ display: "flex", gap: ".3rem" }}>
                    <svg style={{ fill: "var(--primaryColor)" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>

                    <p>{text}</p>
                </div>
            ) : (
                <></>
            )}
        </>
    )
}
export default function Pricing() {

    return (
        <div className='snap' style={{ display: "grid", gap: "1rem", gridAutoFlow: "column", gridAutoColumns: "300px", overflowX: "auto", border: "1px solid #ccc", padding: "1rem" }}>
            {pricingTables.map((eachTable, eachTableIndex) => {
                const pageAmtCheck = eachTable.features.find(eachFeatureObj => eachFeatureObj.id === "pageAmt")
                const webHostingCheck = eachTable.features.find(eachFeatureObj => eachFeatureObj.id === "hostingTime")
                const domainNameCheck = eachTable.features.find(eachFeatureObj => eachFeatureObj.id === "domainName")
                const cmsCheck = eachTable.features.find(eachFeatureObj => eachFeatureObj.id === "cms")
                const seoCheck = eachTable.features.find(eachFeatureObj => eachFeatureObj.id === "seo")
                const socialLinksCheck = eachTable.features.find(eachFeatureObj => eachFeatureObj.id === "socialLinks")
                const googleBusinessCheck = eachTable.features.find(eachFeatureObj => eachFeatureObj.id === "googleBusiness")
                const analyticsCheck = eachTable.features.find(eachFeatureObj => eachFeatureObj.id === "analytics")
                const graphicDesignCheck = eachTable.features.find(eachFeatureObj => eachFeatureObj.id === "graphicDesign")
                const marketingCheck = eachTable.features.find(eachFeatureObj => eachFeatureObj.id === "marketing")
                const businessStrategyCheck = eachTable.features.find(eachFeatureObj => eachFeatureObj.id === "businessStrategy")
                const revisionsCheck = eachTable.features.find(eachFeatureObj => eachFeatureObj.id === "revisions")
                const techSupportCheck = eachTable.features.find(eachFeatureObj => eachFeatureObj.id === "techSupport")

                return (
                    <div key={eachTableIndex} className={styles.pricingTable} style={{ borderLeft: eachTableIndex !== 0 ? "1px solid #ccc" : "" }}>
                        <div style={{ display: "grid" }}>
                            <h3 style={{ fontSize: "var(--largeFontSize)", textTransform: "capitalize" }}>{eachTable.planName}</h3>

                            <p>{eachTable.shortDescription}</p>

                            <b style={{ fontSize: "var(--mediumFontSize)", color: "var(--primaryColor)", textAlign: "center" }}>{formatter.format(eachTable.pricing)}</b>

                            <Link style={{ justifySelf: "center", marginBlock: ".5rem" }} href={`/contact?=${eachTable.planName}`}>
                                <button className='mainButton'>Get Started</button>
                            </Link>

                            <p>{eachTable.featureTitle}</p>
                        </div>

                        <ul>
                            <li>
                                {pageAmtCheck ? (
                                    <CheckMark text={`${pageAmtCheck.modifier} ${parseInt(pageAmtCheck.modifier!) > 1 ? "pages web design" : "page web design"}`} />
                                ) : (
                                    <CheckMark checked={false} />
                                )}
                            </li>

                            <li>
                                {webHostingCheck ? (
                                    <CheckMark text={`${webHostingCheck.modifier} ${parseInt(webHostingCheck.modifier!) > 1 ? "years web hosting" : "year web hosting"}`} />
                                ) : (
                                    <CheckMark checked={false} />
                                )}
                            </li>

                            <li>
                                {domainNameCheck ? (
                                    <CheckMark text={featureListDatabase[domainNameCheck.id]} />
                                ) : (
                                    <CheckMark checked={false} />
                                )}
                            </li>

                            <li>
                                {cmsCheck ? (
                                    <CheckMark text={featureListDatabase[cmsCheck.id]} />
                                ) : (
                                    <CheckMark checked={false} />
                                )}
                            </li>

                            <li>
                                {seoCheck ? (
                                    <CheckMark text={featureListDatabase[seoCheck.id]} />
                                ) : (
                                    <CheckMark checked={false} />
                                )}
                            </li>

                            <li>
                                {socialLinksCheck ? (
                                    <CheckMark text={featureListDatabase[socialLinksCheck.id]} />
                                ) : (
                                    <CheckMark checked={false} />
                                )}
                            </li>

                            <li>
                                {googleBusinessCheck ? (
                                    <CheckMark text={featureListDatabase[googleBusinessCheck.id]} />
                                ) : (
                                    <CheckMark checked={false} />
                                )}
                            </li>

                            <li>
                                {businessStrategyCheck ? (
                                    <CheckMark text={featureListDatabase[businessStrategyCheck.id]} />
                                ) : (
                                    <CheckMark checked={false} />
                                )}
                            </li>

                            <li>
                                {analyticsCheck ? (
                                    <CheckMark text={featureListDatabase[analyticsCheck.id]} />
                                ) : (
                                    <CheckMark checked={false} />
                                )}
                            </li>

                            <li>
                                {graphicDesignCheck ? (
                                    <CheckMark text={featureListDatabase[graphicDesignCheck.id]} />
                                ) : (
                                    <CheckMark checked={false} />
                                )}
                            </li>

                            <li>
                                {marketingCheck ? (
                                    <CheckMark text={featureListDatabase[marketingCheck.id]} />
                                ) : (
                                    <CheckMark checked={false} />
                                )}
                            </li>

                            <li>
                                {revisionsCheck ? (
                                    <CheckMark text={`${revisionsCheck.modifier} ${featureListDatabase[revisionsCheck.id]}`} />
                                ) : (
                                    <CheckMark checked={false} />
                                )}
                            </li>

                            <li>
                                {techSupportCheck ? (
                                    <CheckMark text={featureListDatabase[techSupportCheck.id]} />
                                ) : (
                                    <CheckMark checked={false} />
                                )}
                            </li>
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}
