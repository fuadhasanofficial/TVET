const FoundationSection = () => {
  return (
    <section className="bg-gray-100 py-16 px-8 lg:w-[75%] mx-auto">
      <div className="container  mx-auto flex flex-col md:flex-row items-center">
        {/* Image Part */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src="https://i.ibb.co.com/bKm8t7b/IMG-20241021-WA0027.jpg"
            alt="Foundation image"
            className="rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
          />
        </div>

        {/* Text Part */}
        <div className="md:w-1/2 md:pl-12 text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Building a Better Future
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            "আমরাই বাংলাদেশ" ফাউন্ডেশন ২০২২ সালে প্রতিষ্ঠিত হয়েছে, যার মূল
            উদ্দেশ্য তরুণ প্রজন্মকে সাথে নিয়ে একটি সুন্দর, সমৃদ্ধ ও উন্নত
            বাংলাদেশ গড়ে তোলা। আমাদের বিশ্বাস, তরুণরাই দেশের ভবিষ্যৎ এবং তাদের
            ক্ষমতায়নের মাধ্যমে সমাজের সার্বিক উন্নয়ন সম্ভব। আমরা তরুণদের
            দক্ষতা বৃদ্ধি, নেতৃত্ব বিকাশ, এবং সামাজিক উদ্যোগে অংশগ্রহণের সুযোগ
            তৈরি করতে কাজ করি। শিক্ষা, সামাজিক উন্নয়ন, এবং পরিবেশ সংরক্ষণে
            তরুণদের সক্রিয় অংশগ্রহণ নিশ্চিত করার জন্য বিভিন্ন কর্মসূচি পরিচালনা
            করা হয়। "আমরাই বাংলাদেশ" ফাউন্ডেশনের লক্ষ্য হলো তরুণদের মধ্যে
            ইতিবাচক পরিবর্তন আনা, যাতে তারা নিজেরা এবং সমাজের জন্য দায়িত্বশীল
            ভূমিকা পালন করতে পারে। আমরা তরুণদের উদ্ভাবনী চিন্তা ও কর্মের মাধ্যমে
            একটি আলোকিত, সচেতন ও সমৃদ্ধ বাংলাদেশ গড়ে তুলতে অঙ্গীকারবদ্ধ।
          </p>
          <a
            href="#"
            className="inline-block bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-indigo-500 transition-colors duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default FoundationSection;
