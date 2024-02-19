import { pool as db } from "../../db/db.js";
export const fetchTopTen = async (difficulty) => {
    try {
        const data = await db.query(`SELECT userName, highScore FROM ${difficulty} ORDER BY highScore DESC LIMIT 10`);
        return { data, success: true };
    }
    catch (error) {
        return { error, success: false };
    }
};
