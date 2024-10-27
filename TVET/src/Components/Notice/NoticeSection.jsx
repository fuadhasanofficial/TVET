import { Icon } from "@iconify/react";

const notices = [
  {
    id: 1,
    title:
      "আগামী রবিবার, ২৭ তারিখ, পথ শিশু দের পূর্ণবাসন করা প্রসঙ্গে জেলা প্রশাসক মানিকগঞ্জ বরাবর স্বারকলিপি প্রদান প্রসঙ্গে",
    link: "https://drive.google.com/file/d/1miOSJvp4Vugf3JLnKJamfptocC05AfTC/view?usp=sharing",
  },
  // You can add more notices here
];

// Function to get the latest notice
const getLastNotice = () => {
  return notices[notices.length - 1];
};

const NoticeSection = () => {
  const lastNotice = getLastNotice();

  return (
    <div className="max-w-md lg:w-[75%]  mx-auto bg-white shadow-lg rounded-lg p-6 mt-10">
      {/* Scrolling Latest Notice Banner */}
      <div className="bg-blue-100 p-4 rounded mb-4 overflow-hidden">
        <div className="flex items-center space-x-2">
          <span
            className="iconify text-blue-600"
            data-icon="mdi:alert"
            data-width="24"
          ></span>
          <div className="w-full overflow-hidden">
            <p className="whitespace-nowrap animate-scroll text-red-600 font-semibold text-lg">
              {lastNotice.title}
            </p>
          </div>
        </div>
      </div>

      {/* All Notices Table */}
      <h2 className="text-2xl text-center font-bold text-gray-700 flex items-center mb-4">
        <p>নোটিশ</p>
        <p>
          <Icon
            icon="lucide:bell-ring"
            width="50"
            height="50"
            style={{ color: "#59d317" }}
          />
        </p>
      </h2>

      {/* Notice Table */}
      <table className="min-w-full lg:w-[75%] mx-auto bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="py-2 px-4 border-b">#</th>
            <th className="py-2 px-4 border-b">নোটিশ</th>
          </tr>
        </thead>
        <tbody>
          {notices.map((notice) => (
            <tr
              key={notice.id}
              className="hover:bg-gray-50 transition duration-200"
            >
              <td className="py-2 px-4 border-b text-center">
                <Icon icon="bx:right-arrow" style={{ color: "#d31717" }} />
              </td>
              <td className="py-2 px-4 border-b">
                <a
                  href={notice.link}
                  className="flex items-center text-blue-600 hover:text-blue-800 text-lg font-semibold transition duration-200"
                >
                  {notice.title}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NoticeSection;
