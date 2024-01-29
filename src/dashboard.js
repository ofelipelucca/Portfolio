function loadJSONData(callback, urls) {
  // Carregando todos os arquivos JSON passados com URL
  const PROMISES_JSON = urls.map(url => 
      fetch(url)
          .then(response => {
              if (!response.ok) {
                  throw new Error(`Erro ao carregar JSON de ${url}: ${response.status}`);
              }
              return response.json();
          })
  );

  // Esperando a leitura de todos os arquivos JSON
  Promise.all(PROMISES_JSON)
      .then(DATA_ARRAY => {
          callback(DATA_ARRAY);
      })
      .catch(error => console.error(error));
}

const JSON_URLS = [
  'https://raw.githubusercontent.com/ofelipelucca/portifolio/main/data/repositorios-data.json',
  'https://raw.githubusercontent.com/ofelipelucca/portifolio/main/data/freelances-data.json'
];

loadJSONData(function(data) {
  const REPOS_DATA = Object.values(data).flat();

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

    // Fazendo o post de repositórios públicos
    if (repo.public) {
      const FAVICON_URL = `https://raw.githubusercontent.com/ofelipelucca/${repo.name}/main/favicon.ico`;

      const CREATED_AT = new Date(repo.created_at);
      const CREATED_FORM_DATE = `${CREATED_AT.getDate()}/${CREATED_AT.getMonth() + 1}/${CREATED_AT.getFullYear()}`;
      
      const UPDATED_AT = new Date(repo.updated_at);
      const UPDATED_FORM_DATE = `${UPDATED_AT.getDate()}/${UPDATED_AT.getMonth() + 1}/${UPDATED_AT.getFullYear()}`;
  
      const FORM_NAME = repo.name.replace(/-/g, ' ');
  
      const REPOS_ELEMENT = document.createElement('div');
      REPOS_ELEMENT.innerHTML = `<a target="_blank" href="https://github.com/ofelipelucca/${repo.name}/"><div style="width: 100%; height: 100%"><img id="repositorios-img" src="${FAVICON_URL}" alt="favicon"><span id="repositorios-link">${FORM_NAME}</span><p id="repositorios-descricao">${repo.description}</p><p id="repositorios-data">${CREATED_FORM_DATE}</p><p id="repositorios-obs">clique para acessar</p></div></a>`;
      REPOS_ELEMENT.setAttribute("id", "repositorios-post");
      REPOS_ELEMENT.classList.add("post"); 
      REPOS_LIST.appendChild(REPOS_ELEMENT);
    }

    // Fazendo post de projetos freelances que possuem link público
    else if (repo.has_link) {
      const CREATED_AT = new Date(repo.created_at);
      const CREATED_FORM_DATE = `${CREATED_AT.getDate()}/${CREATED_AT.getMonth() + 1}/${CREATED_AT.getFullYear()}`;

      const UPDATED_AT = new Date(repo.updated_at);
      const UPDATED_FORM_DATE = `${UPDATED_AT.getDate()}/${UPDATED_AT.getMonth() + 1}/${UPDATED_AT.getFullYear()}`;
  
      const FORM_NAME = repo.name.replace(/-/g, ' ');
  
      const REPOS_ELEMENT = document.createElement('div');
      REPOS_ELEMENT.innerHTML = `<a target="_blank" href="${repo.link}/"><div style="width: 100%; height: 100%"><span id="freelance-name">${FORM_NAME}</span><p id="repositorios-descricao" style="top: -1vh;">${repo.description}</p><p id="repositorios-data">${CREATED_FORM_DATE}</p><p id="repositorios-obs-public">clique para acessar</p></div></a>`;
      REPOS_ELEMENT.setAttribute("id", "freelances-public-post");
      REPOS_ELEMENT.classList.add("post"); 
      REPOS_LIST.appendChild(REPOS_ELEMENT);
    }

    // Fazendo post de projetos freelances que não possuem link público
    else {
      const CREATED_AT = new Date(repo.created_at);
      const CREATED_FORM_DATE = `${CREATED_AT.getDate()}/${CREATED_AT.getMonth() + 1}/${CREATED_AT.getFullYear()}`;

      const UPDATED_AT = new Date(repo.updated_at);
      const UPDATED_FORM_DATE = `${UPDATED_AT.getDate()}/${UPDATED_AT.getMonth() + 1}/${UPDATED_AT.getFullYear()}`;
  
      const FORM_NAME = repo.name.replace(/-/g, ' ');
  
      const REPOS_ELEMENT = document.createElement('div');
      REPOS_ELEMENT.innerHTML = `<span id="freelance-name">${FORM_NAME}</span><p id="repositorios-descricao" style="top: -1vh;">${repo.description}</p><p id="repositorios-data">${CREATED_FORM_DATE}</p>`;
      REPOS_ELEMENT.setAttribute("id", "freelances-private-post");
      REPOS_ELEMENT.classList.add("post"); 
      REPOS_LIST.appendChild(REPOS_ELEMENT);
    }
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
}, JSON_URLS);
