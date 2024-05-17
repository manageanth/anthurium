import React from 'react'
import styles from "./page.module.css"

export default function Page() {
    return (
        <main>
            <section>
                <div style={{ textAlign: "center", display: "grid", justifyItems: "center" }}>
                    <p className='supportingTitle2'>About</p>
                    <h1>Our company</h1>
                </div>
            </section>
        </main>
    )
}
