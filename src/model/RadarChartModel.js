import Model from "./Model.js";

/**
 * Class of model for get data
 */
class RadarChartModel extends Model {

    constructor() {
        super();
        this.kind = {};
        this.data = [];
        this.user_id = null;
        this.error = true;
    }

    /**
     * 
     * @param {*} userId  Id of user's
     */
    async getDataForRadarChart(userId) {
        await this.fetchToApi(`/user/${userId}/performance`)
            .then(({data}) => {
                this.kind = data.kind;
                this.data = data.data;
                this.user_id = data.userId;
                this.error = false;
            })
            .catch((error) => {
                this.error = true;
            });
    }
}

export default RadarChartModel;