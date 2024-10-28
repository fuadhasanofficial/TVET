import { useState } from "react";

const Gallery = () => {
  const images = [
    {
      src: "https://i.ibb.co.com/59Mg7kk/IMG-20240925-WA0005.jpg",
      description: "এখানে ছবির বিস্তারিত থাকবে",
    },
    {
      src: "https://i.ibb.co.com/R7HB01t/IMG-20240923-WA0005.jpg",
      description: `
এখানে ছবির বিস্তারিত থাকবে`,
    },
    {
      src: "https://i.ibb.co.com/0nGHPZb/IMG-20241021-WA0019.jpg",
      description: "এখানে ছবির বিস্তারিত থাকবে",
    },
    {
      src: "https://i.ibb.co.com/8PCb1ym/IMG-20241021-WA0025.jpg",
      description: "এখানে ছবির বিস্তারিত থাকবে",
    },
    {
      src: "https://i.ibb.co.com/bKm8t7b/IMG-20241021-WA0027.jpg",
      description: "এখানে ছবির বিস্তারিত থাকবে",
    },
    {
      src: "https://i.ibb.co.com/0hpDwMh/IMG-20241021-WA0028.jpg",
      description: "এখানে ছবির বিস্তারিত থাকবে",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const showPreviousImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const showNextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <h2 className="text-center text-2xl solaiman">গ্যালারি </h2>
      <div className="flex flex-wrap gap-4 justify-center p-4">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => openModal(index)}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2 cursor-pointer transition-transform transform hover:scale-105"
          >
            <div className="rounded overflow-hidden shadow-lg w-full">
              <img
                src={image.src}
                alt={image.description}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 bg-white text-center">
                <p className="text-gray-700 font-semibold solaiman">
                  {image.description}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Modal */}
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="relative bg-white p-4 rounded shadow-lg max-w-lg w-full">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-gray-600 text-2xl font-bold"
              >
                ×
              </button>
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].description}
                className="w-full h-96 object-cover"
              />
              <div className="text-center my-4">
                <p className="text-gray-700 font-semibold">
                  {images[currentIndex].description}
                </p>
              </div>
              <div className="flex justify-between">
                <button
                  onClick={showPreviousImage}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Previous
                </button>
                <button
                  onClick={showNextImage}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
