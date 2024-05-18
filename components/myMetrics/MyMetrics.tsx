"use client"

import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

export default function MyMetrics({ icon, amount, amountAdd, text, animateTime = 2500, stepper = 1 }: { icon: JSX.Element, amount: number, amountAdd: string, text: string, animateTime?: number, stepper?: number }) {
    const { ref, inView } = useInView()

    const [animateAmount, animateAmountSet] = useState(0)

    const [timeLoop, timeLoopSet] = useState(() => {
        return animateTime / amount
    })

    const looper = useRef<NodeJS.Timeout>()

    useEffect(() => {
        if (inView) {
            if (looper.current) clearInterval(looper.current)

            looper.current = setInterval(() => {
                animateAmountSet(prev => {
                    let newAmount = prev + stepper

                    if (newAmount >= amount) {
                        clearInterval(looper.current)
                        return amount
                    }

                    return newAmount
                })
            }, timeLoop)
        } else {
            // animateAmountSet(0)
        }
    }, [inView])

    return (
        <div ref={ref} style={{ display: "flex", flexWrap: "wrap", gap: "1rem", }}>
            {icon}

            <div style={{ flex: 1, color: "var(--primaryColor)" }}>
                <p style={{ fontSize: "var(--largeFontSize)", fontWeight: "bold" }}>{animateAmount}{amountAdd}</p>

                <p style={{ opacity: ".8" }}>{text}</p>
            </div>
        </div>
    )
}
