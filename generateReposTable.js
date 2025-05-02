import fetch from 'node-fetch';
import fs from 'fs';

const GITHUB_USERNAME = process.env.GITHUB_USERNAME || 'YOUR_GITHUB_USERNAME';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || 'YOUR_GITHUB_TOKEN';

async function fetchRepos(username) {
  const repos = [];
  let page = 1;
  const perPage = 100;
  let fetchedData = [];

  do {
    const apiUrl = `https://api.github.com/users/${username}/repos?per_page=${perPage}&page=${page}`;
    const response = await fetch(apiUrl, {
      headers: {
        'Authorization': `token ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    });

    if (!response.ok) {
      console.error(`fetch error: ${response.status} ${response.statusText}`);
      break;
    }

    fetchedData = await response.json();
    repos.push(...fetchedData);
    console.log(fetchedData);
    page++;
  } while (fetchedData.length === perPage);

  return repos;
}

async function generateMarkdownTable(repos) {
  let table = '| 🔢 | 🗃 Projects | 📖 Describe | 📡 Status | 🔐 Access | 🌎 Language | ⚙️ Technology | ⭐ Stars | 🖨 Forks |\n';
  table += '| ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- |\n';

  let count = 0;
  repos?.forEach((repo) => {
    const access = repo.private ? '🔒 Private' : '🌐 Public';
    const langBadges = repo.languages
      ? repo.languages.map(a => {
        const language = encodeURIComponent(a);
        return `![Used ${language}](images/${language.toLowerCase()}.svg)`
      }).join(" ")
      : '`none`';

    const techBadges = repo.technologies
      ? repo.technologies.map(a => {
        const technology = encodeURIComponent(a);
        return `![Used ${technology}](images/${technology.toLowerCase()}.svg)`
      }).join(" ")
      : '`none`';

    const starsBadge = repo.private ? '`none`' : `![Stars](https://img.shields.io/github/stars/${repo.organization ?? repo.owner}/${repo.name}?style=flat-square)`;
    const forksBadge = repo.private ? '`none`' : `![Forks](https://img.shields.io/github/forks/${repo.organization ?? repo.owner}/${repo.name}?style=flat-square)`;

    table += `| ${++count} | [${repo.name}](${repo.url}) | \`${repo.description}\` | **${repo.status}** | **${access}** | ${langBadges} | ${techBadges} | ${starsBadge} | ${forksBadge} |\n`;
  });

  return table;
}

async function main() {
  try {
    // const repos = await fetchRepos(GITHUB_USERNAME);
    const repos = JSON.parse(fs.readFileSync("./projects.json"));
    console.log(`repositorise size: ${repos.length}`);
    const markdownTable = await generateMarkdownTable(repos);
    fs.writeFileSync('REPOSITORIES.md', markdownTable);
    console.log('REPOSITORIES.md has successfully created.');
  } catch (error) {
    console.error('get an error:', error);
  }
}

void main();
/**
 * @copyright
 * Code by Sobhan-SRZA (mr.sinre) | https://github.com/Sobhan-SRZA
 * Developed for Persian Caesar | https://github.com/Persian-Caesar | https://dsc.gg/persian-caesar
 *
 * If you encounter any issues or need assistance with this code,
 * please make sure to credit "Persian Caesar" in your documentation or communications.
 */
