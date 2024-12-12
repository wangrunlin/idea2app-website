import { getTableList } from "@/app/utils/api";

type Project = {
  Id: string;
  name: string;
};

export default async function ProjectList() {
  const result = await getTableList<Project[]>(
    process.env.NEXT_PUBLIC_NOCODB_PROJECTS_TABLE || "",
    ["projects"]
  );

  return (
    <div>
      {result.map(({ Id, name }) => (
        <div key={Id}>{name}</div>
      ))}
    </div>
  );
}
