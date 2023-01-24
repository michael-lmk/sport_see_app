import Model from "./Model.js";

/**
 * Class of model for get data
 */
class UserModel extends Model {

    constructor() {
        super();
        this.keyData = {
            calorieCount: 0,
            proteinCount: 0,
            carbohydrateCount: 0,
            lipidCount: 0
        };
        this.user_id = null;
        this.score = 0;
        this.userInfos = {};
        this.error = false;
    }

    /**
     * 
     * @param {*} userId  Id of user's
     */
    async getDataForUser(userId) {
        await this.fetchToApi(`/user/${userId}/`)
            .then(({data}) => {
                this.keyData = data.keyData;
                this.user_id = data.userId;
                this.score = data.score;
                this.userInfos = data.userInfos;
            })
            .catch((error) => {
                this.error = true;
            });
    }
}

export default UserModel;