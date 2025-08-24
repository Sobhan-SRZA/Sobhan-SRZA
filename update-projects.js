import { Octokit } from "@octokit/rest";
import fetch from "node-fetch";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const REPO_OWNER = "Sobhan-SRZA";
const REPO_NAME = "Sobhan-SRZA";
const FILE_PATH = "projects.json";
const UPDATE_INTERVAL = 10 * 60 * 1000;

const octokit = new Octokit({ auth: GITHUB_TOKEN });

const getRepositoryData = async (organization, repository) => {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${organization}/${repository}`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "Awesome-Octocat-App",
          Authorization: `Bearer ${GITHUB_TOKEN}`
        }
      }
    );
    if (!response.ok) {
      console.warn(`Failed to fetch repo data for ${organization}/${repository}`);
      return { stars: 0, forks: 0 };
    }

    const data = await response.json();
    return {
      stars: data.stargazers_count || 0,
      forks: data.forks_count || 0,
    };
  }

  catch (error) {
    console.warn(`Error fetching repo data for ${organization}/${repository}:`, error.message);
    return { stars: 0, forks: 0 };
  }
};

const getProjectsFile = async () => {
  try {
    const { data } = await octokit.repos.getContent({
      owner: REPO_OWNER,
      repo: REPO_NAME,
      path: FILE_PATH,
    });
    const content = Buffer.from(data.content, "base64").toString("utf-8");

    return { projects: JSON.parse(content), sha: data.sha };
  }

  catch (error) {
    console.error(`Error fetching ${FILE_PATH}:`, error.message);
    throw error;
  }
};

const updateProjectsFile = async (projects, sha) => {
  try {
    await octokit.repos.createOrUpdateFileContents({
      owner: REPO_OWNER,
      repo: REPO_NAME,
      path: FILE_PATH,
      message: `Update stars and forks in ${FILE_PATH} at ${new Date().toISOString()}`,
      content: Buffer.from(JSON.stringify(projects, null, 2)).toString("base64"),
      sha
    });

    console.log(`Successfully updated ${FILE_PATH}`);
  }

  catch (error) {
    console.error(`Error updating ${FILE_PATH}:`, error.message);
    throw error;
  }
};

const updateProjects = async () => {
  console.log(`Starting update at ${new Date().toISOString()}`);
  try {
    const { projects, sha } = await getProjectsFile();

    const updatedProjects = [];
    for (const project of projects) {
      if (project.private) {
        updatedProjects.push({
          ...project,
          stars: 0,
          forks: 0
        });

        continue;
      }

      const repoData = await getRepositoryData(project.organization || REPO_OWNER, project.name);
      updatedProjects.push({
        ...project,
        stars: repoData.stars,
        forks: repoData.forks
      });

      await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    await updateProjectsFile(updatedProjects, sha);
  }

  catch (error) {
    console.error("Update failed:", error.message);
  }
};

updateProjects();