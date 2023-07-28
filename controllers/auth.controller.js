const m$auth = require("../modules/auth.module");
const upload = require("../middlewares/multer");

const { Router } = require("express");
const response = require("../helpers/response");

const authController = Router();

authController.post(
    "/register",
    upload.single("avatar_member"),
    async (req, res) => {
        const result = await m$auth.register(req.body, req.file);

        return response.sendResponse(res, result);
    }
);

authController.delete("/destroy/:id", async (req, res) => {
    const result = await m$auth.destroy(req.params.id);

    return response.sendResponse(res, result);
});

authController.post("/login", async (req, res) => {
    const result = await m$auth.login(req.body);

    return response.sendResponse(res, result);
});

module.exports = authController;
