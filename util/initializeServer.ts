import {pool as db} from "../db/db.js"

export const initializeServer = async(difficultyOption: difficulties)=>{
    console.log("Initializing Server")
    try{
        for (let tablenames of difficultyOption){
            const query = `CREATE TABLE IF NOT EXISTS ${tablenames} (userName VARCHAR(255), highScore INT)`
            await db.query(query)
        }
    } catch (error){
        console.log(error)
    }
    console.log("Complete")
}

export const difficultyOptions = [
    "easy", "medium", "hard", "veryHard", "apocalypse"
]


type difficulties = typeof difficultyOptions

console.log("initializing server")

await initializeServer(difficultyOptions)

console.log("initializing complete")

