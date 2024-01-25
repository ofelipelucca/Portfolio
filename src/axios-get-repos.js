const GITHUB_TOKEN = secrets.TOKEN_GITHUB;
const GITHUB_USERNAME = secrets.USERNAME_GITHUB;

const fs = require('fs');
const axios = require('axios');

// Fazendo a requisição das informações de todos os meus repositórios públicos
axios.get(`https://api.github.com/users/${GITHUB_USERNAME}/repos?type=all&sort=updated&direction=desc`, {
    headers: {
        'Authorization': `token ${GITHUB_TOKEN}`
    }
})
.then(response => {

    // Obtendo os dados da resposta
    const AXIOS_DATA = response.data;
    
    // Filtrando os dados por segurança
    const FILTERED_DATA = AXIOS_DATA.map(repo => ({
        name: repo.name,
        description: repo.description,
        created_at: repo.created_at,
        updated_at: repo.updated_at,
        stargazers_count: repo.stargazers_count,
        language: repo.language
    }));

    // Convertendo os dados para formato JSON
    const JSON_DATA = JSON.stringify(FILTERED_DATA, null, 2);

    // Armazenando os dados em um arquivo JSON 
    fs.writeFile('data/data.json', JSON_DATA, 'utf8', (err) => {
        if (err) {
            console.error('Erro ao escrever no arquivo:', err);
        } else {
            console.log('Os dados foram armazenados em dados.json com sucesso!');
        }
    });
})
.catch(error => {
    console.error('Erro na requisição pelo axios: ', error);
});