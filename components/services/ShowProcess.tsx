import React from 'react'
import styles from "./showprocess.module.css"
import Image from 'next/image'

export default function ShowProcess({ steps }: { steps: { stepName: string, step: string }[] }) {
    return (
        <ul className='snap' style={{ display: "flex", gap: "1rem", whiteSpace: "nowrap", overflowX: "auto" }}>
            {steps.map((eachStep, eachStepIndex) => {
                return (
                    <li key={eachStepIndex} className={styles.stepCont} style={{ display: "grid", gap: ".5rem", position: "relative", padding: "1rem" }}>
                        <div className={styles.stepCounter} style={{ color: "#fff", backgroundColor: "var(--primaryColor)", position: "absolute", top: 0, right: 0, padding: ".5rem 1rem" }}>{eachStepIndex + 1}</div>

                        <h3>{eachStep.stepName}</h3>

                        <p>{eachStep.step}</p>
                    </li>)
            })}
        </ul>
    )
}
