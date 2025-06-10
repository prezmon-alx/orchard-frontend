const SectionContent = ({ title, description, linkText, linkDescription, handleAnchorClick }) => {
    return (
        <div className="flex flex-col h-full">
            <div className="space-y-6">
                <h1 className="text-2xl md:text-3xl font-semibold text-gray-400">
                    {title}
                </h1>

                <hr className='w-full border-t-2 border-gray-500 ' />

                <div className="text-gray-400 leading-relaxed text-lg space-y-4" dangerouslySetInnerHTML={{ __html: description }} />
            </div>

            <a 
                href="" 
                className="mt-20 bg-gray-800 p-4 rounded-lg border-l-4 border-orange-500 hover:bg-gray-700 transition-colors duration-300 ease-in-out" 
                onClick={handleAnchorClick}
            >
                <p className="text-orange-400 font-semibold text-md mb-2">{linkText}</p>
                <p className="text-md text-gray-300 font-semibold">{linkDescription}</p>
            </a>
        </div>
    )
}
 
export default SectionContent