const m$stok = require("../modules/stok.module");

const { Router } = require("express");
const response = require("../helpers/response");
const { stok } = require("../helpers/database");

const stokController = Router();

stokController.post("/", async (req, res) => {
    const result = await m$stok.addStok(req.body);

    return response.sendResponse(res, result);
});

stokController.put("/", async (req, res) => {
    const result = await m$stok.updateStok(req.body);

    return response.sendResponse(res, result);
});

module.exports = stokController;
