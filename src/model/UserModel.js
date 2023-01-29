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
        this.id = null;
        this.score = 0;
        this.userInfos = {};
        this.error = true;
    }

    /**
     * 
     * @param {*} userId  Id of user's
     */
    async getDataForUser(userId) {
        await this.fetchToApi(`/user/${userId}/`)
            .then(({ data }) => {
                this.userInfos = data.userInfos;
                this.keyData = data.keyData;
                this.id = data.id;
                
                if (data?.todayScore) {
                    this.score = data.todayScore;
                } else {
                    this.score = data.score;
                }
                
                this.error = false;

            })
            .catch((error) => {
                this.error = true;
            });
    }
}

export default UserModel;