## Setup Server
Install adonis
```bash
npm i -g @adonisjs/cli
```
Install all packages
```bash
yarn install
```
Setup .env file
```text
HOST=0.0.0.0
PORT=3333
NODE_ENV=development
APP_URL=http://${HOST}:${PORT}
SESSION_DRIVER=cookie
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=root
DB_DATABASE=test
DB_CONNECTION=mysql
```
Run migartions
```bash
adonis migration:refresh
```
run server
```bash
npm start
```

## Setup Client
Install all packages
```bash
cd ./frontend/
```
Install all global packages
```bash
npm install --global npm-run-all babel-cli
```
Install all packages
```bash
yarn install
```
run frontend
```bash
npm start
```



