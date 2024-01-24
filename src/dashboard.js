const fs = require('fs');

document.addEventListener('DOMContentLoaded', function() { 

    fs.readFile('data/data.json', 'utf-8', (err, data) => {
        if (err) {
            console.error('Erro ao ler o arquivo data.json: ', err);
            return;
        }

        const REPOS_DATA = JSON.parse(data);
        const REPOS_DIV = document.getElementById('repos');

        // Criando uma div no html para exibir a imagem de avatar do usuário
        const AVATAR_URL = "https://avatars.githubusercontent.com/u/128730767?v=4";
        const REPOS_AVATAR = document.createElement('div');
    
        REPOS_AVATAR.innerHTML = `<a target="_blank" href="https://github.com/ofelipelucca"><img id="user-avatar" src="${AVATAR_URL}" alt="Foto de Perfil"></a>`;
    
        REPOS_DIV.appendChild(REPOS_AVATAR);
    
        // Criando uma div no html para conter a lista de repositórios
        const REPOS_LIST = document.createElement('div');
        REPOS_LIST.classList.add('repos-list');
    
        REPOS_DIV.appendChild(REPOS_LIST);
    
        // Ordenando todos os repositórios por data de criação
    
        // Itera sobre cada repositório salvo e cria um elemento div para exibir as informações
        REPOS.forEach(repo => {
    
            const FAVICON_URL = `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${repoData.name}/main/favicon.ico`;
    
            const CREATED_AT = new Date(REPOS_DATA.created_at);
            const FORM_DATA = `${createdAt.getDate()}/${createdAt.getMonth() + 1}/${createdAt.getFullYear()}`;
    
            const REPOS_ELEMENT = document.createElement('div');
            REPOS_ELEMENT.innerHTML = `<img id="repositorios-img" src="${FAVICON_URL}" alt="favicon"><span id="repositorios-link">${repo.name}</span><p class="repositorios-descricao">${REPOS_DATA.description}</p><p id="repositorios-data">${FORM_DATA}</p><p id="repositorios-obs">clique para acessar</p>`;
            REPOS_ELEMENT.setAttribute("id", "repositorios-post");
            REPOS_ELEMENT.classList.add("repositorios-post"); 
            REPOS_LIST.appendChild(REPOS_ELEMENT);
            REPOS_ELEMENT.addEventListener('click', function() {
    
                // Abre a nova aba com o link do repositório
                window.open(`https://${GITHUB_USERNAME}.github.io/${repo.name}/`); 
            })
        })

    })
    
});