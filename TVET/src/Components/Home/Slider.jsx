import React, { useEffect, useState } from "react";

const Slider = () => {
  const images = [
    {
      url: "https://i.ibb.co.com/Ytpwsk3/IMG-20240925-WA0009.jpg",
      title:
        "মানিকগঞ্জ টেকনিক্যাল স্কুল ও কলেজের শিক্ষার্থীদের সাথে মতবিনিময় সভায় কেন্দ্রীয় কমিটির প্রতিনিধিদের ফুল দিয়ে স্বাগতম জানায় সাধারণ শিক্ষার্থিরা  ",
    },
    {
      url: "https://i.ibb.co.com/ftk9p0R/IMG-20240925-WA0006.jpg",
      title: " ",
    },
    {
      url: "https://i.ibb.co.com/m5S96fz/IMG-20240923-WA0004.jpg",
      title: "মানিকগঞ্জ পৌরসভার পরিচ্ছন্নতা অভিযানে আমরাই বাংলাদেশের অংশগ্রহণ",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full lg:w-[75%] h-64 lg:h-[500px]  mx-auto overflow-hidden">
      {/* Background Image */}
      <img
        src={images[currentIndex].url}
        alt={images[currentIndex].title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-30" />
      {/* Low opacity background */}
      <div className="absolute bottom-5  text-white bg-black p-6  bg-opacity-50 w-full">
        <h2 className="text-center text-sm lg:text-2xl font-bold">
          {images[currentIndex].title}
        </h2>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrevious}
        className="absolute top-1/2 left-5 transform -translate-y-1/2 text-white bg-gray-800 bg-opacity-50 rounded-full p-2 hover:bg-gray-700"
      >
        &lt; {/* Left Arrow */}
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-5 transform -translate-y-1/2 text-white bg-gray-800 bg-opacity-50 rounded-full p-2 hover:bg-gray-700"
      >
        &gt; {/* Right Arrow */}
      </button>
    </div>
  );
};

export default Slider;
