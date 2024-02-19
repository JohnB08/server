import {pool as db} from "../../db/db.js"

export const updateHighScore = async(username: string, highScore: number, difficulty: string)=>{
    try{
        const data = await db.query(`UPDATE ${difficulty} SET highScore = $2 WHERE userName = $1 RETURNING *`, [username, highScore])
        return {data, success: true}
    } catch (error){
        return {error, success: false}
    }
}