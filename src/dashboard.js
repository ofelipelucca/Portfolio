const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

axios.get(`https://api.github.com/users/${GITHUB_USERNAME}/repos?type=all&sort=updated&direction=desc`, {
  headers: {
    'Authorization': `token ${GITHUB_TOKEN}`
  }
})
.then(response => {
  const repos = response.data;
  const reposDiv = document.getElementById('repos');

  // Cria um elemento div para exibir a imagem do avatar do usuário
  const avatarUrl = "https://avatars.githubusercontent.com/u/128730767?v=4";
  const repoAvatar = document.createElement('div');
  repoAvatar.innerHTML = `<a target="_blank" href="https://github.com/ofelipelucca"><img id="user-avatar" src="${avatarUrl}" alt="user_avatar"></a>`;
  reposDiv.appendChild(repoAvatar);

  // Cria um elemento div para conter a lista de repositórios
  const reposList = document.createElement('div');
  reposList.classList.add('repos-list');
  reposDiv.appendChild(reposList);

  // Ordena os repositórios por data de criação
  repos.sort((a, b) => {
    return new Date(b.created_at) - new Date(a.created_at);
  });

  // Itera sobre cada repositório retornado pela API e cria um elemento div para exibir as informações do repositório
  repos.forEach(repo => {
    // Faz uma requisição à API do Github para obter informações detalhadas do repositório
    axios.get(repo.url, {
      headers: {
        'Authorization': `token ${GITHUB_TOKEN}`
      }
    })
    .then(response => {
      const repoData = response.data;
      const faviconUrl = `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${repoData.name}/main/favicon.ico`;
  
      const createdAt = new Date(repoData.created_at);
      const formData = `${createdAt.getDate()}/${createdAt.getMonth() + 1}/${createdAt.getFullYear()}`;
  
      const repoElement = document.createElement('div');
      repoElement.innerHTML = `<img id="repositorios-img" src="${faviconUrl}" alt="favicon"><span id="repositorios-link">${repo.name}</span><p class="repositorios-descricao">${repoData.description}</p><p id="repositorios-data">${formData}</p><p id="repositorios-obs">clique para acessar</p>`;
      repoElement.setAttribute("id","repositorios-post");
      repoElement.classList.add("repositorios-post"); // Adiciona a classe "repositorios-post" à div
      reposList.appendChild(repoElement);
      repoElement.addEventListener('click', function() { // Adiciona o evento de clique individualmente a cada div
        window.open(`https://${GITHUB_USERNAME}.github.io/${repo.name}/`); // Abre a nova aba com o link do repositório
      })
    })
    .catch(error => {
      console.error(error);
    });
  });
})
.catch(error => {
  console.error(error);
});
