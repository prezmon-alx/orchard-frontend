import TasteCard from "./TasteCard"

const Section2 = ({ data, setModalImage, handleAnchorClick }) => {
    const acf = data[0]?.acf

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
    ]

    return (
        <section id="section2" className="px-6 py-16 max-w-7xl mx-auto">
            <div className="flex flex-col items-center mb-10">
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-400">{acf?.section_2_title}</h2>
                <hr  className="mt-5 w-80 border-t-2 border-gray-500"/>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
                {cards.map((card) => (
                    <TasteCard
                        key={card.id}
                        card={card}
                        onClick={() => setModalImage(card.img)}
                        handleAnchorClick={handleAnchorClick}
                    />
                ))}
            </div>
        </section>
    )
}

export default Section2