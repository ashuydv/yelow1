/**
 * @param {string} query 
 */
export default function queryParser(query) {
    if (query.length === 0) return {};
    const queryObj = {};
    const queryArr = query.split(",");
    queryArr.forEach(query => {
        const val = query.split(":");
        if (val.length !== 2) return;
        const [key, value] = val;
        queryObj[key.toLowerCase()] = value.trim();
    });
    return queryObj;
}
