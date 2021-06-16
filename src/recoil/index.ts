import { atom, selector } from "recoil";
import { getRandomQuote } from "../api/quotes";

// for refresh trigger
const _fetchQuoteTrigger = atom({
    key: '_fetchQuoteTrigger',
    default: 0
})

export const quoteState = selector({
    key: 'quoteState',
    get: async ({get}) => {
        get(_fetchQuoteTrigger);
        const { author, content } = await getRandomQuote();
        return { author, content };
    },
    set: ({set}) => {
        set(_fetchQuoteTrigger, v => v + 1)
    }
  });

