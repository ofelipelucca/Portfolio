# 🖥️ Dashboard de Repositórios

Este script em JavaScript utiliza o Axios para obter os meus repositórios públicos no GitHub e os exibe em um dashboard web.

## 👨‍💻 Estrutura do Código

- **Configuração:** O script começa importando as credenciais do GitHub de um arquivo de configuração (`config.js`).
- **Requisição à API do GitHub:** Utiliza o Axios para obter a lista de seus repositórios públicos.
- **Manipulação do DOM:** Cria elementos HTML dinamicamente para exibir informações sobre os repositórios em um formato de dashboard.
- **Ordenação e Detalhes:** Ordena os repositórios por data de criação e exibe detalhes, como nome, descrição e data de criação.
- **Evento de Clique:** Adiciona um evento de clique a cada repositório, abrindo o link do GitHub Pages correspondente ao repositório.

## 🔎 Uso

1. Certifique-se de ter um arquivo `config.js` com as variáveis `githubUsername` e `githubToken`.
2. Abra o arquivo HTML no navegador para visualizar o dashboard com os repositórios dinamicamente carregados.

## 📌 Autor

>Felipe Lucca Taumaturgo de Oliveira, 19 anos
