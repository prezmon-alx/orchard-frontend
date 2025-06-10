import { useState } from 'react'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import Modal from '../components/Modal'
import useApi from '../hooks/useApi'
import Loading from '../components/Loading'

function Home() {
    const [modalImage, setModalImage] = useState(null)

    const section1 = useApi('recipes')
    const section2 = useApi('tastes')

    const isLoading = section2.loading || section1.loading
    const isError = section2.error || section1.error
    
    if (isLoading) {
        return <Loading />
    }

    if (isError) {
        return <Error />
    }
    
	const handleAnchorClick = (e) => {
		e.preventDefault()
		console.log(e.currentTarget)
	}
    
    return (
        <div className="bg-black text-white font-sans min-h-screen pt-20">
            <Section1 data={section1.data} handleAnchorClick={handleAnchorClick}/>
            <Section2 data={section2.data} setModalImage={setModalImage} handleAnchorClick={handleAnchorClick} />

            {modalImage && <Modal image={modalImage} onClose={() => setModalImage(null)} />}
        </div>
    )
}

export default Home