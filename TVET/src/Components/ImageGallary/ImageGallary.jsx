// src/components/ImageGallery.js

import { Gallery } from "react-grid-gallery";

const IMAGES = [
  {
    src: "https://i.ibb.co.com/j3qhyvy/IMG-20241020-WA0006.jpg",
    thumbnail: "https://i.ibb.co.com/bKm8t7b/IMG-20241021-WA0027.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    caption: "Random Image 1",
  },
  {
    src: "https://i.ibb.co.com/bKm8t7b/IMG-20241021-WA0027.jpg",
    thumbnail: "https://source.unsplash.com/random/800x601",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Random Image 2",
  },
  {
    src: "https://source.unsplash.com/random/800x602",
    thumbnail: "https://source.unsplash.com/random/800x602",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Random Image 3",
  },
  // Add more images as needed
];

const ImageGallery = () => {
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold text-center mb-8">Image Gallery</h1>
      <Gallery images={IMAGES} enableImageSelection={false} />
    </div>
  );
};

export default ImageGallery;
