const Loading = () => (
    <div className="bg-black w-full h-screen flex flex-col justify-center items-center">
        <div className="w-12 h-12 border-4 border-gray-700 border-t-orange-500 rounded-full animate-spin mb-4"></div>
        <span className="text-lg text-gray-500 animate-pulse">Loading content...</span>
    </div>
)

export default Loading