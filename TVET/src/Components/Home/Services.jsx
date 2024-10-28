import React from "react";

import "../common.css";

const ServiceCard = ({ title, description, imageSrc }) => {
  return (
    <div className="max-w-sm w-full p-4 bg-white rounded-lg shadow-lg transform transition-all hover:scale-105">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-center text-gray-800">
          {title}
        </h2>
        <p className="mt-2 text-gray-600">{description}</p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
          Learn More
        </button>
      </div>
    </div>
  );
};

// Example of using the ServiceCard component
const ServiceCardList = () => {
  const services = [
    {
      title: "কারিগরি শিক্ষার সম্প্রসারণ",
      description:
        "কারিগরি শিক্ষার সম্প্রসারণ: প্রযুক্তি ও উদ্ভাবনের যুগে বাংলাদেশকে এগিয়ে নিতে দক্ষতা ও কারিগরি শিক্ষার বিস্তৃতি ঘটানো, যাতে দেশের প্রতিটি শিক্ষার্থী উচ্চশিক্ষার পাশাপাশি হাতে-কলমে প্রশিক্ষণ লাভ করতে পারে।",
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsSrfgcpx8Kl7hCLYIzmfHHbA6zX1DjEFF7w&s",
    },
    {
      title: "বেকার সমস্যা সমাধান",
      description:
        "বেকার সমস্যা সমাধান: দেশের বেকারত্বের হার কমাতে কারিগরি খাতকে আরও শক্তিশালী করে তোলার উদ্যোগ গ্রহণ করা হচ্ছে। কারিগরি শিক্ষায় দক্ষতা অর্জনকারী ব্যক্তিরা নিজেদের কর্মসংস্থান তৈরি করতে এবং দেশকে আরও উন্নতির পথে এগিয়ে নিতে সক্ষম।",
      imageSrc:
        "https://cdn.ittefaqbd.com/contents/cache/images/640x358x1/uploads/media/2023/06/15/b5b425f77dd03fe645788b4bf501f9b8-648a311868f87.jpg?jadewits_media_id=112385",
    },
    {
      title: "চতুর্থ শিল্প বিপ্লবের উপযোগী দক্ষতা বিকাশ",
      description:
        "চতুর্থ শিল্প বিপ্লবের উপযোগী দক্ষতা বিকাশ: বর্তমান সময়ে উদ্ভাবনী প্রযুক্তির ব্যবহার বাড়ছে, এবং এই প্রযুক্তি সম্পর্কে প্রশিক্ষণই আগামী দিনের চাহিদা পূরণে সহায়ক হবে। তাই, আমাদের সংগঠন বিভিন্ন কার্যক্রমের মাধ্যমে কারিগরি শিক্ষার্থীদের চতুর্থ শিল্প বিপ্লবের উপযোগী করে তুলতে কাজ করে যাচ্ছে।",
      imageSrc:
        "https://cms.cut.ac.za/Files/Froala/b32b8ebf-9d66-473d-8fc1-3c1f725f4c2a.jpg",
    },
    {
      title: "চতুর্থ শিল্প বিপ্লবের উপযোগী দক্ষতা বিকাশ",
      description:
        "চতুর্থ শিল্প বিপ্লবের উপযোগী দক্ষতা বিকাশ: বর্তমান সময়ে উদ্ভাবনী প্রযুক্তির ব্যবহার বাড়ছে, এবং এই প্রযুক্তি সম্পর্কে প্রশিক্ষণই আগামী দিনের চাহিদা পূরণে সহায়ক হবে। তাই, আমাদের সংগঠন বিভিন্ন কার্যক্রমের মাধ্যমে কারিগরি শিক্ষার্থীদের চতুর্থ শিল্প বিপ্লবের উপযোগী করে তুলতে কাজ করে যাচ্ছে।",
      imageSrc:
        "https://cms.cut.ac.za/Files/Froala/b32b8ebf-9d66-473d-8fc1-3c1f725f4c2a.jpg",
    },
  ];

  return (
    <div>
      <h2 className="text-3xl text-center mt-24 mb-8 solaiman">
        আমাদের উদ্দেশ্যসমূহ
      </h2>
      <div className="flex flex-wrap gap-4 justify-center p-4 solaiman">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            imageSrc={service.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceCardList;
