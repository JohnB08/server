import pkg from  "pg"

const {Pool} = pkg

const envFileVerifier = (envFile:string | undefined) =>{
    if (typeof envFile === "string" && envFile.length > 0) return true
    else return false
}

const envFilesArray = [{DATABASE_USER: process.env.DATABASE_USER}, {DATABASE_PASSWORD: process.env.DATABASE_PASSWORD}, {DATABASE_HOST: process.env.DATABASE_HOST}, {DATABASE_PORT: process.env.DATABASE_PORT}, {DATABASE_NAME: process.env.DATABASE_NAME}]
const errorArray: any[] = []

const verifyAllEnv = () =>{
    envFilesArray.forEach(env=>{
        Object.entries(env).forEach(entry=>{
            if (!envFileVerifier(entry[1])){
                errorArray.push(new Error(`Missing or wrong value at env file ${entry[0]}`))
            }
        })
    })
    console.log(errorArray)
}

verifyAllEnv()



export const pool = new Pool({
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    database: process.env.DATABASE_NAME
})