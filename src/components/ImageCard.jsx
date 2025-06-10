const ImageCard = ({ src, alt, className = "" }) => (
    <div className={`overflow-hidden group ${className}`}>
        <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-[2deg]"
        />
    </div>
);

export default ImageCard;