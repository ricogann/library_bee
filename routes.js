const authController = require("./controllers/auth.controller");
const bookController = require("./controllers/book.controller");
const stokController = require("./controllers/stok.controller");
const pinjamController = require("./controllers/pinjam.controller");
const pengembalianController = require("./controllers/pengembalian.controller");
const seederController = require("./controllers/seeder.controller");

const _routes = [
    ["auth", authController],
    ["book", bookController],
    ["stok", stokController],
    ["pinjam", pinjamController],
    ["pengembalian", pengembalianController],
    ["seeder", seederController],
];

const routes = (app) => {
    _routes.forEach((route) => {
        const [url, controller] = route;

        // http://localhost:8080/api
        app.use(`/api/${url}`, controller);
    });
};

module.exports = routes;
