import axios from "axios";

// api : https://github.com/lukePeavey/quotable
export const getRandomQuote = async () => {
    const { data: {author, content }} = await axios.get(`https://api.quotable.io/random`);
    return { author, content};
}
