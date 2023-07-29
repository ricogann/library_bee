const Joi = require("joi");
const prisma = require("../helpers/database");

class _pinjam {
    addPinjam = async (body) => {
        try {
            const schema = Joi.object({
                borrowedBy: Joi.string().required(),
                id_books: Joi.optional().required(),
                total_days_pinjam: Joi.number().required(),
            });

            const validation = schema.validate(body);

            const pengembalian = await prisma.transaksi_pengembalian.findFirst({
                where: {
                    borrowedBy: body.borrowedBy,
                    status_pengembalian: true,
                },
            });

            if (!pengembalian) {
                return {
                    status: false,
                    code: 404,
                    error: "Anda belum mengembalikan buku yang dipinjam",
                };
            }

            if (validation.error) {
                const errorDetails = validation.error.details.map(
                    (detail) => detail.message
                );

                return { status: false, error: errorDetails.join(", ") };
            }

            const books = body.id_books.toString().split(",");
            for (let i = 0; i < books.length; i++) {
                const stok = await prisma.stok.findFirst({
                    where: {
                        id_book: parseInt(books[i]),
                    },
                });

                const updateStok = await prisma.stok.update({
                    where: {
                        id_book: parseInt(books[i]),
                    },
                    data: {
                        total_stok_book: stok.total_stok_book - 1,
                    },
                });
            }

            const pinjam = await prisma.transaksi_pinjam.create({
                data: {
                    borrowedBy: body.borrowedBy,
                    id_books: body.id_books.toString(),
                    date_pinjam: validation.value.date_pinjam,
                    total_days_pinjam: body.total_days_pinjam,
                },
            });

            //Perhitungan untuk tanggal pengembalian sesuai dengan durasi peminjaman
            const temp = new Date(pinjam.date_pinjam);
            const date_pinjam =
                temp.getFullYear() +
                "-" +
                (temp.getMonth() + 1) +
                "-" +
                temp.getDate();
            const temp_perhitungan = new Date(date_pinjam);
            temp_perhitungan.setDate(
                temp_perhitungan.getDate() + body.total_days_pinjam
            );
            const date_plan_pengembalian = temp_perhitungan
                .toISOString()
                .slice(0, 10);

            //Kode unik untuk struk peminjaman yang digunakan di id_pengembalian
            let boolean = false;
            let id_pengembalian = "";
            while (boolean == false) {
                id_pengembalian = "B" + Math.floor(Math.random() * 100000);
                const check = await prisma.transaksi_pengembalian.findUnique({
                    where: {
                        id_pengembalian: id_pengembalian.toString(),
                    },
                });

                if (!check) {
                    boolean = true;
                    const pengembalian =
                        await prisma.transaksi_pengembalian.create({
                            data: {
                                id_pengembalian: id_pengembalian.toString(),
                                borrowedBy: body.borrowedBy,
                                id_books: body.id_books.toString(),
                                date_plan_pengembalian: new Date(
                                    date_plan_pengembalian
                                ),
                                status_pengembalian: false,
                            },
                        });
                }
            }

            return {
                status: true,
                code: 201,
                message:
                    "Terima kasih, ini struk pembelian anda. Tunjukkan Kode Unik ketika mengembalikan buku. " +
                    "Kode Unik: " +
                    id_pengembalian.toString() +
                    " Tanggal Pengembalian" +
                    temp_perhitungan,
            };
        } catch (error) {
            console.error("addPinjam pinjam module Error: ", error);
            return {
                status: false,
                error,
            };
        }
    };

    getPinjam = async (body) => {
        try {
            let rekap = [];
            let tempbooks = [];
            const transaksi_pinjam = await prisma.transaksi_pinjam.findMany({});
            for (let i = 0; i < transaksi_pinjam.length; i++) {
                const books = transaksi_pinjam[i].id_books
                    .toString()
                    .split(",");

                for (let j = 0; j < books.length; j++) {
                    const book = await prisma.books.findFirst({
                        where: {
                            id_book: parseInt(books[j]),
                        },
                    });
                    tempbooks.push(book.title_book);
                }
                rekap.push({
                    nama_peminjam: transaksi_pinjam[i].borrowedBy,
                    buku_dipinjam: tempbooks.toString(),
                    tanggal_pinjam: transaksi_pinjam[i].date_pinjam,
                    durasi_pinjam:
                        transaksi_pinjam[i].total_days_pinjam + " hari",
                });
                tempbooks = [];
            }

            return {
                status: true,
                code: 200,
                message: "Get data success",
                data: rekap,
            };
        } catch (error) {
            console.error("getPinjam pinjam module Error: ", error);
            return {
                status: false,
                error,
            };
        }
    };
}

module.exports = new _pinjam();
