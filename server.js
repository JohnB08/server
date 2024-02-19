import express from "express";
import cors from "cors";
import { validateBody } from "./util/validateBody.js";
import { fetchUsername } from "./util/postgresFunctions/fetchUser.js";
import { updateHighScore } from "./util/postgresFunctions/updateUser.js";
import { postNewUser } from "./util/postgresFunctions/postUser.js";
import { fetchTopTen } from "./util/postgresFunctions/fetchTopTen.js";
import { usernameChecker } from "./util/sanitizeUsername.js";
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());
app.post("/setscore", async (req, res) => {
    const body = req.body;
    if (!validateBody(body)) {
        return res.status(401).json({ message: "Invalid Highscore" });
    }
    const { username, highscore, difficulty } = body;
    let sanitUsername = usernameChecker(username);
    const existingUsername = await fetchUsername(sanitUsername, difficulty);
    console.log(existingUsername);
    if (!existingUsername.success) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
    if (existingUsername.success && existingUsername.data?.rowCount === 0) {
        const setHighscore = await postNewUser(sanitUsername, highscore, difficulty);
        console.log(setHighscore);
        if (!setHighscore.success) {
            return res.status(500).json({ message: "Internal Server Error" });
        }
        return res.status(200).json({ message: "Highscore Set!" });
    }
    if (existingUsername.success && existingUsername.data?.rowCount) {
        const update = await updateHighScore(sanitUsername, highscore, difficulty);
        console.log(update);
        if (!update.success) {
            return res.status(500).json({ message: "Internal Server Error" });
        }
        return res.status(200).json({ message: "Highscore Set!" });
    }
});
app.post("/highscore", async (req, res) => {
    const { difficulty } = req.body;
    const data = await fetchTopTen(difficulty);
    console.log(data);
    if (!data.success) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
    return res.status(200).json({ message: "Success!", data: data.data?.rows });
});
app.listen(port, () => {
    console.log("server running");
});
