import dayjs from "dayjs";

export const clockFormat = (date: Date) => {
    return dayjs(date).format('HH:mm');
}