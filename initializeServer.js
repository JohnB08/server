import { pool as db } from "./db.js";
const initializeServer = async () => {
    try {
        await db.query("CREATE TABLE highscores(userName VARCHAR(255), highScore INT)");
    }
    catch (error) {
        console.log(error);
    }
};
await initializeServer();
