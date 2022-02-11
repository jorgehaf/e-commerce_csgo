import axios from 'axios'

const client = {
    post: async (url, payload) => {
        return new Promise((resolve, reject) => {
            axios
                .post(url, payload)
                .then((suc) => {
                    resolve(suc.data);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },

    put: async (url, payload) => {
        return new Promise((resolve, reject) => {
            axios
                .put(url, payload)
                .then((suc) => {
                    resolve(suc.data);
                })
                .catch((err) => {
                    reject(err.response.data.errors);
                });
        });
    },

    get: (url, params) => {
        return new Promise((resolve, reject) => {
            axios
                .get(url, {
                    params: params
                })
                .then((suc) => {
                    resolve(suc.data);
                })
                .catch((err) => {
                    reject(err.response.data.errors);
                });
        });
    },
    delete: async (url, params) => {
        return new Promise((resolve, reject) => {
            axios
                .delete(url + "/" + params)
                .then((suc) => {
                    resolve(suc.data);
                })
                .catch((err) => {
                    reject(err.response.data.errors);
                });
        });
    },
};
export default client;