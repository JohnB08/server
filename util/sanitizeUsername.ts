import {en, no} from "naughty-words"

const allBadWords = en.concat(no)

export const usernameChecker = (username: string) =>{
    let isUsernameBad = false
    allBadWords.forEach(badWord=>{
        if (username.includes(badWord)){
            isUsernameBad = true
        }
    })
   return isUsernameBad ? "GoodBoy" : username
}