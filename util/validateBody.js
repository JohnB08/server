export const validateBody = (body) => {
    return (typeof body === "object" &&
        typeof body.username === "string" &&
        typeof body.highscore === "number" &&
        typeof body.difficulty === "string");
};
