import constants from "../constants/Conf.js";

/**
 * Class of model for get data
 */
class Model {

  /**
   * @constructor
   * @param {Object} params
   */
  constructor() {
    this.data = {};
    this.error = false;
  }

  /**
   * Start process for get data from backend 
   * @param {string} path params of url 
   * @returns 
   */
  async fetchToApi(path) {
  
    let result = await fetch(constants.base_url+path)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log("erreur fetch to api : " + error);
    });

    this.data = result;
  }

}

export default Model;