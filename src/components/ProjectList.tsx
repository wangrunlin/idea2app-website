import { getTableList } from "@/app/utils/api";

type Project = {
  Id: number;
  name: string;
  type: string;
  workForm: string;
  leader: string;
  members: string;
  price: number;
  startDate: string;
  定金收款日: string | null;
  settlementDate: string | null;
  remark: string | null;
  image: string | null;
  openSource: string | null;
  link: string | null;
};

export default async function ProjectList({ displayCount = 0 }) {
  const projects = (
    await getTableList<Project[]>(
      process.env.NEXT_PUBLIC_NOCODB_PROJECTS_TABLE || ""
    )
  )
    .filter(({ startDate }) => !!startDate)
    .filter(({ 定金收款日 }) => !!定金收款日);

  const projectsToShow =
    displayCount === 0 ? projects : projects.slice(0, displayCount);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projectsToShow.map(({ Id, name, type, workForm, leader, members }) => (
        <div
          key={Id}
          className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
        >
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
            <div className="text-sm text-gray-600 space-y-1">
              <p>
                <span className="font-medium">类型:</span> {type}
              </p>
              <p>
                <span className="font-medium">工作形式:</span> {workForm}
              </p>
              <p>
                <span className="font-medium">负责人:</span> {leader}
              </p>
              <p>
                <span className="font-medium">团队成员:</span> {members}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
