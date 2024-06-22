import Image from "next/image"
import styles from "./page.module.css"
import Nav from "./projectComponents/nav/Nav"
import ItemPicker from "./projectComponents/itemPicker/ItemPicker"
import { burgers, desserts, drinks, sides } from "./lib/products"
import Button1 from "./projectComponents/button1/Button1"
import Footer from "./projectComponents/footer/Footer"

export default function Page() {

    return (
        <main className={`${styles.main}`}>
            <Nav />

            <div className={styles.topCont}>
                <Image alt="burger" src={require(`@/public/projects/grandBurger/burger.png`).default.src} fill={true} style={{ objectFit: "cover", }} sizes="100vw" />

                <h1 style={{ position: "relative", fontSize: "var(--extraLargeFontSize)", maxWidth: "10ch", textAlign: "center", lineHeight: "1.5ch" }}>Taste the difference</h1>
            </div>

            <section>
                <div style={{ display: "flex", flexWrap: "wrap", columnGap: "1rem", rowGap: "3rem", justifyContent: "center" }}>
                    <div style={{ flex: "1 1 auto", width: "min(350px, 100%)" }}>
                        <h1 style={{ borderBlock: "2px solid var(--color2)", padding: "1rem", textAlign: "center" }}>Burgers</h1>

                        <ItemPicker items={burgers} />
                    </div>

                    <div style={{ flex: "1 1 auto", width: "min(350px, 100%)" }}>
                        <h1 style={{ borderBlock: "2px solid var(--color2)", padding: "1rem", textAlign: "center" }}>Drinks</h1>

                        <ItemPicker items={drinks} />
                    </div>

                    <div style={{ flex: "1 1 auto", width: "min(350px, 100%)" }}>
                        <h1 style={{ borderBlock: "2px solid var(--color2)", padding: "1rem", textAlign: "center" }}>Desserts</h1>

                        <ItemPicker items={desserts} />
                    </div>

                    <div style={{ flex: "0 1 auto", width: "min(350px, 100%)" }}>
                        <h1 style={{ borderBlock: "2px solid var(--color2)", padding: "1rem", textAlign: "center" }}>Sides</h1>

                        <ItemPicker items={sides} />
                    </div>
                </div>
            </section>

            <h3 className={styles.linedText} style={{ margin: "2rem 1rem" }}>HAVE IT YOUR WAY</h3>

            <section>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    <div style={{ flex: "1 1 266px", minHeight: "300px", position: "relative", }}>
                        <Image alt="food" src={require(`@/public/projects/grandBurger/food.jpg`).default.src} fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: "cover" }} />
                    </div>

                    <div style={{ flex: "2 1 532px", display: "flex", flexWrap: "wrap", color: "#000" }}>
                        <div style={{ flex: "1 1 266px", display: "grid", backgroundColor: "#fff", padding: "2rem" }}>
                            <h2 style={{ color: "#000", justifySelf: "flex-start" }}>OUR</h2>
                            <h1 style={{ color: "#000", translate: "0 -.1em" }}>Menus</h1>
                            <p style={{ maxWidth: "30ch", lineHeight: "1.7em" }}>Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi. Sed ut perspiciatis unde omnis iste natus error sit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>

                            <Button1 text='view menus' link='' style={{ marginTop: "2rem", justifySelf: "flex-start" }} />
                        </div>

                        <div style={{ flex: "1 1 266px", display: "grid", backgroundColor: "var(--gray2)", padding: "2rem" }}>
                            <h2 style={{ color: "#000", justifySelf: "flex-start" }}>ORDER</h2>
                            <h1 style={{ color: "#000", translate: "0 -.1em" }}>DELIVERY</h1>
                            <p style={{ maxWidth: "30ch", lineHeight: "1.7em" }}>Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi. Sed ut perspiciatis unde omnis iste natus error sit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>

                            <Button1 text='order online' link='' style={{ marginTop: "2rem", justifySelf: "flex-start", backgroundColor: "#000" }} />
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ padding: "2rem 0 0 0" }}>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    <div style={{ flex: "1 1 350px", minHeight: "300px", position: "relative", }}>
                        <Image alt="food" src={require(`@/public/projects/grandBurger/food2.jpg`).default.src} fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: "cover" }} />
                    </div>

                    <div style={{ flex: "1 1 350px", display: "grid", gap: "1rem", padding: "4rem 2rem", backgroundColor: "#fff", color: "#000", textAlign: "center", justifyItems: "center" }}>
                        <h3 style={{ color: "#000", justifySelf: "stretch", "--lineColor": "#000" } as React.CSSProperties} className={styles.linedText}>PRESENT</h3>

                        <div style={{ display: "grid" }}>
                            <h1 style={{ color: "#000" }}>Tomato</h1>
                            <h1 style={{ color: "#000" }}>Original</h1>
                            <p style={{ color: "var(--color1)", fontSize: "var(--largeFontSize)", fontWeight: "500", position: 'relative', top: "-.6em" }}>Sauce</p>
                        </div>

                        <p style={{ fontWeight: "500", textTransform: "uppercase" }}>OUR SIGNATURE HANDMADE BEEF PATTY</p>

                        <p style={{ maxWidth: "40ch", lineHeight: "1.7em" }}>Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi. Sed ut perspiciatis unde omnis iste natus error sit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>

                        <Button1 text='view menus' link='' style={{ marginTop: "2rem" }} />
                    </div>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", color: "#fff", flexDirection: "row-reverse" }}>
                    <div style={{ flex: "1 1 350px", minHeight: "300px", position: "relative", }}>
                        <Image alt="food" src={require(`@/public/projects/grandBurger/food3.jpg`).default.src} fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: "cover" }} />
                    </div>

                    <div style={{ flex: "1 1 350px", display: "grid", gap: "1rem", padding: "4rem 2rem", backgroundColor: "var(--backgroundColor)", textAlign: "center", justifyItems: "center" }}>
                        <h3 style={{ justifySelf: "stretch", "--lineColor": "#fff" } as React.CSSProperties} className={styles.linedText}>ALWAYS</h3>

                        <div style={{ display: "grid" }}>
                            <h1 style={{}}>Fresh</h1>

                            <h1 style={{ color: "var(--color3)" }}>Salad</h1>
                        </div>

                        <p style={{ fontWeight: "500", textTransform: "uppercase", maxWidth: "30ch" }}>life is like a burger the more you add to it, the better it becomes</p>

                        <p style={{ maxWidth: "40ch", lineHeight: "1.7em" }}>Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi. Sed ut perspiciatis unde omnis iste natus error sit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>

                        <Button1 text='view menus' link='' style={{ marginTop: "2rem", backgroundColor: "var(--color3)" }} />
                    </div>
                </div>
            </section>

            <section style={{ padding: "2rem 0rem" }}>
                <Image alt="food" src={require(`@/public/projects/grandBurger/food4.jpg`).default.src} width={1000} height={1000} style={{ objectFit: "cover", width: "100%", height: "400px" }} />
            </section>

            <section>
                <h3 className={styles.linedText} style={{ margin: "2rem 1rem", }}>Subscribe now</h3>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center", alignItems: "center", maxWidth: "800px", margin: "0 auto" }}>
                    <p style={{ flex: "0 1 300px", color: "#fff", textAlign: "end" }}>Subscribe now to receive fresh deals & offers by email.</p>

                    <input style={{ flex: "1 1 300px", }} type="text" placeholder="Email" defaultValue={""} />

                    <Button1 text='sign up' link='' style={{}} />
                </div>

            </section>

            <Footer />        </main>
    )
}
