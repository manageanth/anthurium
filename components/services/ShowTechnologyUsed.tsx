import React from 'react'

export default function ShowTechnologyUsed({ items }: { items: string[] }) {
    return (
        <ul style={{ display: "flex", gap: "1rem", overflowX: "auto", padding: "1rem" }}>
            {items.map((eachItem, eachItemIndex) => {
                return (
                    <li key={eachItemIndex} style={{ padding: '.5rem 1rem', borderRadius: "2rem", backgroundColor: "var(--primaryColor)", fontWeight: "bold", color: "#fff", whiteSpace: "nowrap" }}>{eachItem}</li>
                )
            })}
        </ul>
    )
}
