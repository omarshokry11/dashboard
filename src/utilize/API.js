export const BaseURL = "https://fashi-server.herokuapp.com";

export default function API(endpoint, method = "GET", data = {}) {

    let body;

    if (method !== "GET" && method !== "DELETE") {
        body = new FormData();

        for(let k in data) {
            body.append(k, data[k]);
        }
    }

    return fetch(BaseURL + "/" + endpoint, {
            method,
            body,
            headers: {
                Authorization: localStorage.getItem("access-token")
            },
            mode: "cors"
    }).then(r => r.json().then(data => ({data, status: r.status})))
}