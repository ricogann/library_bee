const Joi = require("joi");
const prisma = require("../helpers/database");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fs = require("fs");

class _auth {
    login = async (body) => {
        try {
            //validation if the data exist or not.
            const schema = Joi.object({
                email_member: Joi.string().required(),
                password_member: Joi.string().required(),
            }).options({ abortEarly: false });

            const validation = schema.validate(body);

            if (validation.error) {
                const errorDetails = validation.error.details.map(
                    (detail) => detail.message
                );

                return { status: false, error: errorDetails.join(", ") };
            }

            //check if email exist
            const member = await prisma.member.findUnique({
                where: {
                    email_member: body.email_member,
                },
            });

            if (!member) {
                return {
                    status: false,
                    code: 404,
                    error: "Email not found",
                };
            }

            //check password
            if (
                !bcrypt.compareSync(
                    body.password_member,
                    member.password_member
                )
            ) {
                return {
                    status: false,
                    code: 401,
                    error: "Wrong password",
                };
            }

            const payload = {
                id_member: member.id_member,
                email_member: member.email_member,
                name_member: member.name_member,
            };

            const token = jwt.sign(payload, "jwt-secret-code", {
                expiresIn: "8h",
            });

            return {
                status: true,
                data: {
                    message: "Login success, here's your token",
                    token: token,
                },
            };
        } catch (error) {
            console.error("login auth module Error: ", error);
            return {
                status: false,
                error,
            };
        }
    };

    register = async (body, file) => {
        try {
            //validation if the data exist or not.
            const schema = Joi.object({
                name_member: Joi.string().required(),
                email_member: Joi.string().required(),
                password_member: Joi.string().required(),
            });

            const validation = schema.validate(body);
            const avatar_member = file ? file.filename : null;

            if (validation.error) {
                const errorDetails = validation.error.details.map(
                    (detail) => detail.message
                );

                return {
                    status: false,
                    code: 422,
                    error: errorDetails.join(", "),
                };
            }

            //hash password
            const password_member = bcrypt.hashSync(body.password_member, 10);

            //regis user
            const add = await prisma.member.create({
                data: {
                    name_member: body.name_member,
                    email_member: body.email_member,
                    password_member: password_member,
                    avatar_member: avatar_member,
                },
            });

            return {
                status: true,
                code: 201,
                message: "Register success",
            };
        } catch (error) {
            console.error("register auth module Error: ", error);
            return {
                status: false,
                error,
            };
        }
    };

    destroy = async (id_member) => {
        try {
            const destroy = await prisma.member.delete({
                where: {
                    id_member: parseInt(id_member),
                },
            });

            if (destroy.avatar_member) {
                fs.unlinkSync(`./public/images/${destroy.avatar_member}`);
            }
            return {
                status: true,
                code: 200,
                message: "Delete success",
            };
        } catch (error) {
            console.error("destroy auth module Error: ", error);
            return {
                status: false,
                error,
            };
        }
    };
}

module.exports = new _auth();
