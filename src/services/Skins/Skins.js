import axios from "axios";

const skins = {
    getSkins: () => {
        new Promise((resolve, reject) => {
            // http
            //     .post(url, payload)
            //     .then((suc) => {
            //         resolve(suc.data);
            //     })
            //     .catch((err) => {
            //         reject(err);
            //     });
            try {
                let resp = axios.get("apiFake.json");
                resolve(resp.data);
            } catch (error) {
                reject(error)
            }
        });
    }

}

export default skins;