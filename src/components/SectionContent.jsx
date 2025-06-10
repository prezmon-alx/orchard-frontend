import { useEffect, useState } from "react"

const SectionContent = ({ title, description, linkText, linkDescription, handleAnchorClick }) => {
    const [showTitle, setShowTitle] = useState(false)
    const [showDescription, setShowDescription] = useState(false)
    const [showAnchor, setShowAnchor] = useState(false)

    useEffect(() => {
        setShowTitle(false)
        setShowDescription(false)
        setShowAnchor(false)

        const timeout1 = setTimeout(() => setShowTitle(true), 100)
        const timeout2 = setTimeout(() => setShowDescription(true), 400)
        const timeout3 = setTimeout(() => setShowAnchor(true), 700)

        return () => {
            clearTimeout(timeout1)
            clearTimeout(timeout2)
            clearTimeout(timeout3)
        }
    }, [title, description, linkText, linkDescription])

    return (
        <div className="flex flex-col h-full">
            <div className="space-y-6">
                <h1
                    className={`
                        text-2xl md:text-3xl font-semibold text-gray-400
                        transition-all duration-700 ease-out
                        ${showTitle ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
                    `}
                >
                    {title}
                </h1>

                <hr className='w-full border-t-2 border-gray-500 ' />

                <div
                    className={`
                        text-gray-400 leading-relaxed text-lg space-y-4
                        transition-all duration-700 ease-out
                        ${showDescription ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
                    `}
                    dangerouslySetInnerHTML={{ __html: description }}
                />
            </div>

            <a
                href=""
                className={`
                    mt-20 bg-gray-800 p-4 rounded-lg border-l-4 border-orange-500
                    hover:bg-gray-700 transition-all duration-1000 ease-out
                    ${showAnchor ? "opacity-100" : "opacity-0"}
                `}
                onClick={handleAnchorClick}
            >
                <p className="text-orange-400 font-semibold text-md mb-2">{linkText}</p>
                <span className="text-md text-gray-300 font-semibold" dangerouslySetInnerHTML={{ __html: linkDescription }} />
            </a>
        </div>
    )
}

export default SectionContent