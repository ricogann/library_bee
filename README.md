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
   http://localhost:3000/api/seeder
   Seeder berisi 3 data, yaitu member, books, dan stok.  
3. Auth
4. Books
5. Stok
6. Peminjaman
7. Pengembalian