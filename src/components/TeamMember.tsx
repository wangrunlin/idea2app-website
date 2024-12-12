import Image from "next/image";
import { getTableList } from "@/utils/api";

type Stuff = {
  Id: string;
  github: string;
  joinedAt: string;
  nickname: string;
  position: string;
  summary: string;
  type: string;
};

export default async function TeamMember({
  onlyFullTime = false,
  showSummary = true,
}) {
  if (!process.env.NEXT_PUBLIC_NOCODB_TEAM_TABLE) {
    return null;
  }

  const teamMembers = await getTableList<Stuff[]>(
    process.env.NEXT_PUBLIC_NOCODB_TEAM_TABLE
  );

  const sortedActiveMembers = teamMembers
    .filter(({ joinedAt }) => !!joinedAt)
    .filter(({ type }) => !onlyFullTime || type === "全职")
    .sort(
      (a, b) => new Date(a.joinedAt).getTime() - new Date(b.joinedAt).getTime()
    );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {sortedActiveMembers.map(
        ({ Id, nickname, position, github, type, summary, joinedAt }) => (
          <div
            key={Id}
            className="bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105"
          >
            <h2 className="text-xl font-semibold flex items-center justify-between">
              <span className="text-gray-500">{nickname}</span>
              <span className="text-gray-500">
                <Image
                  className="rounded-full"
                  src={`https://github.com/${github}.png`}
                  alt={nickname}
                  width={32}
                  height={32}
                />
              </span>
            </h2>
            <p className="text-gray-700">{position}</p>
            <p className="text-gray-700">{joinedAt}</p>
            <p className="text-gray-700">
              <a
                href={`https://github.com/${github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {github}
              </a>
            </p>
            <p className="text-gray-700">{type}</p>
            {showSummary && <p className="text-gray-700">{summary}</p>}
          </div>
        )
      )}
    </div>
  );
}
