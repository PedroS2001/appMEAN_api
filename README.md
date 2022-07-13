
# Rest API 

Rest api in Node.js and express with mongoDB

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

