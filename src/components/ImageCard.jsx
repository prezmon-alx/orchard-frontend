import { directionMap } from "../utils/animationDirections"

const ImageCard = ({ src, alt, className = "", show = true, direction = "up" }) => {
    const initialTranslate = directionMap[direction] || directionMap.up

    return (
        <div
            className={`
                overflow-hidden group
                transition-all duration-700 ease-out
                ${show ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${initialTranslate}`}
                ${className}
            `}
        >
            <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-[2deg]"
            />
        </div>
    )
}

export default ImageCard