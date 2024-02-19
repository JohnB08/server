type Body = {
    username: string,
    highscore: number,
    difficulty: string
}
export const validateBody = (body: any):body is Body =>{
    return(
        typeof body === "object" &&
        typeof (body as Body).username === "string" &&
        typeof (body as Body).highscore === "number" &&
        typeof (body as Body).difficulty === "string"
    )
} 