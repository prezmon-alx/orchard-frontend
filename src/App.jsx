import { useState } from 'react'
import Modal from './components/Modal'
import TasteCard from './components/TasteCard'

function App() {
	const [modalImage, setModalImage] = useState(null)

	const handleAnchorClick = (e) => {
		e.preventDefault()
		console.log(e.currentTarget)
	}

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
		<div className="bg-black text-white font-sans min-h-screen">
			<section className="px-6 py-16 max-w-7xl mx-auto">
				<div className="grid lg:grid-cols-3 gap-8 items-stretch">
					<div className="overflow-hidden group">
						<img
							src="/images/boiling.jpg"
							alt="Boiling"
							className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-[2deg]"
						/>
					</div>

					<div className="flex flex-col justify-between h-full">
						<div className="overflow-hidden group">
							<img
								src="/images/cooking.jpg"
								alt="Cooking"
								className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-[2deg]"
							/>
						</div>

						<div className="overflow-hidden group mt-auto">
							<img
								src="/images/eggs.jpg"
								alt="Eggs"
								className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-[2deg]"
							/>
						</div>
					</div>

					<div className="flex flex-col h-full">
						<div className="space-y-6">
							<h1 className="text-2xl md:text-3xl font-semibold text-gray-400">
								WHAT DOES COOKING MEAN?
							</h1>

							<hr className='w-full border-t-2 border-gray-500 ' />

							<div className="text-gray-400 leading-relaxed text-lg space-y-4">
								<p>
								Is it simply applying heat to a food product? A way of making certain food safe to eat? Or a way to create flavour and make food more appealing? This is just part of what Hervé This, the father of molecular gastronomy, has dedicated his life to finding out. We spoke to him to find out what his experiments have told him. And in the process even discovered the secret to cooking the perfect egg...
								</p>
							</div>
						</div>

						<a href="" className="mt-20 bg-gray-800 p-4 rounded-lg border-l-4 border-orange-500 hover:bg-gray-700 transition-colors duration-300 ease-in-out" onClick={handleAnchorClick}>
							<p className="text-orange-400 font-semibold text-md mb-2">THE PERFECT EGG</p>
							<p className="text-md text-gray-300 font-semibold">
								Keep water between 67 and 68°C for a flavourful, tender yolk
							</p>
						</a>
					</div>
				</div>
			</section>
		
			<section className="px-6 py-16 max-w-7xl mx-auto">
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
			
			{modalImage && <Modal image={modalImage} onClose={() => setModalImage(null)} />}
		</div>
	)
}

export default App