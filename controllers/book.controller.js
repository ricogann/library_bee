const m$book = require("../modules/book.module");
const upload = require("../middlewares/multer");

const { Router } = require("express");
const response = require("../helpers/response");

const bookController = Router();

bookController.post("/", upload.single("cover_book"), async (req, res) => {
    const result = await m$book.addBook(req.body, req.file);

    return response.sendResponse(res, result);
});

bookController.get("/", async (req, res) => {
    const result = await m$book.getBook();

    return response.sendResponse(res, result);
});

bookController.delete("/:id", async (req, res) => {
    const result = await m$book.deleteBook(req.params.id);

    return response.sendResponse(res, result);
});

bookController.get("/available", async (req, res) => {
    const result = await m$book.getAvalaibleBook();

    return response.sendResponse(res, result);
});

module.exports = bookController;
