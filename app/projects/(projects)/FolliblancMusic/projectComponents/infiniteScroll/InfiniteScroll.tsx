import React, { ReactNode, } from 'react'
import styles from "./infinitescroll.module.css"

export default function InfiniteScroll(
    {
        initialTimeToLoop = 10,
        amountOfTrains = 2,
        children,
        trainProps,
        respondToHover = true,
        ...elProps
    }: {
        initialTimeToLoop?: number,
        amountOfTrains?: number,
        children: ReactNode,
        trainProps?: React.HTMLAttributes<HTMLDivElement>
        respondToHover?: boolean
    } & React.HtmlHTMLAttributes<HTMLDivElement>) {

    const timeToLoop = initialTimeToLoop * 1000
    const amountToTranslate = 100 / amountOfTrains

    return (
        <div {...elProps} style={{ display: "grid", ...elProps?.style }}>
            <div style={{ overflowX: "hidden" }}>
                <div {...trainProps} className={`${styles.train} ${respondToHover && styles.trainHover} ${trainProps?.className}`} style={{ "--timeToLoop": `${timeToLoop}ms`, "--translateAmt": `-${amountToTranslate}%`, display: "flex", minWidth: "fit-content", ...trainProps?.style } as React.CSSProperties}>
                    {new Array(amountOfTrains).fill("").map((eachArr, eachArrIndex) => {
                        return (
                            <React.Fragment key={eachArrIndex}>
                                {children}
                            </React.Fragment>
                        )
                    })}
                </div>
            </div>
        </div>

    )
}
