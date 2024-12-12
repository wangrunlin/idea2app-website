type OpenSourceProject = {
  id: string;
  name: string;
  description: string;
  stargazers_count: number;
  updated_at: string;
  html_url: string;
};

export default async function OpenSourceList({
  user = "idea2app",
  limit = 1000,
  displayCount = 0,
  showDescription = true,
  sortByStars = false,
}) {
  const response = await fetch(
    `https://api.github.com/users/${user}/repos?sort=stars&direction=desc&per_page=${limit}`,
    {
      next: { tags: [user] },
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    if (
      errorData.message &&
      errorData.message.includes("API rate limit exceeded")
    ) {
      return <div>API 速率限制已超出，请稍后再试或使用身份验证请求。</div>;
    }
    // 处理其他错误
    return <div>发生错误: {errorData.message}</div>;
  }

  const openSourceProjects: OpenSourceProject[] = await response.json();

  let projectsToShow = openSourceProjects.sort((a, b) =>
    b.updated_at.localeCompare(a.updated_at)
  );

  if (sortByStars) {
    projectsToShow = projectsToShow.sort(
      (a, b) => b.stargazers_count - a.stargazers_count
    );
  }

  if (displayCount > 0) {
    projectsToShow = projectsToShow.slice(0, displayCount);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {projectsToShow.map((project) => (
        <div
          key={project.id}
          className="card bg-white shadow-md rounded-lg p-4 m-4 hover:shadow-lg transition-shadow duration-300"
        >
          <h3 className="text-xl font-semibold text-gray-800">
            {project.name}
          </h3>
          {showDescription && (
            <p className="text-gray-600">{project.description}</p>
          )}
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
