export const showOneBoardResults = (cards, suits) => {
    const boards = loadCookie();
    if(boards.hasOwnProperty([cards+'X'+suits])) {
        return boards[cards+'X'+suits];
    }
    return [];
};
const loadCookie = () => {
    let data = {};
    const cookieData = document.cookie.split(';');
    if (cookieData[0]) {
        data = JSON.parse(unescape(cookieData[0]));
    }
    return data;
};
const setExpiresDate = () => {
    const today = Date.now();
    const nextday = new Date((today+60*60*1000*24));
    return nextday.toUTCString();
};
const saveCookie = (obj) => {
    document.cookie = escape(JSON.stringify(obj))
        + ';expires=' + setExpiresDate();
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
