import { useEffect, useState } from "react"

function Modal({ image, onClose }) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 10)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`fixed inset-0 bg-black/80 flex items-center justify-center z-50 transition-opacity duration-300 ${
        show ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClose}
    >
      <div
        className={`relative transition-all duration-300 ease-out ${
          show ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-7 text-white text-2xl font-bold hover:text-gray-300 cursor-pointer"
        >
          &times;
        </button>

        <img
          src={image}
          alt="Modal"
          className="max-w-full max-h-[80vh] rounded-md shadow-lg"
        />
      </div>
    </div>
  )
}
export default Modal