import { defaultImageSrc, defaultImageSrc2, formatter } from '@/utility/globalState'
import React from 'react'
import styles from "./styles.module.css"
import Image from 'next/image'
import Link from 'next/link'

type item = {
    img: string,
    name: string,
    price: number,
    link: string
}

const items: item[] = [
    {
        img: "https://images.pexels.com/photos/3533228/pexels-photo-3533228.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        name: "item 1",
        price: 40,
        link: ""
    },
    {
        img: "https://images.pexels.com/photos/462162/pexels-photo-462162.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "item 2",
        price: 70,
        link: ""
    },
    {
        img: defaultImageSrc,
        name: "item 3",
        price: 90,
        link: ""
    },
    {
        img: defaultImageSrc2,
        name: "item 4",
        price: 50,
        link: ""
    },
    {
        img: defaultImageSrc,
        name: "item 5",
        price: 30,
        link: ""
    },
    {
        img: defaultImageSrc2,
        name: "item 6",
        price: 60,
        link: ""
    },
]

export default function Shop() {
    return (
        <div className={styles.cont} style={{}}>
            {items.map((eachItem, eachItemIndex) => {
                return (
                    <div key={eachItemIndex} className={styles.item} style={{}}>
                        <Image alt={`${eachItem.name}'s image`} src={eachItem.img} width={300} height={300} style={{ objectFit: "contain", width: "80%", aspectRatio: "1/1" }} />


                        <Link href={eachItem.link} className={styles.link}>
                            <p>More<br />Info</p>

                            <div className={styles.hexadecagon}>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </Link>

                        <h3>{eachItem.name}</h3>

                        <p>{formatter.format(eachItem.price)}</p>

                        <div className={styles.background} style={{ animation: "rotate 1s infinite both alternate ease-in-out" }}></div>
                    </div>
                )
            })}
        </div>
    )
}
