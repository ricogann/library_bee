# Tugas Praktek Backend Developer Bee ID

## Step 1
Clone atau download kode dari repository ini.

## Step 2
Buka kode yang telah diclone di kode editor, lalu memulai dengan menulis kode di bawah di terminal
```
npm install
```

## Step 3
Pada file .env ada kode seperti berikut.
```
DATABASE_URL="mysql://root:@localhost:3306/library_bee"
```
Sesuaikan dengan database anda. Lalu mengetik kode di bawah ini di terminal.
```
npx prisma migrate dev --name init
```

## Step 4
Jalankan server, dengan kode di bawah berikut ini.
```
npm run dev
```
Setelah itu anda dapat akses API yang ada di server, list dari API adalah sebagai berikut.

# List API

### 1. Seeder
   ```
   http://localhost:3000/api/seeder
   ```
### 2. Auth
   ```
    http://localhost:3000/api/auth/register
    ###
    Request
    multipart/form-data : {
         name_member: "Rico Putra Anugerah",
         email_member: "rico.putra95@gmail.com",
         password_member: "123456",
         avatar_member = avatar.png
    }
    Response
    {
         status: true,
         message: "Register Success"
    }

   ---
   http://localhost:3000/api/auth/login
   ###
   Request
   JSON   : {
      "email_member": "rico.putra95@gmail.com"
      "password_member": "123456"
   }
   Response
   JSON   : {
      "status": true,
      "data" : {
         "message": "Login Success, here's your token",
         "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF9tZW1iZXIiOjEsImVtYWlsX21lbWJlciI6InJpY28ucHV0cmE5NUBnbWFpbC5jb20iLCJuYW1lX21lbWJlciI6IlJpY
         28gUHV0cmEgQW51Z2VyYWgiLCJpYXQiOjE2OTA1MDUxMjksImV4cCI6MTY5MDU5MTUyOX0.pO3ldD6ouzI1MJABi3lUZKInCO5o2iVLv10Q7u4FGoY"
      }
   }

   ---
   http://localhost:3000/api/auth/destroy/:id
   ###
   Request
   http://localhost:3000/api/auth/destroy/4
   Response
   JSON   : {
      status: true,
      code: 200,
      message: "Delete Success"
   }
   
   ```
### 4. Books
   ```
   
   ```
6. Stok
7. Peminjaman
8. Pengembalian
