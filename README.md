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

# Dokumentasi API
https://documenter.getpostman.com/view/21361511/2s9XxsVwYz

# Maybe FAQ?
1. Kenapa kok hanya addPinjam saja yang memakai authorization?
   Saya berasumsi member disini hanya member dari perpustakaan, yang dimana aktivitas yang dilakukan member yaitu pinjam buku saja. Aktivitas lainnya seperti rekap data pinjam, rekap data pengembalian, menambah buku, update stok buku, pengembalian buku dilakukan oleh admin yang tidak dibuat akunnya. Maka dari itu selain pinjam buku tidak ada authorization.
2. Kenapa kok ketika addPinjam ngepass data id_books dalam bentuk array?
   Agar member dapat meminjam beberapa buku dalam satu waktu.

