import client from "../config/client";

let skins = {
    getSkins: () => {
        return client.get("apiFake.json");
    },
};
export default skins;