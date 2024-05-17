"use client"
import React, { useState, useEffect } from 'react'
import styles from "./nav.module.css"
import Link from 'next/link';
import Logo from '../logo/Logo';

type menuItem = {
    title: string;
    link: string;
    subMenu?: subMenuItem[];
}

type subMenuItem = {
    title: string;
    link: string;
}

const menuItems: menuItem[] = [
    {
        title: "Home",
        link: "",
    },
    {
        title: "About Us",
        link: "",
    },
    {
        title: "Services",
        link: "",
    },
    {
        title: "Gallery",
        link: "",
    },
    {
        title: "Blog",
        link: "",
        subMenu: [
            {
                title: "Blog Page",
                link: "",
            },
            {
                title: "Post Page",
                link: "",
            },
        ]
    },
    {
        title: "Contact",
        link: "",
    }
]

export default function Nav() {

    return (
        <>
            <DesktopNav />
            <MobileNav />
        </>
    )
}

function DesktopNav() {
    const [scrollHitTarget, scrollHitTargetSet] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", handleWindowScroll)

        return () => {
            window.removeEventListener("scroll", handleWindowScroll)
        }
    }, [])

    function handleWindowScroll() {
        const scrollY = window.scrollY

        if (scrollY > 70) {
            scrollHitTargetSet(true)
        } else {
            scrollHitTargetSet(false)
        }
    }

    return (
        <nav className={`${styles.desktopNav} ${styles.navAll}`} style={{ backgroundColor: scrollHitTarget ? "#000" : "" }}>
            <Logo />

            <Menu />
        </nav>
    )
}

function MobileNav() {
    const [showingMenu, showingMenuSet] = useState(false)

    return (
        <nav className={`${styles.mobileNav} ${styles.navAll}`}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingInline: "1rem" }}>
                <Logo />

                <div className={styles.menuToggleButton} onClick={() => { showingMenuSet(prev => !prev) }}>
                    <svg style={{ width: "1.5rem", cursor: "pointer" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                </div>
            </div>

            {showingMenu && (
                <Menu showingMenuSet={showingMenuSet} />
            )}
        </nav>
    )
}

function Menu({ showingMenuSet }: { showingMenuSet?: React.Dispatch<React.SetStateAction<boolean>> }) {
    return (
        <ul className={styles.menu}>
            {menuItems.map((eachMenuItem, eachMenuItemIndex) => {
                return (
                    <li key={eachMenuItemIndex} className={styles.menuItem}>
                        <div style={{ display: "flex", gap: ".2rem" }}>
                            <Link href={eachMenuItem.link} onClick={() => {
                                if (showingMenuSet) {
                                    showingMenuSet(false)
                                }
                            }}>{eachMenuItem.title}</Link>

                            {eachMenuItem.subMenu && (
                                <svg style={{ width: ".7rem" }} className={styles.navChevron} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
                            )}
                        </div>

                        {eachMenuItem.subMenu && (
                            <ul className={styles.subMenu}>
                                {eachMenuItem.subMenu.map((eachSubMenuItem, eachSubMenuItemIndex) => {
                                    return (
                                        <li key={eachSubMenuItemIndex} className={styles.subMenuItem}>
                                            <Link href={eachSubMenuItem.link} onClick={() => {
                                                if (showingMenuSet) {
                                                    showingMenuSet(false)
                                                }
                                            }}>{eachSubMenuItem.title}</Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        )}
                    </li>
                )
            })}
        </ul>
    )
}

