const Joi = require("joi");
const prisma = require("../helpers/database");
const fs = require("fs");

class _book {
    addBook = async (body, file) => {
        try {
            const schema = Joi.object({
                title_book: Joi.string().required(),
                isbn_book: Joi.string().required(),
                date_published_book: Joi.date().required(),
                publisher_book: Joi.string().required(),
                author_book: Joi.string().required(),
                description_book: Joi.string().required(),
                page_count_book: Joi.number().required(),
                format_book: Joi.string().required(),
                language_book: Joi.string().required(),
                total_stok_book: Joi.number().required(),
            });

            const cover_book = file ? file.filename : null;

            const validation = schema.validate(body);

            if (validation.error) {
                const errorDetails = validation.error.details.map(
                    (detail) => detail.message
                );

                return { status: false, error: errorDetails.join(", ") };
            }

            const isbn = await prisma.books.findFirst({
                where: {
                    isbn_book: body.isbn_book,
                },
            });

            if (isbn) {
                return {
                    status: false,
                    code: 409,
                    error: "ISBN already exist",
                };
            }

            const book = await prisma.books.create({
                data: {
                    title_book: body.title_book,
                    isbn_book: body.isbn_book,
                    date_published_book: validation.value.date_published_book,
                    publisher_book: body.publisher_book,
                    author_book: body.author_book,
                    description_book: body.description_book,
                    page_count_book: parseInt(body.page_count_book),
                    format_book: body.format_book,
                    language_book: body.language_book,
                    cover_book: cover_book,
                },
            });

            const stok = await prisma.stok.create({
                data: {
                    id_book: book.id_book,
                    total_stok_book: parseInt(body.total_stok_book),
                },
            });

            return {
                status: true,
                code: 201,
                message: "Book added successfully",
                data: book,
            };
        } catch (error) {
            console.error("book addBook module Error: ", error);
            return {
                status: false,
                error,
            };
        }
    };

    getBook = async (body) => {
        try {
            const book = await prisma.books.findMany({});

            return {
                status: true,
                code: 200,
                message: "Get data book success",
                data: book,
            };
        } catch (error) {
            console.error("book getBook module Error: ", error);
            return {
                status: false,
                error,
            };
        }
    };

    getAvalaibleBook = async (body) => {
        try {
            const stok = await prisma.stok.findMany({
                where: {
                    total_stok_book: {
                        gt: 0,
                    },
                },
            });

            let books = [];
            for (let i = 0; i < stok.length; i++) {
                const book = await prisma.books.findMany({
                    where: {
                        id_book: stok[i].id_book,
                    },
                });
                books.push(book);
                books[i].push(stok[i]);
            }

            return {
                status: true,
                code: 200,
                message: "Get available data book success",
                data: books,
            };
        } catch (error) {
            console.error("book getAvalaibleBook module Error: ", error);
            return {
                status: false,
                error,
            };
        }
    };

    deleteBook = async (body) => {
        try {
            const deleteBook = await prisma.books.delete({
                where: {
                    id_book: parseInt(body),
                },
            });

            if (deleteBook.cover_book) {
                fs.unlinkSync(`./public/images/${deleteBook.cover_book}`);
            }

            return {
                status: true,
                code: 200,
                message: "Book deleted successfully",
            };
        } catch (error) {
            console.error("book deleteBook module Error: ", error);
            return {
                status: false,
                error,
            };
        }
    };
}

module.exports = new _book();
