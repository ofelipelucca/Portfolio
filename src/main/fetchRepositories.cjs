const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;

if (!GITHUB_TOKEN || !GITHUB_USERNAME) {
  console.error("GITHUB_TOKEN ou GITHUB_USERNAME não definidos.");
  process.exit(1);
}

const fs = require('fs');
const axios = require('axios');

const fetchRepositories = async () => {
  try {
    const response = await axios.get(`https://api.github.com/users/${GITHUB_USERNAME}/repos?type=all&sort=updated&direction=desc`, {
      headers: {
        'Authorization': `token ${GITHUB_TOKEN}`
      }
    });

    const publicProjects = processRepositoryData(response.data);
    const privateProjects = loadExistingProjects('../../public/data/privateProjectsData.json');
    const allProjects = [...publicProjects, ...privateProjects];

    saveToFile('../../public/data/projectsData.json', allProjects);
  } catch (error) {
    console.error('Erro ao buscar repositórios do GitHub:', error.response?.status, error.response?.data || error.message);
  }
};

const loadExistingProjects = (filename) => {
  try {
    const jsonData = fs.readFileSync(filename, 'utf8');
    return JSON.parse(jsonData);
  } catch (err) {
    console.error(`Erro ao processar ${filename}:`, err);
    return [];
  }
};

const processRepositoryData = (data) => {
  return data
    .map(repo => ({
      name: repo.name,
      description: repo.description,
      createdAt: repo.created_at,
      updatedAt: repo.updated_at,
      stargazersCount: repo.stargazers_count,
      language: repo.language,
      public: true,
      image: `assets/project-images/${repo.name}.jpg`
    }));
};

const saveToFile = (filename, data) => {
  const jsonData = JSON.stringify(data, null, 2);

  fs.writeFile(filename, jsonData, 'utf8', (err) => {
    if (err) {
      console.error(`Erro ao escrever no arquivo ${filename}:`, err);
      return;
    }

    console.log(`Os dados foram armazenados em ${filename} com sucesso!`);
  });
};

fetchRepositories();