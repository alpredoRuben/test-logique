1. Clone project
2. Buka Project dengan terminal
3. Install dependency : npm install
4. Buat 1 file .env, Copy isi File .env.example ke .env

```js
cp.env.env.example;
```

5. Isi Database connection di file .env

6. Migrate table

```js
npx sequelize-cli db:migrate
```

7. Jalankan dengan perintah

```js
npm start
```

Publish Postman
https://documenter.getpostman.com/view/18412699/UyrEhanp
