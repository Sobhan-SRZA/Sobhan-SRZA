const fs = require('fs');

// تنظیم نام کاربری گیت‌هاب و توکن (برای افزایش نرخ درخواست یا دسترسی به مخازن خصوصی)
const GITHUB_USERNAME = 'YOUR_GITHUB_USERNAME';
// اگر به مخازن خصوصی نیاز دارید، توکن را در متغیر GITHUB_TOKEN وارد کنید.
// همچنین می‌توانید توکن را از طریق متغیر محیطی (process.env.GITHUB_TOKEN) دریافت کنید.
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || 'YOUR_GITHUB_TOKEN';

// تابعی برای فراخوانی API و دریافت لیست مخازن (با پشتیبانی از صفحه‌بندی)
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
      console.error(`خطا در دریافت داده‌ها: ${response.status} ${response.statusText}`);
      break;
    }

    fetchedData = await response.json();
    repos.push(...fetchedData);
    page++;
  } while (fetchedData.length === perPage);

  return repos;
}

// تابعی برای تولید جدول مارک‌داون از لیست مخازن
function generateMarkdownTable(repos) {
  // اضافه کردن سربرگ جدول
  let table = '| 🗃 Projects | 📡 Status | ⚙️ Technology | ⭐ Stars | 🖨 Forks |\n';
  table += '| ----------- | ----------- | ----------- | ----------- | ----------- |\n';

  repos.forEach((repo) => {
    // وضعیت مخزن: اگر خصوصی باشد، آیکون قفل و اگر عمومی باشد، آیکون کره (همچنین می‌توانید به دلخواه تنظیم کنید)
    const status = repo.private ? '🔒 Private' : '🌐 Public';

    // تولید بنر تکنولوژی: در اینجا از زبان اصلی استفاده می‌کنیم؛ در صورت تمایل، می‌توانید بسته به پروژه چندین بنر دلخواه اضافه کنید
    const techBadge = repo.language
      ? `![${repo.language}](https://img.shields.io/badge/-${encodeURIComponent(repo.language)}-blue?style=flat-square)`
      : '';

    // تولید بنرهای Stars و Forks (اینها از سرویس shields.io دریافت می‌شوند)
    const starsBadge = `![Stars](https://img.shields.io/github/stars/${GITHUB_USERNAME}/${repo.name}?style=flat-square)`;
    const forksBadge = `![Forks](https://img.shields.io/github/forks/${GITHUB_USERNAME}/${repo.name}?style=flat-square)`;

    // اضافه کردن سطر به جدول: لینک به مخزن به همراه سایر اطلاعات
    table += `| [${repo.name}](${repo.html_url}) | **${status}** | ${techBadge} | ${starsBadge} | ${forksBadge} |\n`;
  });

  return table;
}

// تابع اصلی: دریافت مخازن، ایجاد جدول و ذخیره در فایل
async function main() {
  try {
    const repos = await fetchRepos(GITHUB_USERNAME);
    console.log(`تعداد مخازن دریافت‌شده: ${repos.length}`);
    const markdownTable = generateMarkdownTable(repos);
    fs.writeFileSync('REPOSITORIES.md', markdownTable);
    console.log('فایل REPOSITORIES.md با موفقیت تولید شد.');
  } catch (error) {
    console.error('خطایی رخ داده است:', error);
  }
}

main();
