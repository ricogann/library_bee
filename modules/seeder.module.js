const Joi = require("joi");
const prisma = require("../helpers/database");
const fs = require("fs");
const bcrypt = require("bcrypt");

class _seeder {
    migrateSeeder = async () => {
        try {
            const member = await prisma.member.createMany({
                data: [
                    {
                        name_member: "Rico Putra Anugerah",
                        email_member: "rico.putra95@gmail.com",
                        password_member: bcrypt.hashSync("123456", 10),
                        avatar_member: "1690528975492-avatar.png",
                    },
                    {
                        name_member: "bee.id",
                        email_member: "bee.id@gmail.com",
                        password_member: bcrypt.hashSync("beeid12", 10),
                        avatar_member: "1690528999717-avatar.png",
                    },
                    {
                        name_member: "seeder",
                        email_member: "seeder@gmail.com",
                        password_member: bcrypt.hashSync("seeder", 10),
                        avatar_member: "1690529036619-avatar.png",
                    },
                ],
            });

            const book = await prisma.books.createMany({
                data: [
                    {
                        title_book: "Astrofisika untuk Orang Sibuk",
                        isbn_book: "9786020616322",
                        date_published_book: new Date("2018-10-20"),
                        publisher_book: "Gramedia Pustaka Utama",
                        author_book: "Neil deGrasse Tyson",
                        description_book:
                            "Seperti apakah sifat dasar ruang dan waktu? Bagaimana kita menempatkan diri dalam alam semesta? Bagaimana alam semesta hadir dalam diri kita? Tidak ada yang lebih bisa menjawab pertanyaan ini daripada astrofisikawan terkemuka Neil deGrasse Tyson. Namun, sedikit dari kita yang punya waktu untuk memikirkan kosmos. Jadi, Tyson membawa alam semesta ke Bumi dengan ringkas dan jelas, dalam bab-bab yang bisa dilahap kapan pun dan di mana pun di sela-sela hari sibuk Anda.",
                        page_count_book: 160,
                        format_book: "ebook",
                        language_book: "Indonesian",
                        cover_book:
                            "1690530072935-astrofisikauntukorangsibuk.jpg",
                    },
                    {
                        title_book: "Bersandar pada Sains",
                        isbn_book: "9786230410697",
                        date_published_book: new Date("2022-12-19"),
                        publisher_book: "Bhuana Ilmu Populer",
                        author_book: "Joko Priyono",
                        description_book:
                            "Bagi sebagian orang, sains ibarat pengetahuan high class. Namun, se­sungguhnya bidang itu bersinggungan erat dengan keseharian kita. Sa­ngat dekat dengan kehidupan. Upaya Joko Priyono dalam membe­dahnya melalui sains populer di buku ini layak mendapatkan perhatian. — Triono Wahyu S",
                        page_count_book: 159,
                        format_book: "ebook",
                        language_book: "Indonesian",
                        cover_book:
                            "1690530140800-bersandarpadasains_cover.jpeg",
                    },
                    {
                        title_book: "What About The Big Stuff?",
                        isbn_book: "9781444727289",
                        date_published_book: new Date("2002-09-03"),
                        publisher_book: "Hodder & Stoughton",
                        author_book: "Richard Carlson",
                        description_book:
                            "Carlson's Don't Sweat series have given advice on tackling perceptions of and getting through life's annoying little problems. Rising above the small stuff in order to gain perspective helps find a more peaceful and fulfilled life. But what about the big problems? The book explores exactly that, suggesting ways of dealing with the incredibly difficult issues of life, including divorce, death of a loved one, financial setbacks, illness and difficulties at work.",
                        page_count_book: 304,
                        format_book: "ebook",
                        language_book: "English",
                        cover_book:
                            "1690530212726-whataboutthebigstuff_cover.jpg",
                    },
                    {
                        title_book: "Fear of Physics",
                        isbn_book: "9780465007134",
                        date_published_book: new Date("2007-07-30"),
                        publisher_book: "Basic Books",
                        author_book: "Lawrence M. Krauss",
                        description_book:
                            "Assume the cow is a sphere. So begins this lively, irreverent, and informative look at everything from the physics of boiling water to cutting-edge research at the observable limits of the universe. Rich with anecdotes and accessible examples, Fear of Physics nimbly ranges over the tools and thought behind the world of modern physics, taking the mystery out of what is essentially a very human intellectual endeavour.",
                        page_count_book: 288,
                        format_book: "ebook",
                        language_book: "English",
                        cover_book: "1690530278888-fearofphysics_cover.jpg",
                    },
                ],
            });

            const getBook = await prisma.books.findMany({});

            const stok = await prisma.stok.createMany({
                data: [
                    {
                        id_book: getBook[0].id_book,
                        total_stok_book: 10,
                    },
                    {
                        id_book: getBook[1].id_book,
                        total_stok_book: 20,
                    },
                    {
                        id_book: getBook[2].id_book,
                        total_stok_book: 23,
                    },
                    {
                        id_book: getBook[3].id_book,
                        total_stok_book: 14,
                    },
                ],
            });

            return {
                status: true,
                code: 201,
                message: "Seeder success",
            };
        } catch (error) {
            console.error("migrateSeeder seeder module Error: ", error);
            return {
                status: false,
                error,
            };
        }
    };
}

module.exports = new _seeder();
