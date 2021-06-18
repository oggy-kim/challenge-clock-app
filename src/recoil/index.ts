import { atom, selector, useRecoilValue } from "recoil";
import { getCurrentTime, getSunPosition } from "../api/timezone";
import { getRandomQuote } from "../api/quotes";
import { getMyPosition } from "../api/geolocation";

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

export const timeState = selector({
    key: 'timeState',
    get: async ({get}) => {
        const data = await getCurrentTime();
        return data;
    }
})

export const locationState = selector({
    key: 'locationState',
    get: async ({get}) => {
        get(timeState);
        const {client_ip } = await useRecoilValue(timeState);
        const { region, country } = await getMyPosition(client_ip);
        return { region, country };
    }
})

export const greetingState = selector({
    key: 'greetingState',
    get: async ({get}) => {
        get(timeState);
        const {client_ip } = await useRecoilValue(timeState);
        const { latitude, longitude } = await getMyPosition(client_ip);
        const { sunset, sunrise } = await getSunPosition(latitude, longitude);
        return { sunset, sunrise };
    }
})

