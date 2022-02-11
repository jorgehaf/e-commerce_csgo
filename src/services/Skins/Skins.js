import repository from "../../repository";

const skins = {

    getSkins: async () => {
        try {
            const skins = await repository.skins.getSkins();
            return skins;
        } catch (err) {
            console.log(err)
        }
    }

}

export default skins;