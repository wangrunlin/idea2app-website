import TeamMember from "@/components/TeamMember";

export default async function Team() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center py-4 my-4">团队成员</h2>

      <div className="max-w-screen-lg mx-auto">
        <TeamMember />
      </div>

      <div className="max-w-screen-lg mx-auto p-4 my-8 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
        <p className="text-lg text-gray-800 dark:text-gray-200 mb-2 text-center">
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
