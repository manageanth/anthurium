import React from 'react'

export default function ShowKeyFeatures({ features }: { features: string[] }) {
    return (
        <ul style={{ padding: '1rem', display: "grid", gap: ".5rem" }}>
            {features.map((eachFeature, eachFeatureIndex) => {
                return (
                    <li key={eachFeatureIndex} style={{ display: "flex", gap: ".5rem" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 122.88 109.76">
                            <path d="m0 52.88 22.68-.3c8.76 5.05 16.6 11.59 23.35 19.86C63.49 43.49 83.55 19.77 105.6 0h17.28C92.05 34.25 66.89 70.92 46.77 109.76 36.01 86.69 20.96 67.27 0 52.88z" style={{ fillRule: "evenodd", clipRule: "evenodd", fill: "var(--primaryColor)", }} />
                        </svg>

                        {eachFeature}
                    </li>
                )
            })}
        </ul>
    )
}
