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
      title: "পথ শিশুদের পুনর্বাসন",
      description:
        "আমাদের সংগঠন বিভিন্ন সেবামূলক কাজের অংশ হিসেবে পথ শিশুদের পুনর্বাসনের জন্য নিবেদিতভাবে কাজ করে। সমাজের সুবিধাবঞ্চিত এই শিশুদের একটি নিরাপদ আশ্রয়, শিক্ষা, এবং স্বাভাবিক জীবনে ফিরে আসার সুযোগ প্রদানের লক্ষ্যেই আমরা কাজ করছি। পথ শিশু পুনর্বাসন কার্যক্রমের মাধ্যমে তাদের মানসিক ও শারীরিক উন্নয়নের পাশাপাশি, স্বাস্থ্যসেবা, খাদ্য, ও শিক্ষার মতো মৌলিক চাহিদাগুলো পূরণের উদ্যোগ নেওয়া হয়। সমাজে শিশুদের এক নতুন জীবনের আশা ও সঠিক পথে পরিচালিত করার জন্য আমরা বদ্ধপরিকর।",
      imageSrc:
        "https://www.dhakatimes24.com/assets/news_photos/2017/01/19/image-16941.jpg",
    },
    {
      title: "বৃক্ষরোপন",
      description:
        "আমাদের সংগঠন বিভিন্ন সেবার পাশাপাশি পরিবেশ সংরক্ষণের লক্ষ্যে বৃক্ষরোপণ কার্যক্রমও পরিচালনা করে থাকে। আমরা বিশ্বাস করি, বৃক্ষরোপণ শুধু পরিবেশ রক্ষাই নয়, ভবিষ্যৎ প্রজন্মের জন্য একটি সবুজ ও টেকসই পৃথিবী গড়ে তুলতেও সহায়ক। প্রতি বছর নিয়মিতভাবে বিভিন্ন স্থানে বৃক্ষরোপণ ও পরিচর্যার উদ্যোগ নিয়ে আমরা এই মহৎ কার্যক্রমকে সামনে এগিয়ে নিয়ে যাচ্ছি।",
      imageSrc:
        "https://www.ugaoo.com/cdn/shop/articles/shutterstock_649766830.jpg?v=1661881786",
    },
    {
      title: "অক্ষম / দরিদ্র ব্যাক্তিদের পুনর্বাসন",
      description:
        "আমাদের সংগঠন অক্ষম ও দরিদ্র ব্যক্তিদের পুনর্বাসনে নিবেদিতভাবে কাজ করছে, যার মূল লক্ষ্য তাদের জীবনমান উন্নত করা এবং সমাজে স্বাবলম্বী করে গড়ে তোলা। পুনর্বাসন কার্যক্রমের আওতায় আমরা অক্ষম ও দরিদ্র ব্যক্তিদের জন্য স্বাস্থ্যসেবা, শিক্ষা, ও কর্মসংস্থানের সুযোগ প্রদান করে থাকি। এছাড়াও, তাদের আর্থিক সহায়তা ও প্রশিক্ষণ দিয়ে দক্ষতা বৃদ্ধি করে কর্মজীবনে ফিরে আসার উপায় তৈরি করি। আমাদের এই প্রচেষ্টার মাধ্যমে তারা সমাজে সম্মানজনক জীবনযাপন করতে পারে এবং নিজের পায়ে দাঁড়াতে সক্ষম হয়। এই পুনর্বাসন কার্যক্রমের মাধ্যমে আমরা একটি সমৃদ্ধ ও মানবিক সমাজ গড়ার জন্য কাজ করে যাচ্ছি।",
      imageSrc: "https://www.shomoyeralo.com/2022/10/25/salo_1666681567.jpg",
    },
  ];

  return (
    <div>
      <h2 className="text-3xl text-center mt-24 mb-8 solaiman">
        চলমান কার্যক্রম
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
