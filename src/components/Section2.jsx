import TasteCard from "./TasteCard"

const Section2 = ({ setModalImage, handleAnchorClick }) => {
    const tasteColors = [
		{
			id: 1,
			color: 'RED',
			description: 'Red foods remind us of berries and soft fruits, so we anticipate a sweet taste.',
			img: '/images/taste_red.jpg',
		},
		{
			id: 2,
			color: 'Green',
			description: 'Fresh, zingy green colours are reminiscent of unique fruit, promising sour or acid flavours.',
			img: '/images/taste_green.jpg',
		},
		{
			id: 3,
			color: 'White',
			description: 'White foods evoke memories of salt and savoury flavours, driving the expectation of a savoury treat.',
			img: '/images/taste_white.jpg',
		},
	]

    return (
        <section id="section2" className="px-6 py-16 max-w-7xl mx-auto">
            <div className="flex flex-col items-center mb-10">
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-400">TASTE THE COLOURS</h2>
                <hr  className="mt-5 w-80 border-t-2 border-gray-500"/>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
                {tasteColors.map((card) => (
                    <TasteCard key={card.id} card={card} onClick={() => setModalImage(card.img)} handleAnchorClick={handleAnchorClick} />
                ))}
            </div>
        </section>
    )
}

export default Section2