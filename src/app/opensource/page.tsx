type OpenSourceProject = {
  id: string;
  name: string;
  description: string;
  stargazers_count: number;
  updated_at: string;
  html_url: string;
};

export default async function OpenSourceProjects() {
  const response = await fetch(
    "https://api.github.com/users/idea2app/repos?sort=stars&direction=desc"
  );
  const openSourceProjects: OpenSourceProject[] = await response.json();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {openSourceProjects
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .sort((a, b) => b.updated_at.localeCompare(a.updated_at))
        .map((project) => (
          <div
            key={project.id}
            className="card bg-white shadow-md rounded-lg p-4 m-4 hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-800">
              {project.name}
            </h3>
            <p className="text-gray-600">{project.description}</p>
            <p className="text-gray-500">Stars: {project.stargazers_count}</p>
            <p className="text-gray-500">
              Last Updated: {new Date(project.updated_at).toLocaleDateString()}
            </p>
            <a
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition-colors duration-300"
            >
              View on GitHub
            </a>
          </div>
        ))}
    </div>
  );
}
