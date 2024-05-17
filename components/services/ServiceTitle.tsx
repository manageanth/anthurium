import React from 'react'

export default function ServiceTitle({ name }: { name: string }) {
    return (
        <section style={{ backgroundColor: "var(--backgroundColor)", color: "#fff" }}>
            <h2 style={{ textAlign: "center", }}>{name}</h2>
        </section>
    )
}
