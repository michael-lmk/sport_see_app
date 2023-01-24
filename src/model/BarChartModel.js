import Model from "./Model.js";
/**
 * Class of model for get data
 */
class BarChartModel extends Model {


    /**
     * @constructor
     * @param {Object} params
     */
    constructor() {
        super();
        this.user_id = null;
        this.sessions = {};
        this.error = false;
    }

    /**
       * 
       * @param {*} userId  Id of user's
       */
    async getDataForBarChart(userId) {
        await this.fetchToApi(`/user/${userId}/activity`)
            .then((res) => {
                this.sessions = res.data.sessions;
                this.user_id = res.data.userId;
            })
            .catch((error) => {
                this.error = true;
            });
    }

}

export default BarChartModel;