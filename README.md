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
   -http://localhost:3000/api/seeder
   ```
### 2. Auth
   ```
    http://localhost:3000/api/auth/register
    multipart/form-data : { name_member: "Rico Putra Anugerah", email_member: "rico.putra95@gmail.com", password_member: "123456", avatar_member = avatar.png }
    http://localhost:3000/api/auth/login
    http://localhost:3000/api/auth/destroy/:id
   ```
4. Books
5. Stok
6. Peminjaman
7. Pengembalian
