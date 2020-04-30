<h1 align="center">
 GoReact Spotify
</h1>

<h1 align="center">
  <img src="src/assets/spotify_react_demo.gif">
</h1>

# Índice
- [Sobre](#-sobre)
- [Tecnologias](#-tecnologias)
- [Execução do Projeto](#-execução-do-projeto)

## 📋 Sobre

O **GoReact Spotify** é um projeto baseado numa versão antiga do Spotify, onde possui algumas playlists e músicas pré-configuradas para que você possa escutá-las, avançar/passar músicas, pause/play e alteração de volume. Projeto desenvolvido através do Bootcamp da RocketSeat.

---

## 🚀 Tecnologias

O projeto utiliza-se das seguintes tecnologias:

- ReactJS;
- Yarn;
- Json-server;
- Eslint;
- Prettier;
- EditorConfig;
- Reactotron.

---

## 💻 Execução do Projeto

Para execução do projeto, é necessário ter o Yarn instalado e executar os seguintes comandos no terminal:

```sh
# Instalação das dependências
yarn

# Execução de API Fake com Json-server
# Esta etapa irá executar o arquivo server.json e irá simular uma API
json-server -w server.json -p 3001 -d 300

# Abra outro terminal e execute o projeto
yarn start
```

Aguarde um momento para que ocorra a inicialização.

Teste escolher uma playlist e executar a música contida nela, você pode testar adiantar a música, passar para outra música (na playlist com 2 músicas), aumentar/diminuir volume, dar play/pause nas músicas.

---
Desenvolvido 🙃 por Thomas Lossio.
