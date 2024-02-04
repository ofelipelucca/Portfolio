# 🖥️ Um dashboard de repositórios!

Este script em JavaScript utiliza Node.JS (com Axios) para obter, a cada 48 horas, os dados dos meus repositórios públicos por meio de um Workflow no GitHub Actions e os exibe em um dashboard.

## 👁️ Uso

- **Clone o repositório**
- **No GitHub, gere um fine-grained token que dá acesso aos dados dos repositórios públicos**
- **No repositório, crie um repository secret com o nome de TOKEN_GITHUB, e como valor insira o fine-grained token gerado**
- **No mesmo lugar, crie um repository secret com o nome de USERNAME_GITHUB, e como valor insira o seu nick no GitHub**

## 👨‍💻 Estrutura do Código

- **Configuração do GitHub Actions:** A cada 48 horas, o arquivo YML do repositório é executado, e nele é rodado o código em Node.JS passando as credenciais necessárias para a API do GitHub por meio de secrets.
- **Requisição à API do GitHub:** Utiliza o Axios para obter os dados dos meus repositórios públicos e os armazena no arquivo repositorios-data.json, em formato JSON.
- **Construção do site:** O site é construído carregando os dados salvos em JSON na pasta data/, contendo os dados dos repositórios públicos e dos freelances.
- **Manipulação do DOM:** Cria elementos HTML dinamicamente para exibir informações sobre os repositórios em um formato de dashboard.
- **Ordenação e Detalhes:** Ordena os repositórios por data de criação e exibe detalhes, como nome, descrição e data de criação.
- **Evento de Clique:** Adiciona um evento de clique a cada post, abrindo o repositório correspondente.

## 📌 Autor
Felipe Lucca Taumaturgo de Oliveira