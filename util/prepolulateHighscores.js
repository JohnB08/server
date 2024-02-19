import { difficultyOptions } from "./initializeServer.js";
import { postNewUser } from "./postgresFunctions/postUser.js";
const prepopulateServer = async (difficultyOptions) => {
    const testUser = { username: "John", highScore: 10 };
    for (let option of difficultyOptions) {
        const { username, highScore } = testUser;
        const data = await postNewUser(username, highScore, option);
        console.log(data);
    }
    console.log("users posted");
};
await prepopulateServer(difficultyOptions);
