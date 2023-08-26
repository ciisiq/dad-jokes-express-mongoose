# Dad Jokes App

Just a app for training the backend with express and MongoDB
and connect to frondend that was done in Angular

### Project pre-view

![](./public/screenshot.png)

### Tecnologies used:

- NodeJS v18.16.0
- MongoDB v7.0.0
- Express
- Mongoose
- Angular

### Back end Folder

⚠️ You need to have MongoDB and Nodejs installed!

Go to folder

```bash
cd backend
```

Install all the dependecies

```bash
npm i
```

To run server

```bash
nodemon index.js
```

Backend port: http://localhost:3000/<br>
mongoose port: mongodb://localhost:27017
<br>

### API Endpoints

| HTTP Verbs | Endpoints  | Action                  |
| ---------- | ---------- | ----------------------- |
| GET        | /jokes     | To get all jokes        |
| POST       | /jokes     | To save a new joke      |
| DELETE     | /jokes/:id | To delete a single joke |

### Example data

```{
 "_id": "644ac288c9f67664f20abdd7",
 "id": "R7UfaahVfFd",
 "joke": "My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.",
 "status": 200
}
```

### Front end folder

Go to folder

```bash
cd frontend
```

Go to dad jokes folder

```bash
cd dad-jokes
```

Install Angular CLI

```bash
npm install -g @angular/cli
```

Install all the dependecies

```bash
npm i
```

to run angular

```bash
ng server
```

Front end runs in the port: http://localhost:4200/

### Documentations

- [Download MongoDB](https://www.mongodb.com/try/download/community) - (for Windows)
- [Download Nodejs](https://nodejs.org/en/download)
- [Mongoose](https://mongoosejs.com/docs/index.html)
- [Express](https://expressjs.com/en/starter/installing.html)
- [Angular](https://angular.io/guide/setup-local)
- [Api used](https://icanhazdadjoke.com/api)
