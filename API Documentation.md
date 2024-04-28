# Mobile Phone Store API Documentation

## Endpoints :

List of available endpoints:

- `POST /users/register`
- `POST /users/login`
- `PUT /users/acc/:id`
- `DELETE /users/acc/:id`
- `GET /phones`
- `GET /phones/search`
- `PUT /phones/update/:id`
- `POST /phones`
- `DELETE /phones/del/:id`


&nbsp;

## 1. POST /users/register

Request:

- body:

```json
{
    "email": "string",
  "password": "string",
  "username": "string"
}
```

_Response (201 - Created)_

```json
{
    "id": 8,
    "email": "armin@mail.com",
    "password": "$2a$10$yY9p0HuoIbXdyOcSTPZ3xeROK74eN7pFtjLqT.UaM18UORVGFmjCi",
    "username": "armin arlert",
    "updatedAt": "2024-04-28T09:16:41.201Z",
    "createdAt": "2024-04-28T09:16:41.201Z"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "email/password required"
}
OR
{
  "message": "Email must be unique"
}
OR
{
  "message": "This should be an email"
}
OR
{
  "message": "Email cannot be empty"
}
OR
{
  "message": "Email cannot be null"
}
OR
{
  "message": "Password is required"
}
OR
{
  "message": "Password cannot be null"
}
OR
{
  "message": "Password cannot be empty"
}
```

&nbsp;

## 2. POST /users/login

Request:

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

_Response (200 - OK)_

```json
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiaWF0IjoxNzE0Mjk5ODU2fQ.x_y4RGAKSE1IJnEGxlthsNshAJVt0Wojs9_xiQxcfnE",
    "id": 8
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email is required"
}
OR
{
  "message": "Password is required"
}
```

&nbsp;

## 3. GET /phones

Description:
- Get all phones from database

Request:

- headers: 

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
[
    {
        "id": 1,
        "brand": "HTC",
        "model": "HTC Sensation XL",
        "storage": 387,
        "color": "Red",
        "price": "1000000",
        "quantity": 1,
        "createdAt": "2024-04-28T06:37:47.442Z",
        "updatedAt": "2024-04-28T06:37:47.442Z"
    },
    {
        "id": 2,
        "brand": "BLU",
        "model": "BLU Dash XL",
        "storage": 175,
        "color": "Violet",
        "price": "2500000",
        "quantity": 2,
        "createdAt": "2024-04-28T06:37:47.442Z",
        "updatedAt": "2024-04-28T06:37:47.442Z"
    },
    {
        "id": 3,
        "brand": "Oppo",
        "model": "Oppo R819",
        "storage": 475,
        "color": "Purple",
        "price": "3000000",
        "quantity": 3,
        "createdAt": "2024-04-28T06:37:47.442Z",
        "updatedAt": "2024-04-28T06:37:47.442Z"
    },
    {
        "id": 4,
        "brand": "LG",
        "model": "LG K42",
        "storage": 150,
        "color": "Purple",
        "price": "4000000",
        "quantity": 4,
        "createdAt": "2024-04-28T06:37:47.442Z",
        "updatedAt": "2024-04-28T06:37:47.442Z"
    },
    {
        "id": 5,
        "brand": "LG",
        "model": "LG GU285",
        "storage": 229,
        "color": "Violet",
        "price": "5000000",
        "quantity": 5,
        "createdAt": "2024-04-28T06:37:47.442Z",
        "updatedAt": "2024-04-28T06:37:47.442Z"
    },
    {
        "id": 6,
        "brand": "Micromax",
        "model": "Micromax A121 Canvas Elanza 2",
        "storage": 261,
        "color": "Orange",
        "price": "6000000",
        "quantity": 6,
        "createdAt": "2024-04-28T06:37:47.442Z",
        "updatedAt": "2024-04-28T06:37:47.442Z"
    },
    {
        "id": 7,
        "brand": "Haier",
        "model": "Haier M180",
        "storage": 308,
        "color": "Turquoise",
        "price": "7000000",
        "quantity": 7,
        "createdAt": "2024-04-28T06:37:47.442Z",
        "updatedAt": "2024-04-28T06:37:47.442Z"
    },
    {
        "id": 8,
        "brand": "Lava",
        "model": "Lava V5",
        "storage": 285,
        "color": "Green",
        "price": "7000000",
        "quantity": 8,
        "createdAt": "2024-04-28T06:37:47.442Z",
        "updatedAt": "2024-04-28T06:37:47.442Z"
    },
    {
        "id": 9,
        "brand": "Panasonic",
        "model": "Panasonic Eluga Z",
        "storage": 507,
        "color": "Yellow",
        "price": "9",
        "quantity": 9,
        "createdAt": "2024-04-28T06:37:47.442Z",
        "updatedAt": "2024-04-28T06:37:47.442Z"
    },
    {
        "id": 10,
        "brand": "LG",
        "model": "LG G Pad 7.0 LTE",
        "storage": 339,
        "color": "Red",
        "price": "7000000",
        "quantity": 10,
        "createdAt": "2024-04-28T06:37:47.442Z",
        "updatedAt": "2024-04-28T06:37:47.442Z"
    }
]
```

&nbsp;


## 4. GET /phones/search

Description:
- Get phone/phones as searched by user from database

Request:

- params: 
  ```json
{
  "searchTerm": "string"
}
```

- headers: 

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
[
    {
        "id": 4,
        "brand": "LG",
        "model": "LG K42",
        "storage": 150,
        "color": "Purple",
        "price": "4000000",
        "quantity": 4,
        "createdAt": "2024-04-28T06:37:47.442Z",
        "updatedAt": "2024-04-28T06:37:47.442Z"
    },
    {
        "id": 5,
        "brand": "LG",
        "model": "LG GU285",
        "storage": 229,
        "color": "Violet",
        "price": "5000000",
        "quantity": 5,
        "createdAt": "2024-04-28T06:37:47.442Z",
        "updatedAt": "2024-04-28T06:37:47.442Z"
    },
    {
        "id": 8,
        "brand": "Lava",
        "model": "Lava V5",
        "storage": 285,
        "color": "Green",
        "price": "7000000",
        "quantity": 8,
        "createdAt": "2024-04-28T06:37:47.442Z",
        "updatedAt": "2024-04-28T06:37:47.442Z"
    },
    {
        "id": 10,
        "brand": "LG",
        "model": "LG G Pad 7.0 LTE",
        "storage": 339,
        "color": "Red",
        "price": "7000000",
        "quantity": 10,
        "createdAt": "2024-04-28T06:37:47.442Z",
        "updatedAt": "2024-04-28T06:37:47.442Z"
    }
]
```

&nbsp;

## 5. POST /phones

Description:
- Post new mobile phone to database

Request:


_Response (201 - Created)_

```json
{
    "id": 11,
    "brand": "Apple",
    "model": "Iphone SE 2",
    "storage": 128,
    "color": "Black",
    "price": "9000000",
    "quantity": 10,
    "updatedAt": "2024-04-28T12:10:27.650Z",
    "createdAt": "2024-04-28T12:10:27.650Z"
}
```

_Response (404 - Bad Request)_

```json
{
    "message": "Character not found"
}
```

&nbsp;

## 6. DELETE /phones/del/:id

Description:
- Delete mobile phone by id

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "id": "integer (required)"
}
```

_Response (200 - OK)_

```json
{
    "message": "Phone with id 1 has been deleted"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Data not found!"
}
```


&nbsp;


## 7. DELETE /users/acc/:id

Description:
- Delete user by id

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "id": "integer (required)"
}
```

_Response (200 - OK)_

```json
{
    "message": "User with id 2 has been deleted"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Data not found!"
}
```

&nbsp;


## 8. PUT /users/acc/:id

Description:
- Update a user profile from database

Request:

- params:

```json
{
  "id": "integer (required)"
}
```

- headers: 

```json
{
  "access_token": "string"
}
```
- body:

```json
{
  "email": "string",
  "username": "string",
}
```

_Response (200 - OK)_

```json
{
    "message": "User with id 1 has been updated"
}

```

_Response (400 - Bad Request)_

```json
{
  "message": "email cannot be null"
}
OR
{
  "message": "email cannot be empty"
}
{
  "message": "username cannot be null"
}
OR
{
  "message": "username cannot be empty"
}

```

&nbsp;

## 8. PUT /phones/update/:id

Description:
- Update a mobile phone details from database

Request:

- params:

```json
{
  "id": "integer (required)"
}
```

- headers: 

```json
{
  "access_token": "string"
}
```
- body:

```json
{
  "brand": "string",
  "model": "string",
}
```

_Response (200 - OK)_

```json
{
    "message": "User with id 1 has been updated"
}

```

_Response (400 - Bad Request)_

```json
{
  "message": "email cannot be null"
}
OR
{
  "message": "email cannot be empty"
}
{
  "message": "username cannot be null"
}
OR
{
  "message": "username cannot be empty"
}

```

&nbsp;


## Global Error

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid token"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```