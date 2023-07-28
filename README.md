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
    POST
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
   POST
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
   DELETE
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
   http://localhost:3000/api/book
   ###
   POST
   Request
   multipart/form-data   : {
         title_book   : "Fear of Physics",
         isbn_book    : "9780465007134",
         date_published_book   : "2007-07-30",
         publisher_book   : "Basic Books"
         author_book   : "Lawrence M. Krauss",
         description_book   : " Assume the cow is a sphere. So begins this lively, irreverent, and informative look at everything from the physics of boiling water to cutting-edge research at the observable limits of the universe. Rich with anecdotes and accessible examples, Fear of Physics nimbly ranges over the tools and thought behind the world of modern physics, taking the mystery out of what is essentially a very human intellectual endeavour. "
         page_count_book   : 288,
         format_book   : ebook,
         language_book   : "English",
         cover_book   : fearofphysics_cover.jpg (files)
         total_stok_book   : 30
   }
   Response
   JSON   : {
         "status"   : true,
         "message"  : "Book added Successfully",
         "data" : {
             title_book   : "Fear of Physics",
             isbn_book    : "9780465007134",
             date_published_book   : "2007-07-30",
             publisher_book   : "Basic Books"
             author_book   : "Lawrence M. Krauss",
             description_book   : " Assume the cow is a sphere. So begins this lively, irreverent, and informative look at everything from the physics of boiling water to cutting-edge research at the observable limits of the universe. Rich with anecdotes and accessible examples, Fear of Physics nimbly ranges over the tools and thought behind the world of modern physics, taking the mystery out of what is essentially a very human intellectual endeavour. "
             page_count_book   : 288,
             format_book   : ebook,
             language_book   : "English",
             cover_book   : fearofphysics_cover.jpg (files)
         }
   }

   ---
   http://localhost:3000/api/book/
   Response
   JSON   : {
         "status": true,
         "message": "Get data success",
         "data": [
         {
            "id_book": 1,
            "title_book": "Astrofisika untuk Orang Sibuk",
            "isbn_book": "9786020616322",
            "date_published_book": "2018-10-20T00:00:00.000Z",
            "publisher_book": "Gramedia Pustaka Utama",
            "author_book": "Neil deGrasse Tyson",
            "description_book": "Seperti apakah sifat dasar ruang dan waktu? Bagaimana kita menempatkan diri dalam alam semesta? Bagaimana alam semesta hadir                  dalam diri kita? Tidak ada yang lebih bisa menjawab pertanyaan ini daripada astrofisikawan terkemuka Neil deGrasse Tyson. Namun, sedikit dari kita                yang punya waktu untuk memikirkan kosmos. Jadi, Tyson membawa alam semesta ke Bumi dengan ringkas dan jelas, dalam bab-bab yang bisa dilahap kapan                pun dan di mana pun di sela-sela hari sibuk Anda.",
            "page_count_book": 160,
            "format_book": "ebook",
            "language_book": "Indonesian",
            "cover_book": "1690487165169-Screenshot (1856).png"
        },
        {
            "id_book": 2,
            "title_book": "LALALA",
            "isbn_book": "9786020616323",
            "date_published_book": "2018-10-20T00:00:00.000Z",
            "publisher_book": "Gramedia Pustaka Utama",
            "author_book": "Neil deGrasse Tyson",
            "description_book": "Seperti apakah sifat dasar ruang dan waktu? Bagaimana kita menempatkan diri dalam alam semesta? Bagaimana alam semesta hadir                  dalam diri kita? Tidak ada yang lebih bisa menjawab pertanyaan ini daripada astrofisikawan terkemuka Neil deGrasse Tyson. Namun, sedikit dari kita                yang punya waktu untuk memikirkan kosmos. Jadi, Tyson membawa alam semesta ke Bumi dengan ringkas dan jelas, dalam bab-bab yang bisa dilahap kapan                pun dan di mana pun di sela-sela hari sibuk Anda.",
            "page_count_book": 160,
            "format_book": "ebook",
            "language_book": "Indonesian",
            "cover_book": "1690490099078-Screenshot (1856).png"
        },
        {
            "id_book": 3,
            "title_book": "YEYEYE",
            "isbn_book": "9786020616324",
            "date_published_book": "2018-10-20T00:00:00.000Z",
            "publisher_book": "Gramedia Pustaka Utama",
            "author_book": "Neil deGrasse Tyson",
            "description_book": "Seperti apakah sifat dasar ruang dan waktu? Bagaimana kita menempatkan diri dalam alam semesta? Bagaimana alam semesta hadir                  dalam diri kita? Tidak ada yang lebih bisa menjawab pertanyaan ini daripada astrofisikawan terkemuka Neil deGrasse Tyson. Namun, sedikit dari kita                yang punya waktu untuk memikirkan kosmos. Jadi, Tyson membawa alam semesta ke Bumi dengan ringkas dan jelas, dalam bab-bab yang bisa dilahap kapan                pun dan di mana pun di sela-sela hari sibuk Anda.",
            "page_count_book": 160,
            "format_book": "ebook",
            "language_book": "Indonesian",
            "cover_book": "1690490107428-Screenshot (1856).png"
        }
    ]
   }

   ---
   http://localhost:3000/api/book/available
   Response
   JSON   : {
       "status": true,
       "message": "Get available data book success",
       "data": [
           [
               {
                   "id_book": 2,
                   "title_book": "LALALA",
                   "isbn_book": "9786020616323",
                   "date_published_book": "2018-10-20T00:00:00.000Z",
                   "publisher_book": "Gramedia Pustaka Utama",
                   "author_book": "Neil deGrasse Tyson",
                   "description_book": "Seperti apakah sifat dasar ruang dan waktu? Bagaimana kita menempatkan diri dalam alam semesta? Bagaimana alam semesta                        hadir dalam diri kita? Tidak ada yang lebih bisa menjawab pertanyaan ini daripada astrofisikawan terkemuka Neil deGrasse Tyson. Namun,                            sedikit dari kita yang punya waktu untuk memikirkan kosmos. Jadi, Tyson membawa alam semesta ke Bumi dengan ringkas dan jelas, dalam bab-bab                      yang bisa dilahap kapan pun dan di mana pun di sela-sela hari sibuk Anda.",
                   "page_count_book": 160,
                   "format_book": "ebook",
                   "language_book": "Indonesian",
                   "cover_book": "1690490099078-Screenshot (1856).png"
               },
               {
                   "id_stok": 2,
                   "id_book": 2,
                   "total_stok_book": 32
               }
           ],
           [
               {
                   "id_book": 3,
                   "title_book": "YEYEYE",
                   "isbn_book": "9786020616324",
                   "date_published_book": "2018-10-20T00:00:00.000Z",
                   "publisher_book": "Gramedia Pustaka Utama",
                   "author_book": "Neil deGrasse Tyson",
                   "description_book": "Seperti apakah sifat dasar ruang dan waktu? Bagaimana kita menempatkan diri dalam alam semesta? Bagaimana alam semesta                        hadir dalam diri kita? Tidak ada yang lebih bisa menjawab pertanyaan ini daripada astrofisikawan terkemuka Neil deGrasse Tyson. Namun,                            sedikit dari kita yang punya waktu untuk memikirkan kosmos. Jadi, Tyson membawa alam semesta ke Bumi dengan ringkas dan jelas, dalam bab-bab                      yang bisa dilahap kapan pun dan di mana pun di sela-sela hari sibuk Anda.",
                   "page_count_book": 160,
                   "format_book": "ebook",
                   "language_book": "Indonesian",
                   "cover_book": "1690490107428-Screenshot (1856).png"
               },
               {
                   "id_stok": 3,
                   "id_book": 3,
                   "total_stok_book": 33
               }
        ]
    ]
   }

   ---
   http://localhost:3000/api/book/2
   Response
   JSON : {
         "status": true,
         "code" : 200,
         "message": "Book deleted Successfully"
   }  
   ```
### 5. Stok
    http://localhost:3000/api/stok
    Request
    JSON   : {
       "id_book": 3,
       "total_stok_book": 40
    }
    Response
    JSON   : {
       "status" : true,
       "code"   : 201,
       "message": "Stok Updated"
    }
   
### 6. Peminjaman

    http://localhost:3000/api/pinjam
    POST
    Request
    JSON   : {
         "borrowedBy"   : "Rico Putra Anugerah",
         "id_books"   : [2,3],
         "total_days_pinjam"   : 5
    }
    Response
    JSON   : {
          "status"   : true,
          "message"  : "Pinjam buku sukses"
    }
    
    http://localhost:3000/api/pinjam
    {
    "status": true,
    "message": "Get data success",
    "data": [
        {
            "nama_peminjam": "Rico Putra Anugerah",
            "buku_dipinjam": "LALALA",
            "tanggal_pinjam": "2023-07-28T00:00:00.000Z",
            "durasi_pinjam": "5 hari"
        },
        {
            "nama_peminjam": "Rico Putra Anugerah",
            "buku_dipinjam": "LALALA,YEYEYE",
            "tanggal_pinjam": "2023-07-28T00:00:00.000Z",
            "durasi_pinjam": "5 hari"
        },
        {
            "nama_peminjam": "Rico Putra Anugerah",
            "buku_dipinjam": "LALALA,YEYEYE",
            "tanggal_pinjam": "2023-07-27T21:45:39.613Z",
            "durasi_pinjam": "5 hari"
        },
        {
            "nama_peminjam": "Rico Putra Anugerah",
            "buku_dipinjam": "LALALA,YEYEYE",
            "tanggal_pinjam": "2023-07-27T22:10:27.304Z",
            "durasi_pinjam": "5 hari"
        },
        {
            "nama_peminjam": "Rico Putra Anugerah",
            "buku_dipinjam": "LALALA,YEYEYE",
            "tanggal_pinjam": "2023-07-27T22:10:38.553Z",
            "durasi_pinjam": "5 hari"
        },
        {
            "nama_peminjam": "Rico Putra Anugerah",
            "buku_dipinjam": "LALALA,YEYEYE",
            "tanggal_pinjam": "2023-07-27T22:11:05.903Z",
            "durasi_pinjam": "5 hari"
        },
        {
            "nama_peminjam": "Rico Putra Anugerah",
            "buku_dipinjam": "LALALA,YEYEYE",
            "tanggal_pinjam": "2023-07-27T22:11:22.282Z",
            "durasi_pinjam": "5 hari"
        },
        {
            "nama_peminjam": "Rico Putra Anugerah",
            "buku_dipinjam": "LALALA,YEYEYE",
            "tanggal_pinjam": "2023-07-27T22:12:39.670Z",
            "durasi_pinjam": "5 hari"
        },
        {
            "nama_peminjam": "Rico Putra Anugerah",
            "buku_dipinjam": "LALALA,YEYEYE",
            "tanggal_pinjam": "2023-07-27T22:14:17.948Z",
            "durasi_pinjam": "5 hari"
        },
        {
            "nama_peminjam": "Rico Putra Anugerah",
            "buku_dipinjam": "LALALA,YEYEYE",
            "tanggal_pinjam": "2023-07-27T22:17:01.222Z",
            "durasi_pinjam": "5 hari"
        },
        {
            "nama_peminjam": "Rico Putra Anugerah",
            "buku_dipinjam": "LALALA,YEYEYE",
            "tanggal_pinjam": "2023-07-27T22:25:21.443Z",
            "durasi_pinjam": "5 hari"
        },
        {
            "nama_peminjam": "Rico Putra Anugerah",
            "buku_dipinjam": "LALALA,YEYEYE",
            "tanggal_pinjam": "2023-07-27T22:25:45.803Z",
            "durasi_pinjam": "5 hari"
        },
        {
            "nama_peminjam": "Rico Putra Anugerah",
            "buku_dipinjam": "LALALA,YEYEYE",
            "tanggal_pinjam": "2023-07-27T22:26:04.173Z",
            "durasi_pinjam": "5 hari"
        },
      ]
   }

### 7. Pengembalian
    http://localhost:3000/api/pengembalian
    Request
    JSON   : {
       "id_pengembalian": "B12345",
       "borrowedBy": "Rico Putra Anugerah",
       "id_books": [2,3],
       "date_plan_pengembalian": "2023-07-28",
       "status_pengembalian": true
    }
    Response
    JSON   : {
       "status": true,
       "message": "Pengembalian buku sukses"
    }

    http://localhost:3000/api/pengembalian/B77330
    PUT
    Response
    JSON   : {
         "status"   : true,
         "code"   : 201,
         "message"   : "Update data success" 
    }

    ---
    http://localhost:3000/api/pengembalian
    GET
    Response
    JSON   : {
    "status": true,
    "data": [
        {
            "nama_peminjam": "Rico Putra Anugerah",
            "buku_dipinjam": "LALALA,YEYEYE",
            "tanggal_pengembalian_seharusnya": "2023-08-01T00:00:00.000Z",
            "tanggal_pengembalian": "2023-07-27T23:49:06.599Z",
            "denda": 0,
            "keterangan": "Tidak terlambat, denda Rp. 0"
        }
     ]
     }
