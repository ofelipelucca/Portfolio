document.addEventListener('DOMContentLoaded', function() { 
    
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
});