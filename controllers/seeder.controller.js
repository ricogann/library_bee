const m$seeder = require("../modules/seeder.module");

const { Router } = require("express");
const response = require("../helpers/response");

const seederController = Router();

seederController.get("/", async (req, res) => {
    const result = await m$seeder.migrateSeeder();

    return response.sendResponse(res, result);
});

module.exports = seederController;
