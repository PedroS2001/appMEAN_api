
# Rest API - nodejs - express - mongoose

Rest api in Node.js and express with mongoDB

## Related

Demo frontend for this project  
[Front-end](https://github.com/PedroS2001/appMEAN_front)

you need to have node and mongodb installed  
[MongoDB](https://www.mongodb.com/)  
[Node.js](https://nodejs.dev/)


## Run Locally

Clone the project

```bash
  git clone https://github.com/PedroS2001/appMEAN_api.git
```

Go to the project directory

```bash
  cd appMEAN_api
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`MONGO_URL`

`MONGO_DB_NAME`

`JWT_SECRET`

`EXP_TIME`
## API Reference

#### Get JWT

```http
  POST /api/auth
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `usuario`      | `Usuario` | **Required**. user requesting jwt |


#### Get all users

```http
  GET /api/usuarios
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `none` | `none` | Return array of users |


#### Create user

```http
  POST /api/usuarios
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `usuario`      | `Usuario` | **Required**. nombre, email and password, imagen is optional,  |
| `Authorization`      | `JWT` | **Required**. |


#### Modify user

```http
  PUT /api/usuarios
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `usuario`      | `Usuario` | **Required**. nombre, email and password, imagen is optional |
| `Authorization`      | `JWT` | **Required**. |


#### Delete user

```http
  DELETE /api/usuarios
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Required**. user mail   |
| `Authorization`      | `JWT` | **Required**. |

