const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;

const fs = require('fs');
const axios = require('axios');

const fetchRepositories = async () => {
  try {
    const response = await axios.get(`https://api.github.com/users/${GITHUB_USERNAME}/repos?type=all&sort=updated&direction=desc`, {
      headers: {
        'Authorization': `token ${GITHUB_TOKEN}`,
        'Cache-Control': 'no-cache'
      }
    });

    const existingProjects = loadExistingProjects('data/projectsData.json');

    const allProjects = [...existingProjects, ...existingProjects];

    saveToFile('data/projectsData.json', allProjects);

  } catch (error) {
    console.error('Erro na requisição ou ao processar dados:', error);
  }
};

const loadExistingProjects = (filename) => {
  try {
    const jsonData = fs.readFileSync(filename, 'utf8');
    return JSON.parse(jsonData) || [];
  } catch (err) {
    console.error('Erro ao ler o arquivo:', err);
    return [];
  }
};

const processRepositoryData = (data, existingProjects) => {
  const existingRepoNames = new Set(existingProjects.map(project => project.name));

  return data
    .filter(repo => !existingRepoNames.has(repo.name)) 
    .map(repo => ({
      name: repo.name,
      description: repo.description,
      createdAt: repo.created_at,
      updatedAt: repo.updated_at,
      stargazersCount: repo.stargazers_count,
      language: repo.language,
      public: true,
      image: null
    }));
};

const saveToFile = (filename, data) => {
  const jsonData = JSON.stringify(data, null, 2);

  fs.writeFile(filename, jsonData, 'utf8', (err) => {
    if (err) {
      console.error('Erro ao escrever no arquivo:', err);
    } else {
      console.log(`Os dados foram armazenados em ${filename} com sucesso!`);
    }
  });
};

fetchRepositories();