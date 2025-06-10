import { useState } from 'react'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import Modal from '../components/Modal'
import useApi from '../hooks/useApi'

function Home() {
    const [modalImage, setModalImage] = useState(null)

    const section1 = useApi('recipes')
    const section2 = useApi('tastes')

    const isLoading = section2.loading || section1.loading
    const isError = section2.error || section1.error

    if (isLoading) {
        return (
            <div className="bg-black w-full h-screen flex justify-center items-center">
                <span className="text-lg text-gray-500 animate-pulse">Loading content...</span>
            </div>
        )
    }

    if (isError) {
        return <div className="bg-black text-red-500 text-center mt-10">Something went wrong.</div>
    }
    
	const handleAnchorClick = (e) => {
		e.preventDefault()
		console.log(e.currentTarget)
	}
    
    return (
        <div className="bg-black text-white font-sans min-h-screen">
            <Section1 data={section1.data} handleAnchorClick={handleAnchorClick}/>
            <Section2 data={section2.data} setModalImage={setModalImage} handleAnchorClick={handleAnchorClick} />

            {modalImage && <Modal image={modalImage} onClose={() => setModalImage(null)} />}
        </div>
    )
}

export default Home