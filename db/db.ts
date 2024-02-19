import pkg from  "pg"

const {Pool} = pkg

const envFileVerifier = (envFile:string | undefined) =>{
    if (typeof envFile === "string") return envFile
    else return undefined
}

const envFilesArray = [process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, process.env.DATABASE_HOST, process.env.DATABASE_PORT, process.env.DATABASE_NAME]
const errorArray: any[] = []

const verifyAllEnv = () =>{
    envFilesArray.forEach(env=>{
        envFileVerifier(env) ? env : errorArray.push(new Error(`Issues with env file ${env}`))
    })
}

verifyAllEnv()

console.log(errorArray)

export const pool = new Pool({
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    database: process.env.DATABASE_NAME
})