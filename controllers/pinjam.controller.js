const m$pinjam = require("../modules/pinjam.module");

const { Router } = require("express");
const response = require("../helpers/response");
const authorization = require("../middlewares/authorization");

const pinjamController = Router();

pinjamController.post("/", authorization, async (req, res) => {
    const result = await m$pinjam.addPinjam(req.body);

    return response.sendResponse(res, result);
});

pinjamController.get("/", authorization, async (req, res) => {
    const result = await m$pinjam.getPinjam();

    return response.sendResponse(res, result);
});

module.exports = pinjamController;
