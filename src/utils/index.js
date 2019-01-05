const API = 'https://hacker-news.firebaseio.com/v0/';

/**
 * returns the list of new stories' ids from hackernews
 */
export async function getNewStories() {
    try {
        const data = await fetch(`${API}newstories.json`);
        const json = await data.json();
        return json;
    } catch (e) {
        console.log(e);
        return null;
    }
}

/**
 * returns the hackernews story for the given id
 * @param {number} id
 */
export async function getStoryById(id) {
    try {
        const data = await fetch(`${API}item/${id}.json`);
        const json = await data.json();
        return json;
    } catch (e) {
        console.log(e);
        return null;
    }
}

/**
 * formats the time in more readable statement
 * @param {number} time
 * @param {string} unit
 */
const format = (time, unit) => (time > 1 ? `${time} ${unit}s ago` : `${time} ${unit} ago`);

/**
 * parses the unix time into closest minutes/hours/seconds
 * @param {number} time
 */
export function parseTime(time) {
    const diff = Date.now() / 1000 - Number(time);

    if (diff < 3600) {
        return format(Math.floor(diff / 60), ' minute');
    }
    if (diff < 86400) {
        return format(Math.floor(diff / 3600), ' hour');
    }
    return format(Math.floor(diff / 86400), ' day');
}
