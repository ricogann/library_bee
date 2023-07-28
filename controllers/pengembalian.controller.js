const m$pengembalian = require("../modules/pengembalian.module");

const { Router } = require("express");
const response = require("../helpers/response");
const authorization = require("../middlewares/authorization");

const pengembalianController = Router();

pengembalianController.post("/", authorization, async (req, res) => {
    const result = await m$pengembalian.addPengembalian(req.body);

    return response.sendResponse(res, result);
});

pengembalianController.put("/:id", authorization, async (req, res) => {
    const result = await m$pengembalian.updatePengembalian(
        req.params.id,
        req.body
    );

    return response.sendResponse(res, result);
});

pengembalianController.get("/", authorization, async (req, res) => {
    const result = await m$pengembalian.getPengembalian();

    return response.sendResponse(res, result);
});

module.exports = pengembalianController;
