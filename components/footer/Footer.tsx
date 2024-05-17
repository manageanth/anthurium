import React from 'react'
import Logo from '../logo/Logo'
import Socials from '../socials/Socials'
import { companyInfo } from '@/lib/companyInfo'
import { blogData } from '@/lib/blogData'
import Image from 'next/image'
import Link from 'next/link'
import styles from "./page.module.css"
import { servicesData } from '@/lib/servicesData'

export default function Footer() {
    return (
        <footer id='footerNav' style={{ padding: "2rem 1rem", backgroundColor: "var(--backgroundColor)", color: "#fff", display: "grid", gap: "1rem" }}>
            <ul className={styles.footerUL}>
                {[
                    {
                        title: "Products",
                        links: servicesData.map((eachService, eachServiceIndex) => {
                            return {
                                name: eachService.name,
                                link: eachService.link
                            }
                        })
                    },
                    {
                        title: "Resources",
                        links: [
                            {
                                name: "Guides & Tutorials",
                                link: "/guides"
                            }
                        ]
                    },
                    {
                        title: "Community",
                        links: [
                            {
                                name: "blogs",
                                link: "/blog"
                            }
                        ]
                    },
                    {
                        title: "Company",
                        links: [
                            {
                                name: "Our Story",
                                link: "/aboutUs"
                            }
                        ]
                    },
                    {
                        title: "Help",
                        links: [
                            {
                                name: "Contact Us",
                                link: "/contactUs"
                            }
                        ]
                    },
                ].map((eachNavLink, eachNavLinkIndex) => {
                    return (
                        <li key={eachNavLinkIndex}>
                            <h3>{eachNavLink.title}</h3>

                            <ul className={styles.footerSubUL}>
                                {eachNavLink.links.map((eachSubLink, eachSubLinkIndex) => {
                                    return (
                                        <li key={eachSubLinkIndex}>
                                            <Link href={eachSubLink.link}>{eachSubLink.name}</Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>
                    )
                })}
            </ul>

            <div style={{ padding: "1rem", marginTop: "1rem", borderTop: "1px solid var(--fadedWhite2)", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "1rem" }}>
                <p>Copyright © Anthurium all rights reserved.</p>

                <ul style={{ display: "flex", flexWrap: 'wrap', gap: "1rem" }}>
                    {[{
                        link: "/aboutUs",
                        name: "About Us"
                    },
                    {
                        link: "/privacyPolicy",
                        name: "Privacy Policy"
                    },
                    {
                        link: "/services",
                        name: "Services"
                    }].map((eachLink, eachLinkIndex) => {
                        return (
                            <Link href={eachLink.link} key={eachLinkIndex}>{eachLink.name}</Link>
                        )
                    })}
                </ul>
            </div>
        </footer>
    )
}







// <div className={styles.listCont} style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))" }}>
// <div style={{ display: "grid", gap: "1rem", alignContent: 'flex-start' }}>
//     <Logo />

//     <p>Here to fit all your needs</p>

//     <Socials style={{ justifyContent: "flex-start", paddingLeft: "0rem" }} />
// </div>

// <div>
//     <h2>Contact Information</h2>

//     <div style={{ display: "grid", gap: "1rem" }}>
//         <p><b>Adress: </b>{companyInfo.address}</p>
//         <p><b>Phone: </b>{companyInfo.number}</p>
//         <p><b>Email: </b>{companyInfo.email}</p>
//     </div>
// </div>

// <div>
//     <h2>Recent Posts</h2>

//     <div style={{ display: "grid", gap: "1rem", }}>
//         {blogData.sort((a, b) => (b.datePosted as any) - (a.datePosted as any)).slice(0, 2).map((eachBlog, eachBlogIndex) => {
//             return (
//                 <Link href={`/blog/${eachBlog.slug}`} key={eachBlogIndex} style={{ display: "flex", gap: "1rem" }}>
//                     <Image alt={`${eachBlog.title}'s image`} src={eachBlog.coverImage} height={100} width={100} style={{ objectFit: "cover" }} />


//                     <div style={{ flex: "1 1 300px", display: "grid", gap: "1rem" }}>
//                         <h3 className='hoverHighlight'>{eachBlog.title}</h3>

//                         <p>{eachBlog.datePosted.toLocaleDateString('en-US', {
//                             month: 'long',
//                             day: 'numeric',
//                             year: 'numeric'
//                         })}</p>
//                     </div>
//                 </Link>
//             )
//         })}
//     </div>
// </div>
// </div>