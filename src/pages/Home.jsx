import { useState } from 'react'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import Modal from '../components/Modal'

function Home() {
    const [modalImage, setModalImage] = useState(null)

	const handleAnchorClick = (e) => {
		e.preventDefault()
		console.log(e.currentTarget)
	}
    
    return (
        <div className="bg-black text-white font-sans min-h-screen">
            <Section1 handleAnchorClick={handleAnchorClick}/>
            <Section2 setModalImage={setModalImage} handleAnchorClick={handleAnchorClick} />

            {modalImage && <Modal image={modalImage} onClose={() => setModalImage(null)} />}
        </div>
    )
}

export default Home