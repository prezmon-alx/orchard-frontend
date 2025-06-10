function TasteCard({ card, onClick, handleAnchorClick }) {
  return (
    <div className="text-center space-y-6">
      <div
        className="aspect-square relative rounded-lg overflow-hidden bg-gray-800 max-w-xs mx-auto cursor-pointer group"
        onClick={onClick}
      >
        <img
          src={card.img}
          alt={card.color}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-[2deg]"
        />
      </div>
      <div className="cursor-pointer" onClick={handleAnchorClick}>
        <h3 className="text-xl font-semibold mb-3">{card.color}</h3>
        <p
          className="text-gray-400 text-md px-10"
          dangerouslySetInnerHTML={{ __html: card.description }}
          ></p>
      </div>
    </div>
  );
}

export default TasteCard;