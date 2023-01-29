import Model from "./Model.js";

/**
 * Class of model for get data
 */
class LineChartModel extends Model {

    constructor() {
        super();
        this.sessions = {};
        this.user_id = null;
        this.error = true;
    }

    /**
     * 
     * @param {*} userId  Id of user's
     */
    async getDataForLineChart(userId) {
        await this.fetchToApi(`/user/${userId}/average-sessions`)
            .then((res) => {
                this.sessions = res.data.sessions;
                this.user_id = res.data.userId;
                this.error = false;
            })
            .catch((error) => {
                this.error = true;
            });
    }
}

export default LineChartModel;