async function fetchapi(apiPath) {
    var res = await fetch(apiPath);
    var records = await res.json();
    return records;
}

export default fetchapi;