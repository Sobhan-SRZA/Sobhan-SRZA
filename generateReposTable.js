import fs from 'fs';

function readme(repositorise) {
  const contactFile = fs.readFileSync("./contact.txt")
  return `
<div align='center'>
 <a href="https://srza.ir" target="_blank">
  <img src="images/welcome.svg" alt="Typing SVG">
 </a>
</div>

<h1 align="center">About Me</h1>

Hello my friend👋🏻, I am **Mr.Sinre** and my real name is **Sobhan**.

I am an ESFJ-A personality type. 
I hate proud and lying people and I hate this behavior myself.
I am not a very warm or cold person, but I communicate with everyone just like a normal person.

How did I get into coding? Well, my beginning goes back to 2021 when I was scrolling through YouTube, discovered Discord, and created an account. Soon after, I began experimenting by building bots for my server and quickly fell in love with programming.

---

<h1 align="center">My Journey</h1>

Hello, I'm Sobhan, also known as Mr.Sinre or sometimes Sobhan-SRZA.  
I was born on November 22, 2005, and as I write this in 2025, I'm 19 years and 5 months old.  
From a very early age, I have been passionate about coding — it's the activity I love most. Alongside programming, I enjoy watching movies, anime, and sports as well as reading books. In my free time, I engage in gaming and immerse myself in music while pondering about the future.

My journey in creating content started in 2018 under the name **S.R.Z.A**. Initially, I created videos on Aparat, and even though early success came without monetary gains, it motivated me to explore further opportunities — eventually leading me to experiment with Instagram and YouTube. I dived into the world of Discord, learning about server configurations and bot development.  

I began by creating a Python bot, which fascinated me as I could see my code changes in action immediately. Over time, I expanded my skills to include JavaScript and other languages while building various Discord bots for music, moderation, and other utilities. I even ventured into projects that mixed gaming content with bot functionalities — each step further fueling my passion for programming.

> Despite facing academic challenges and a few setbacks, my persistent drive pushed me to keep learning and evolving. Today, I actively work on projects like [**HyCom**](https://hycom.ir/), [**Ticker Boy**](https://discord.com/oauth2/authorize?client_id=1241112292616044695
) [\`source code\`](https://github.com/Persian-Caesar/Ticker-Boy), [**DJ Boy**](https://discord.com/oauth2/authorize?client_id=1240775406454312961
) [\`source code\`](https://github.com/Persian-Caesar/DJ-Boy), and [**Padio**](https://discord.com/oauth2/authorize?client_id=1282618377654898731) [\`source code\`](https://github.com/Persian-Caesar/Radio-Bot), all reflecting my ongoing journey in the world of coding and digital content creation.

---

<h1 align="center">Repositories</h1>
<div align="center">

${repositorise}                                                                                                        |

</div>

---

<h1 align="center">Coding Activity</h1>

<div align="center">
  <div align="center">
    <div>
      <a href="https://github.com/Sobhan-SRZA?tab=followers" target="_blank">
         <img src="https://img.shields.io/github/followers/Sobhan-SRZA?logo=github&style=for-the-badge">
      </a>
      <a href="https://github.com/Sobhan-SRZA/" target="_blank">
         <img src="https://img.shields.io/github/stars/Sobhan-SRZA?logo=github&style=for-the-badge">
      </a>
      <a href="https://github.com/Sobhan-SRZA/" target="_blank">
         <img src="https://komarev.com/ghpvc/?username=Sobhan-SRZA&logo=github&style=for-the-badge">
      </a>
    </div>
    <div>
      <a href="https://www.youtube.com/@mr_sinre?app=desktop&sub_confirmation=1" target="_blank">
        <img src="https://img.shields.io/youtube/channel/subscribers/UCqDgeKYxedZMS1Gm2WNJ3qg?logo=youtube&logoColor=red&style=for-the-badge">
      </a>
      <a href="https://www.twitch.tv/sobhan_srza" target="_blank">
        <img src="https://img.shields.io/twitch/status/sobhan_srza?color=purple&logo=twitch&style=for-the-badge">
      </a>
      <a href="https://srza.ir" target="_blank">
        <img src="https://img.shields.io/website.svg?down_color=red&down_message=down&up_color=green&up_message=up&url=https://srza.ir&style=for-the-badge">
      </a>
     </div>
     <div>
      <a href="https://discord.com/invite/xh2S2h67UW" target="_blank">
        <img src="https://badgen.net/discord/members/xh2S2h67UW?style=for-the-badge">
      </a>
      <a href="https://discord.com/invite/54zDNTAymF" target="_blank">
        <img src="https://badgen.net/discord/members/54zDNTAymF?style=for-the-badge">
      </a>
    </div>
  </div>
  <div align="center">
    <div>
      <img alt="Top Languages" src="https://github-readme-stats.vercel.app/api/top-langs/?username=Sobhan-SRZA&langs_count=10&count_private=true&theme=react&hide_border=true&layout=compact&bg_color=0D1117" width = 30% />
    </div>
  </div>
</div>



<div align="center">
 <div align="center">
    <img src="https://streak-stats.demolab.com?user=Sobhan-SRZA&theme=black-ice&hide_border=true&border_radius=4.5&mode=weekly&card_width=495&card_height=195" alt="GitHub Streak" />
    <img alt="Github Stats" src="https://github-readme-stats.vercel.app/api?username=Sobhan-SRZA&show_icons=true&count_private=true&theme=react&hide_border=true&bg_color=0D1117" width = 40%>
 </div>
 <div align="center">
   <img alt="GitHub Trophies" src="https://github-profile-trophy.vercel.app/?username=Sobhan-SRZA&theme=react&no-frame=true&no-bg=true&margin-w=5" width = 70% />
 </div>
</div>

---

<div align="center">
 
# **Contact me in**
${contactFile}

---

<div align="center">
  <a href="https://github.com/Sobhan-SRZA">
    <img alt="Snake Animation" src="https://raw.githubusercontent.com/Sobhan-SRZA/Sobhan-SRZA/output/github-contribution-grid-snake-dark.svg"  />
  </a>
</div>
`;
}

async function generateMarkdownTable(repos, imagesPath) {
  let table = `| 🔢 | 🗃 Projects | 📖 Describe | 📡 Status | 🔐 Access | 🌎 Language | ⚙️ Technology | ⭐ Stars | 🖨 Forks |\n`;
  table += `| ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- |\n`;

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
    console.log(`check repositorise size: ${repos.length}`);

    const markdownTable = await generateMarkdownTable(repos, "images");
    fs.writeFileSync('REPOSITORIES.md', markdownTable);
    console.log("\n");
    console.log(`loaded repositorise size: ${repos.length}`);
    console.log('REPOSITORIES.md has successfully created.');
    
    fs.writeFileSync('README.md', readme(markdownTable));
    console.log("\n");
    console.log(`loaded repositorise size: ${repos.length}`);
    console.log('README.md has successfully created.');

    const persianCaesarMarkdownTable = await generateMarkdownTable(repos.filter(a => a.organization === "Persian-Caesar"), "https://raw.githubusercontent.com/Sobhan-SRZA/Sobhan-SRZA/4c697854a80e5e99324c04eb000f7d2cd53737ae/images/");
    fs.writeFileSync('PC_REPOSITORIES.md', persianCaesarMarkdownTable);
    console.log("\n");
    console.log(`loaded repositorise size: ${repos.filter(a => a.organization === "Persian-Caesar").length}`);
    console.log('PC_REPOSITORIES.md has successfully created.');
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
