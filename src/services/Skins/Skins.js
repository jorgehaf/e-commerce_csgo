import axios from "axios";

const skins = {
    getSkins: () => {
        new Promise((resolve, reject) => {
            axios.get("apiFake.json").then((suc) => {
                resolve(suc.data)
            }).catch((err) => {
                reject(err)
            })

        });
    }

}

export default skins;