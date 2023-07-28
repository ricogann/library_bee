const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
    res.status(200).json({
        message:
            "yep, this works. you can use it now! :) i hope i can be the part of bee team!",
    });
});

routes(app);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
