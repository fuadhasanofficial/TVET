// componet by fuad hasan

const Aside = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-200 p-6">
        <ul className="space-y-4">
          <li>
            <a href="#" className="block text-lg font-semibold text-gray-700">
              লিংক ১
            </a>
          </li>
          <li>
            <a href="#" className="block text-lg font-semibold text-gray-700">
              লিংক ২
            </a>
          </li>
          <li>
            <a href="#" className="block text-lg font-semibold text-gray-700">
              লিংক ৩
            </a>
          </li>
          <li>
            <a href="#" className="block text-lg font-semibold text-gray-700">
              লিংক ৪
            </a>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-6">প্রধান কন্টেন্ট এলাকা</h1>
        <p className="text-lg leading-relaxed">
          এখানে আপনার মূল কন্টেন্ট লিখুন... আপনি টেইলউইন্ড সিএসএস ব্যবহার করে
          সহজেই রেস্পন্সিভ লেআউট তৈরি করতে পারেন।
        </p>
      </main>
    </div>
  );
};

export default Aside;
