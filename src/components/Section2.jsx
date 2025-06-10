import { useEffect, useState } from "react"
import TasteCard from "./TasteCard"

const Section2 = ({ setModalImage, handleAnchorClick }) => {
    const [section2Data, setSection2Data] = useState(null)
    
    useEffect(() => {
        const BASE_URL = import.meta.env.VITE_API_URL

        fetch(`${BASE_URL}/tastes`)
            .then((res) => {
                if (!res.ok) throw new Error('Failed to fetch')
                return res.json()
            })
            .then((json) => {
                const { acf } = json[0];

                const cards = [
                    {
                        id: 1,
                        color: acf?.section_2_title_1,
                        description: acf?.section_2_description_1,
                        img: acf?.section_2_image_1?.url,
                    },
                    {
                        id: 2,
                        color: acf?.section_2_title_2,
                        description: acf?.section_2_description_2,
                        img: acf?.section_2_image_2?.url,
                    },
                    {
                        id: 3,
                        color: acf?.section_2_title_3,
                        description: acf?.section_2_description_3,
                        img: acf?.section_2_image_3?.url,
                    },
                ];

                setSection2Data({acf, cards})
            })
            .catch((err) => {
                setError(err)
                console.error(err)
            })
    }, [])

    if (!section2Data) return null

    const { acf, cards } = section2Data

    return (
        <section id="section2" className="px-6 py-16 max-w-7xl mx-auto">
            <div className="flex flex-col items-center mb-10">
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-400">{acf?.section_2_title}</h2>
                <hr  className="mt-5 w-80 border-t-2 border-gray-500"/>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
                {cards.map((card) => (
                    <TasteCard key={card.id} card={card} onClick={() => setModalImage(card.img)} handleAnchorClick={handleAnchorClick} />
                ))}
            </div>
        </section>
    )
}

export default Section2