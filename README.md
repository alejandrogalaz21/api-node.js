<h3 align="center">Azure Cognitive Services API</h3> 
<p align="center">
  <a href="https://github.com/alejandrogalaz21/js-babel-node">
    <img src="https://media.giphy.com/media/13HBDT4QSTpveU/giphy.gif" alt="cat developer" width=350 height=250>
  </a>

  <p align="center">
    This is a practice repo using a mongodb object modeling for node.js
    <br>
    <a href="https://github.com/alejandrogalaz21/js-babel-node/issues">Report bug</a>
    ·
    <a href="https://github.com/alejandrogalaz21/js-babel-node/pulls">Request feature</a>
    <br>
    Author 
    <br>
    <a href="https://github.com/alejandrogalaz21">Alejandro Galaz</a>
      <p align="center">
        <a href="https://github.com/alejandrogalaz21">
          <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" />    
        </a>
        <a href="https://gitlab.com/alejandrogalaz21">
          <img src="https://img.shields.io/badge/GitLab-330F63?style=for-the-badge&logo=gitlab&logoColor=white" />    
        </a>
        <a href="https://www.linkedin.com/in/jesus-alejandro-galaz-icedo-496b94115/">
          <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />    
        </a>
        <a href="https://alejandrogalaz21@gmail.com">
          <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" />    
        </a>
    </p>
  </p>
</p>

## Technologies

---

A list of technologies used within the project:

 <p align="">  
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" /> 
    <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node-dot-js&logoColor=white" /> 
    <img src="https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white"/> 
    <img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white"/>
    <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/>    
  </p>

Requiriments:

[![node.js](https://img.shields.io/badge/node.js-v14.15.4-<COLOR>)](https://nodejs.org/es/)

## Installation

Run the aplication in debug :bug: mode in [Visual Studio Code](https://code.visualstudio.com/) :

Create your Visual Studio Code config file .vscode/launch.json

```JSON
{
  "configurations": [
    {
      "type": "node",
      "request": "attach",
      "name": "Attach",
      "restart": true,
      "port": 9229
    },
    {
      "type": "node",
      "request": "launch",
      "protocol": "inspector",
      "name": "ES6 Debugger",
      "program": "${workspaceFolder}/src/index.js",
      "runtimeExecutable": "${workspaceRoot}/node_modules/.bin/babel-node",
      "runtimeArgs": ["--nolazy"],
      "env": {
        "BABEL_ENV": "debug"
      },
      "resolveSourceMapLocations": [
        "${workspaceFolder}/**",
        "!**/node_modules/**"
      ]
    }
  ]
}

```

# New Debug config :

https://thecodereaper.com/2020/05/30/how-to-write-and-debug-es6-code-with-node-js-and-visual-studio-code/

# Refs :

- [Language Studio](https://language.cognitive.azure.com/tryout/sentiment)
- [Github Azure SDK JS](https://github.com/Azure/azure-sdk-for-js)
- [Microsoft Learn Documentation](https://learn.microsoft.com/en-us/azure/cognitive-services/language-service/language-detection/overview)

# Bugs and feature requests

Have a bug or a feature request? Please first read the [issue guidelines](https://github.com/alejandrogalaz21/js-babel-node/pulls) and search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](https://github.com/alejandrogalaz21/js-babel-node/issues).

# [](https://github.com/pranavms13/whatsapp-node-api#legal)📃 Legal

This code is in no way affiliated with, authorized, maintained, sponsored or endorsed or any of its affiliates or subsidiaries. This is an independent and unofficial software. Use at your own risk. **Commercial use of this code/repo is strictly prohibited.**

## Thanks 👋
