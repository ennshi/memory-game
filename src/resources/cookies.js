export const showOneBoardResults = (cards, suits) => {
    const boards = loadCookie();
    if(boards.hasOwnProperty([cards+'X'+suits])) {
        return boards[cards+'X'+suits];
    }
    return [];
};
const loadCookie = () => {
    let data = null;
    const cookieData = document.cookie.split(';');
    if (cookieData[0]) {
        data = JSON.parse(unescape(cookieData[0]));
    }
    return data;
};
const saveCookie = (obj) => {
    const date = new Date(2020, 6, 20);
    document.cookie = escape(JSON.stringify(obj))
        + ';expires=' + date.toUTCString();
};
const sortListAndTake5Top = (list) => {
    const sortedArray = [...list].sort((a,b) => a.timer - b.timer);
    return sortedArray.slice(0, 4);
};
export const addChampionToCookie = (champion) => {
    const { cards, suits } = champion;
    let champList = loadCookie();
    let newChampList = {};
    if(!champList) {
        newChampList[cards+'X'+suits] = [champion];
    } else {
        Object.assign(newChampList, champList);
        if(newChampList.hasOwnProperty([cards+'X'+suits])) {
            newChampList[cards+'X'+suits].push(champion);
            newChampList[cards+'X'+suits] = sortListAndTake5Top(newChampList[cards+'X'+suits]);
        } else {
            newChampList[cards+'X'+suits] = [champion];
        }
    }
    saveCookie(newChampList);
};
