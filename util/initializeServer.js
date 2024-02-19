import { pool as db } from "../db/db.js";
const initializeServer = async (difficultyOption) => {
    try {
        for (let tablenames of difficultyOption) {
            const query = `CREATE TABLE IF NOT EXISTS ${tablenames} (userName VARCHAR(255), highScore INT)`;
            await db.query(query);
        }
    }
    catch (error) {
        console.log(error);
    }
};
export const difficultyOptions = [
    "easy", "medium", "hard", "veryHard", "apocalypse"
];
console.log("initializing server");
await initializeServer(difficultyOptions);
console.log("initializing complete");