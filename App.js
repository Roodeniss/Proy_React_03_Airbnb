import React from "react"
import Navbar from "./componets/Nabar"
import Hero from "./componets/Hero"
import data from "./data"

export default function App() {
    const cards = date.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
            />
        )
    })

    return (
        <div>

            <Navbar />
            <Hero />
            <section className=" cards-list">
                {cards}
            </section>
        </div>
    )
}