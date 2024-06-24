import React from 'react'
import Logo from '../logo/Logo'

export default function Footer() {
    return (
        <footer style={{ padding: "4rem 2rem", display: "grid", gap: "2rem", backgroundColor: "#fff", justifyItems: "center" }}>
            <Logo alternate={true} />

            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem", maxWidth: "900px", margin: "0 auto" }}>
                <div style={{ flex: "1 1 300px" }}>
                    <p>152 Burger Lane, Dream Food Capital - Florida</p>

                    <p style={{ marginTop: "1rem", fontWeight: "500" }}>T: +888 123-2134</p>
                    <p style={{ fontWeight: "500" }}>E: bookings@burgerbliss.com</p>
                </div>

                <div style={{ flex: "1 1 300px" }}>
                    <ul style={{ display: "grid", gap: ".4rem" }}>
                        {[
                            "twitter",
                            "Facebook",
                            "Instagram",
                            "Yelp",
                        ].map((eachItem, eachItemIndex) => {
                            return (
                                <li key={eachItemIndex} style={{ textTransform: "capitalize" }}>{eachItem}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>

            <div style={{ display: "flex", justifySelf: "stretch", alignItems: "center", justifyContent: "space-between" }}>
                <p>© COPYRIGHT ANTH ALL RIGHT RESERVED.</p>

                <p>The Best</p>
            </div>
        </footer>
    )
}
