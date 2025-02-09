import { Plan } from "@/app/model/plan";

const parseName = (dateStr: string): [number, number] => {
    const match = dateStr.match(/(\d+)년 (\d+)주차/);
    if (!match) throw new Error(`Invalid date format: ${dateStr}`);

    const [_, year, week] = match.map(Number);
    return [year, week];
};

const parseDate = (dateStr: string): [number, number, number] => {
    const dateNums = dateStr.split(".");
    const [year, month, day] = dateNums.map(Number);
    return [year, month, day];
};

export const sortByName = (date: Plan[], isDescending: boolean) => {
    const sortedData = [...date].sort((a, b) => {
        const [yearA, weekA] = parseName(a.name);
        const [yearB, weekB] = parseName(b.name);

        if (isDescending) {
            if (yearA !== yearB) return yearB - yearA; // 연도 내림차순
            else return weekB - weekA; // 주 내림차순
        }

        if (yearA !== yearB) return yearA - yearB; // 연도 오름차순
        else return weekA - weekB; // 주 오름차순
    });

    return sortedData;
};

export const sortByDate = (
    date: Plan[],
    isDescending: boolean,
    type: "수정일자" | "작성일자"
) => {
    const sortedData = [...date].sort((a, b) => {
        const [yearA, monthA, dayA] = parseDate(
            type === "수정일자" ? a.lastModified : a.created
        );
        const [yearB, monthB, dayB] = parseDate(
            type === "수정일자" ? b.lastModified : b.created
        );

        if (isDescending) {
            if (yearA !== yearB) return yearB - yearA; // 연도 내림차순
            if (monthA !== monthB) return yearB - monthB; // 월 내림차순
            else return dayB - dayA; // 일 내림차순
        }

        if (yearA !== yearB) return yearA - yearB; // 연도 오름차순
        if (monthA !== monthB) return monthA - monthB; // 월 오름차순
        else return dayA - dayB; // 일 오름차순
    });

    return sortedData;
};

export const sortData = (name: string, data: Plan[], isDescending: boolean) => {
    switch (name) {
        case "이름":
            return sortByName(data, isDescending);
            break;
        case "수정일자":
            return sortByDate(data, isDescending, name);
            break;
        case "작성일자":
            return sortByDate(data, isDescending, name);
            break;
        default:
            console.log("Unknown log level.");
    }
};
