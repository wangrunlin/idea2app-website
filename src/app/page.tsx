import OpenSourceList from "@/components/OpenSourceList";
import PartnerList from "@/components/PartnerList";
import ProjectList from "@/components/ProjectList";
import TeamMember from "@/components/TeamMember";
import { title, description } from "@/config";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto p-4 my-8 space-y-12">
      <header className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          {title}
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          {description}
        </p>
      </header>

      <section className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          近期项目
        </h2>
        <ProjectList displayCount={6} />
        <div className="text-center mt-6">
          <Link
            href="/projects"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
          >
            查看更多项目
          </Link>
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          菁英团队
        </h2>
        <TeamMember onlyFullTime={true} showSummary={false} />
        <div className="text-center mt-6">
          <Link
            href="/team"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
          >
            查看更多团队成员
          </Link>
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          开源项目
        </h2>
        <OpenSourceList
          displayCount={6}
          showDescription={false}
          sortByStars={true}
        />
        <div className="text-center mt-6">
          <Link
            href="/opensource"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
          >
            查看更多开源项目
          </Link>
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          合作伙伴
        </h2>

        <PartnerList />
      </section>
    </div>
  );
}
