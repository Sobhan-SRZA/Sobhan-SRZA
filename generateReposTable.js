import fs from 'fs';

async function generateMarkdownTable(repos, imagesPath) {
  let table = '| 🔢 | 🗃 Projects | 📖 Describe | 📡 Status | 🔐 Access | 🌎 Language | ⚙️ Technology | ⭐ Stars | 🖨 Forks |\n';
  table += '| ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- |\n';

  let count = 0;
  repos?.forEach((repo) => {
    const access = repo.private ? '🔒 Private' : '🌐 Public';
    const langBadges = repo.languages
      ? repo.languages.map(a => {
        const language = encodeURIComponent(a);
        return `![Used ${language}](${imagesPath}/${language.toLowerCase()}.svg)`
      }).join(" ")
      : '`none`';

    const techBadges = repo.technologies
      ? repo.technologies.map(a => {
        const technology = encodeURIComponent(a);
        return `![Used ${technology}](${imagesPath}/${technology.toLowerCase()}.svg)`
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
    const markdownTable = await generateMarkdownTable(repos, "images");
    fs.writeFileSync('REPOSITORIES.md', markdownTable);
    const persianCaesarMarkdownTable = await generateMarkdownTable(repos.filter(a => a.organization === "Persian-Caesar"), "https://github.com/Sobhan-SRZA/Sobhan-SRZA/blob/main/images");
    fs.writeFileSync('PC_REPOSITORIES.md', persianCaesarMarkdownTable);
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
