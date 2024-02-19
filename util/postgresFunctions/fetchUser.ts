import { pool as db } from "../../db/db.js";


export const fetchUsername = async( username: string, difficulty: string) =>{
    try{
        const data = await db.query(`SELECT * FROM ${difficulty} WHERE userName = '${username}'`)
        return{data, success:true}

    } catch (error){
        return{error, success:false}
    }
}