function loadJSONDATA(callback) {
    fetch('https://raw.githubusercontent.com/ofelipelucca/portifolio/main/data/repositorios-data.json')
    .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao carregar JSON: ' + response.status);
        }
        return response.json();
    })
    .then(data => callback(data))
    .catch(error => console.error(error));
}

function init(data) {
    const REPOS_DATA = data;
    const REPOS_DIV = document.getElementById('repos');
    
    // Criando uma div no html para exibir a imagem de avatar do usuário
    const AVATAR_URL = "https://avatars.githubusercontent.com/u/128730767?v=4";
    const REPOS_AVATAR = document.createElement('div');
    
    REPOS_AVATAR.innerHTML = `<a target="_blank" href="https://github.com/ofelipelucca"><img id="user-avatar" src="${AVATAR_URL}" alt="Foto de Perfil"></a>`;
    
    REPOS_DIV.appendChild(REPOS_AVATAR);
    
    // Criando uma div no html para conter o dashboard com os repositórios
    const REPOS_LIST = document.createElement('div');
    REPOS_LIST.classList.add('repos-list');
    let isDragging = false;
    let startX, scrollLeft;
    REPOS_DIV.appendChild(REPOS_LIST);

    // Ordenando os repositórios por data de criação (do mais recente para o mais antigo)
    const REPOS = REPOS_DATA.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    
    // Itera sobre cada repositório salvo e cria um elemento div para exibir as informações em formato de post
    REPOS.forEach(repo => {
    
        const FAVICON_URL = `https://raw.githubusercontent.com/ofelipelucca/${repo.name}/main/favicon.ico`;
    
        const CREATED_AT = new Date(repo.created_at);
        const FORM_DATA = `${CREATED_AT.getDate()}/${CREATED_AT.getMonth() + 1}/${CREATED_AT.getFullYear()}`;

        const FORM_NAME = repo.name.replace(/-/g, ' ');
    
        const REPOS_ELEMENT = document.createElement('div');
        REPOS_ELEMENT.innerHTML = `<a target="_blank" href="https://github.com/ofelipelucca/${repo.name}/"><img id="repositorios-img" src="${FAVICON_URL}" alt="favicon"><span id="repositorios-link">${FORM_NAME}</span><p class="repositorios-descricao">${repo.description}</p><p id="repositorios-data">${FORM_DATA}</p><p id="repositorios-obs">clique para acessar</p></a>`;
        REPOS_ELEMENT.setAttribute("id", "repositorios-post");
        REPOS_ELEMENT.classList.add("repositorios-post"); 
        REPOS_LIST.appendChild(REPOS_ELEMENT);
    });

    // Adicionando a função de 'drag' para scrollar o dashboard
    REPOS_DIV.addEventListener('mousedown', function(e) {
      isDragging = true;
      startX = e.pageX - REPOS_DIV.offsetLeft;
      scrollLeft = REPOS_DIV.scrollLeft;
    });

    document.addEventListener('mouseup', function() {
      isDragging = false;
    });

    document.addEventListener('mousemove', function(e) {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - REPOS_DIV.offsetLeft;
      const walk = (x - startX) * 0.7;
      REPOS_DIV.scrollLeft = scrollLeft - walk;
    });
}

loadJSONDATA(init);