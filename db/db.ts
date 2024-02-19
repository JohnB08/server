import pkg from  "pg"

const {Pool} = pkg

export const pool = new Pool({
    user: "highscoredatabase_user",
    password: "XdWtGVjjaGFCzEpzjInKrZsQ7ykWuHwD",
    host: "dpg-cn9i9d8cmk4c73a07ekg-a",
    port: 5432,
    database: "highscoredatabase"
})