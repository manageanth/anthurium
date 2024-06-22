import React from 'react'
import Logo from '../logo/Logo'

export default function Footer() {
    return (
        <footer style={{ padding: "4rem 2rem", display: "grid", gap: "2rem", backgroundColor: "#fff", justifyItems: "center" }}>
            <Logo alternate={true} />

            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem", maxWidth: "900px", margin: "0 auto" }}>
                <div style={{ flex: "1 1 300px" }}>
                    <p>732/21 Second Street, Manchester King Street, Kingston United Kingdom</p>

                    <p style={{ marginTop: "1rem", fontWeight: "500" }}>T: +65 (0) 76-890-214</p>
                    <p style={{ fontWeight: "500" }}>E: bookings@grandburger.com</p>
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
                <p>© COPYRIGHT MAX ALL RIGHT RESERVED.</p>

                <p>Original</p>
            </div>
        </footer>
    )
}
