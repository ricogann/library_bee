const Joi = require("joi");
const prisma = require("../helpers/database");

class _pengembalian {
    addPengembalian = async (body) => {
        try {
            const schema = Joi.object({
                id_pengembalian: Joi.string().required(),
                borrowedBy: Joi.string().required(),
                id_books: Joi.optional().required(),
                date_plan_pengembalian: Joi.date().required(),
                date_actual_pengembalian: Joi.date(),
                denda_pengembalian: Joi.number(),
                status_pengembalian: Joi.boolean().required(),
                keterangan_pengembalian: Joi.string(),
            });

            const validation = schema.validate(body);

            if (validation.error) {
                const errorDetails = validation.error.details.map(
                    (detail) => detail.message
                );

                return { status: false, error: errorDetails.join(", ") };
            }

            const pengembalian = await prisma.transaksi_pengembalian.create({
                data: {
                    id_pengembalian: body.id_pengembalian,
                    borrowedBy: body.borrowedBy,
                    id_books: body.id_books.toString(),
                    date_plan_pengembalian:
                        validation.value.date_plan_pengembalian,
                    status_pengembalian: body.status_pengembalian,
                },
            });

            return {
                status: true,
                code: 201,
                message: "Add data success",
            };
        } catch (error) {
            console.error("addPengembalian pengembalian module Error: ", error);
            return {
                status: false,
                error,
            };
        }
    };

    getPengembalian = async (body) => {
        try {
            const pengembalian = await prisma.transaksi_pengembalian.findMany({
                where: {
                    status_pengembalian: true,
                },
            });

            let rekap = [];
            let tempbooks = [];
            for (let i = 0; i < pengembalian.length; i++) {
                const books = pengembalian[i].id_books.toString().split(",");
                for (let j = 0; j < books.length; j++) {
                    const book = await prisma.books.findFirst({
                        where: {
                            id_book: parseInt(books[j]),
                        },
                    });

                    tempbooks.push(book.title_book);
                }

                rekap.push({
                    nama_peminjam: pengembalian[i].borrowedBy,
                    buku_dipinjam: tempbooks.toString(),
                    tanggal_pengembalian_seharusnya:
                        pengembalian[i].date_plan_pengembalian,
                    tanggal_pengembalian:
                        pengembalian[i].date_actual_pengembalian,
                    denda: pengembalian[i].denda_pengembalian,
                    keterangan: pengembalian[i].keterangan_pengembalian,
                });

                tempbooks = [];
            }

            return {
                status: true,
                code: 200,
                data: rekap,
            };
        } catch (error) {
            console.error("getPengembalian pengembalian module Error: ", error);
            return {
                status: false,
                error,
            };
        }
    };

    updatePengembalian = async (id, body) => {
        try {
            const data = await prisma.transaksi_pengembalian.findFirst({
                where: {
                    id_pengembalian: id,
                },
            });

            if (data.status_pengembalian == true) {
                return {
                    status: false,
                    code: 400,
                    message: "Buku sudah dikembalikan",
                };
            }

            //Menghitung seberapa telat dan tidaknya ketika pengembalian buku (Beserta denda)
            const dateNow = new Date();
            const date_plan_pengembalian = new Date(
                data.date_plan_pengembalian
            );

            const diffTime = dateNow - date_plan_pengembalian;
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            //denda telat 5000 perhari
            let denda = 5000;
            let total_denda = 0;
            let keterangan_pengembalian = "";

            if (diffDays > 0) {
                total_denda = diffDays * denda;
                keterangan_pengembalian = `Terlambat ${diffDays} hari, denda Rp. ${total_denda}`;
            } else {
                keterangan_pengembalian = `Tidak terlambat, denda Rp. ${total_denda}`;
            }

            const pengembalian = await prisma.transaksi_pengembalian.update({
                where: {
                    id_pengembalian: id,
                },
                data: {
                    date_actual_pengembalian: dateNow,
                    denda_pengembalian: total_denda,
                    status_pengembalian: true,
                    keterangan_pengembalian: keterangan_pengembalian,
                },
            });

            const books = data.id_books.toString().split(",");
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
                        total_stok_book: stok.total_stok_book + 1,
                    },
                });
            }

            return {
                status: true,
                code: 201,
                message: "Update data success",
            };
        } catch (error) {
            console.error(
                "updatePengembalian pengembalian module Error: ",
                error
            );
            return {
                status: false,
                error,
            };
        }
    };
}

module.exports = new _pengembalian();
