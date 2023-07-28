const Joi = require("joi");
const prisma = require("../helpers/database");

class _stok {
    addStok = async (body) => {
        try {
            const schema = Joi.object({
                id_book: Joi.string().required(),
                total_stok_book: Joi.number().required(),
            });

            const validation = schema.validate(body);

            if (validation.error) {
                const errorDetails = validation.error.details.map(
                    (detail) => detail.message
                );

                return { status: false, error: errorDetails.join(", ") };
            }

            const stok = await prisma.stok.create({
                data: {
                    id_book: body.id_book,
                    total_stok_book: body.total_stok_book,
                },
            });

            return { status: true, code: 201, message: "Stok added" };
        } catch (error) {
            console.error("addStok stok module Error: ", error);
            return {
                status: false,
                error,
            };
        }
    };

    updateStok = async (body) => {
        try {
            const schema = Joi.object({
                id_book: Joi.number().required(),
                total_stok_book: Joi.number().required(),
            });

            const validation = schema.validate(body);

            if (validation.error) {
                const errorDetails = validation.error.details.map(
                    (detail) => detail.message
                );

                return { status: false, error: errorDetails.join(", ") };
            }

            const stok = await prisma.stok.update({
                where: {
                    id_book: body.id_book,
                },
                data: {
                    total_stok_book: body.total_stok_book,
                },
            });

            return { status: true, code: 201, message: "Stok updated" };
        } catch (error) {
            console.error("updateStok stok module Error: ", error);
            return {
                status: false,
                error,
            };
        }
    };
}

module.exports = new _stok();
