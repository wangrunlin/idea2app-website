import ProjectList from "@/components/ProjectList";

export default function Projects() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center py-4 my-4">项目</h2>
      <div className="max-w-screen-lg mx-auto">
        <ProjectList />
      </div>
    </div>
  );
}
