import { en, no } from "naughty-words";
export const usernameChecker = (username) => {
    if (en.includes(username)) {
        return "Goodboy";
    }
    if (no.includes(username)) {
        return "Litlegut";
    }
    else
        return username;
};
