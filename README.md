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
