import { description, siteName, title } from "@/config";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto p-4 my-8 h-[50vh] flex flex-col justify-center items-center">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
        {description}
      </p>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md mb-6">
        <p className="text-lg text-gray-800 dark:text-gray-200">
          {siteName}{" "}
          是一家专注于全行业信息化转型解决方案的公司。我们致力于将您的创意转化为现实，帮助您的企业实现数字化转型。
        </p>
      </div>
      <div className="mt-6">
        <p className="text-sm text-gray-500">
          阅读更多：
          <span className="inline-block mr-1">➡️</span>
          <a
            href="https://idea2app.feishu.cn/wiki/PIJkwOSAticc1QknDrPcsr2ZnRe?from=from_copylink"
            target="_blank"
            className="text-blue-600 hover:text-blue-700 font-semibold transition duration-200 ease-in-out"
          >
            idea2app 公司简介
          </a>
        </p>
        <p className="text-sm text-gray-500 mt-2">
          加入我们：
          <span className="inline-block mr-1">💼</span>
          <a
            href="https://idea2app.feishu.cn/wiki/FNoSw6JgIiROHrkgUsVcrw5mnkg?from=from_copylink"
            target="_blank"
            className="text-blue-600 hover:text-blue-700 font-semibold transition duration-200 ease-in-out"
          >
            招贤纳士
          </a>
        </p>
      </div>
    </div>
  );
}
