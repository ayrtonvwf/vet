# SISTEMA VOLTADO A CLÍNICA VETERINÁRIA
Projeto produzido pelo aluno Ayrton Vargas Witcel Fidelis na disciplina de Programação Orientada a Objetos no ano de 2019 - 1º Semestre do Curso de Ciência da Computação, da Universidade Tecnológica Federal do Paraná - UTFPR Medianeira e sob a orientação do professor Everton Coimbra de Araújo.

O aplicativo foi desenvolvido em Ionic utilizando Node.js, e a API foi desenvolvida em C# utilizando o Visual Studio Community 2019 (v16.1.4). Para o banco de dados, foi utilizado o ORM (Mapeamento Objeto-Relacional) do Entity Framework Core (v2.2.4), usando o MySQL.

# Instalação do Visual Studio Community
* Acesse https://visualstudio.microsoft.com/pt-br/vs/community/, selecione a plataforma utilizada (Windows ou MacOS) e clique em "Baixar o visual Studio";
* Instale normalmente, conforme as instruções que seguirem.

# Instalação do Node.js e Ionic
* Acesse https://nodejs.org/en/ e baixe a última versão disponível do Node.js;
* Instale normalmente, conforme as instruções que seguirem;
* No terminal, instale o Ionic globalmente com o comando `npm i -g ionic`.

# Executando o sistema
* Vá para https://github.com/ayrtonvwf/vet;
* Clique em "Clone or download" e "Download ZIP";
* Descompacte o arquivo baixado e abra a pasta;
* Dentro da pasta, rode o comando: `dotnet .dotnet-api/API/bin/Debug/netcoreapp2.2/API.dll`;
* O sistema irá criar o banco de dados automaticamente e a API ficará aguardando requisições;
* Entre na pasta `ionic-app` e instale as dependências do Node.js com o comando: `npm i`;
* Inicie o aplicativo com o comando `ionic serve`;

# Conteúdo do repositório
O repositório é separado em duas pastas:
* dotnet-api: API desenvolvida em C#, contendo:
    * API: Projeto de Web API responsável por receber as requisições;
    * Model: Contém as classes base utilizadas, desenvolvidas utilizando o padrão do Entity Framework Core (com ID's, foreign Keys e atributos de navegação);
    * Persistencia: Projeto que cuida das configurações e faz a efetiva conexão da aplicação com o banco de dados (MySQL);
    * Servico: Projeto intermediário, que faz a ligação entre a API e a persistência;
    * EF.sln: Solução da aplicação, usada para gerenciar os projetos.
* ionic-app: Aplicativo desenvolvido com Ionic, contendo:
    * src/app/models: classes utilizadas para definir as entidades;
    * src/app/services: classes responsáveis por se comunicar com a API;
    * src/app/pages: páginas (views) do aplicativo. 

# IMPORTANTE
* Não foram feitos testes da aplicação em um ambiente real, não havendo portando nenhuma garantia de sua estabilidade.

# Dúvidas ou Sugestões
* Ayrton Vargas Witcel Fidelis - ayrton.vargas33@gmail.com