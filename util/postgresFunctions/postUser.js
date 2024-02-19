import { pool as db } from "../../db/db.js";
export const postNewUser = async (username, highscore, difficulty) => {
    try {
        const data = await db.query(`INSERT INTO ${difficulty} (userName, highScore) VALUES($1, $2) RETURNING *`, [username, highscore]);
        return { data, success: true };
    }
    catch (error) {
        return { error, success: false };
    }
};
