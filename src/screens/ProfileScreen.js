import React, { useState, useEffect } from "react";
import Aside from "../components/Aside";
import Header from "../components/Header";
import dataBar from "../data/datagraph1.json";
import dataLine from "../data/datagraph2.json";
import dataRadar from "../data/datagraph3.json";
import dataUser from "../data/datagraph4.json";
import ItemRight from "../components/ItemRight";
import iconRight1 from "../assets/calories-icon.png";
import iconRight2 from "../assets/protein-icon.png";
import iconRight3 from "../assets/carbs-icon.png";
import iconRight4 from "../assets/fat-icon.png";
import MyBarChart from "../components/MyBarChart";
import MyLineChart from "../components/MyLineChart";
import MyRadarChart from "../components/MyRadarChart";
import MyCircleChart from "../components/MyCircleChart";
import "../assets/css/ProfileScreen.css";
import PropTypes from "prop-types"
import Model from "../model/Model";

/**
 * This component show profile screen
 */
const ProfileScreen = () => {
  const [isBackendData, setIsBackendData] = useState(true);
  const [userInfos, setUserInfos] = useState(null);
  const [barChartData, setBarChartData] = useState(null);
  const [lineChartData, setLineChartData] = useState(null);
  const [radarChartData, setRadarChartData] = useState(null);

  /**
   * Get data from back about user
   */
  const getInfoUserData = async () => {
    let model = new Model();
    let data = await model.fetchToApi("/user/18/");
    return data
  }

  /**
   * Get data from back about average sessions
   */
  const getLineChartData = async () => {
    let model = new Model();
    let data = await model.fetchToApi("/user/18/average-sessions");
    return data
  }

  /**
   * Get data from back about daily activity
   */
  const getBarChartData = async () => {
    let model = new Model();
    let data = await model.fetchToApi("/user/18/activity");
    return data
  }

  /**
   * Get data from back about performance
   */
  const getRadarChartData = async () => {
    let model = new Model();
    let data = await model.fetchToApi("/user/18/performance");
    return data
  }

  useEffect(() => {
    if (isBackendData) {
      getInfoUserData().then((result) => {

        setUserInfos(result);
      })
      getLineChartData().then((result) => {

        setLineChartData(result);
      })
      getBarChartData().then((result) => {

        setBarChartData(result);
      })
      getRadarChartData().then((result) => {

        setRadarChartData(result);
      })
    } else {
      setUserInfos(null);
      setLineChartData(null);
      setBarChartData(null);
      setRadarChartData(null);
    }
  }, [isBackendData])


  return (
    <>
      <Header />
      <div className="content">
        <Aside onPress={() => setIsBackendData(!isBackendData)} />
        <div className="dashboard">
          <div className="content-text">
            <h1 className="name">
              Bonjours <span className="color-red">{userInfos ? userInfos.data.userInfos.firstName : dataUser.data.userInfos.firstName}</span>
            </h1>
            <h3>Félicitation ! Vous avez explosé vos objectifs hier 👏</h3>
          </div>
          <div className="container-graph">
            <div className="left">
              <div className="bar-chart">
                <MyBarChart data={barChartData ? barChartData.data : dataBar} />
              </div>
              <div className="group-bottom-graph">
                <div className="graph-flex">
                  <MyLineChart dataLine={lineChartData ? lineChartData.data : dataLine} />
                </div>
                <div className="graph-flex">
                  <MyRadarChart dataRadar={radarChartData ? radarChartData.data : dataRadar} />
                </div>
                <div className="graph-flex">
                  <MyCircleChart dataCircle={userInfos ? userInfos : dataUser} />
                </div>
              </div>
            </div>
            <div className="right">
              <ItemRight
                type={"Calories"}
                qty={"1,930kCal"}
                icon={iconRight1}
                className={"first-item"}
              />
              <ItemRight
                type={"Calories"}
                qty={"1,930kCal"}
                icon={iconRight2}
              />
              <ItemRight
                type={"Calories"}
                qty={"1,930kCal"}
                icon={iconRight3}
              />
              <ItemRight
                type={"Calories"}
                qty={"1,930kCal"}
                icon={iconRight4}
                className={"last-item"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileScreen;

ProfileScreen.propTypes = {
  /**
   * User's name
   */
  name: PropTypes.string.isRequired,

}


