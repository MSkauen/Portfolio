class HttpException extends Error {
    constructor(res, url) {
        super(`Error while loading ${url}: ${res.status} ${res.statusText}`);
        this.status = res.status;
    }
}

function checkResults(res, url) {
    if (!res.ok) {
        throw new HttpException(res, url);
    }
}

export async function fetchJson(url, options) {
    const res = await fetch(url, options);
    checkResults(res, url);
    return await res.json();
}
export async function postJson(url, json) {
    const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(json),
        headers: {
            "Content-Type": "application/json",
        },
    });

    checkResults(res, url);
}