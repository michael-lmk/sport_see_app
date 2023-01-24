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
import PropTypes from "prop-types";
import Model from "../model/Model";
import { useParams } from "react-router-dom";

/**
 * This component show profile screen
 */
const ProfileScreen = () => {
  const {userId} = useParams();

  const [isBackendData, setIsBackendData] = useState(true);
  const [userInfos, setUserInfos] = useState(null);
  const [barChartData, setBarChartData] = useState(null);
  const [lineChartData, setLineChartData] = useState(null);
  const [radarChartData, setRadarChartData] = useState(null);
  const [erreurApi, setErreurApi] = useState(false);

  /**
   * Get data from back about user
   */
  const getInfoUserData = async () => {
    let model = new Model();
    await model.fetchToApi(`/user/${userId}/`);
    return model.data;
  };

  /**
   * Get data from back about average sessions
   */
  const getLineChartData = async () => {
    let model = new Model();
    await model.fetchToApi(`/user/${userId}/average-sessions`);
    return model.data;
  };

  /**
   * Get data from back about daily activity
   */
  const getBarChartData = async () => {
    let model = new Model();
    await model.fetchToApi(`/user/${userId}/activity`);
    return model.data;
  };

  /**
   * Get data from back about performance
   */
  const getRadarChartData = async () => {
    let model = new Model();
    await model.fetchToApi(`/user/${userId}/performance`);
    return model.data;
  };

  /**
   * This useEffect launch function for get data from backend and set data  in my useState hook
   */
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
  }, [isBackendData]);

  return (
    <>
      <Header />
      <div className="content">
        <Aside onPress={() => setIsBackendData(!isBackendData)} />
        <div className="dashboard">
          <div className="content-text">
            <h1 className="name">
              Bonjours{" "}
              <span className="color-red">
                {userInfos
                  ? userInfos.data.userInfos.firstName
                  : dataUser.data.userInfos.firstName}
              </span>
            </h1>
            <h3>Félicitation ! Vous avez explosé vos objectifs hier 👏</h3>
          </div>
          <div className="container-graph">
            {erreurApi? <h1>Impossible de récuperer les informations de l'utilisateur</h1> : null}
            <div className="left">
              <div className="bar-chart">
                <MyBarChart data={barChartData ? barChartData.data : dataBar} />
              </div>
              <div className="group-bottom-graph">
                <div className="graph-flex">
                  <MyLineChart
                    dataLine={lineChartData ? lineChartData.data : dataLine}
                  />
                </div>
                <div className="graph-flex">
                  <MyRadarChart
                    dataRadar={radarChartData ? radarChartData.data : dataRadar}
                  />
                </div>
                <div className="graph-flex">
                  <MyCircleChart
                    dataCircle={userInfos ? userInfos : dataUser}
                  />
                </div>
              </div>
            </div>
            <div className="right">
              <ItemRight
                type={"Calories"}
                qty={userInfos ?`${userInfos.data.keyData.calorieCount}kCal` : ""}
                icon={iconRight1}
                className={"first-item"}
              />
              <ItemRight
                type={"Proteines"}
                qty={userInfos ?`${userInfos.data.keyData.proteinCount}g` : ""}
                icon={iconRight2}
              />
              <ItemRight
                type={"Glucides"}
                qty={userInfos ?`${userInfos.data.keyData.carbohydrateCount}g` : ""}
                icon={iconRight3}
              />
              <ItemRight
                type={"Lipides"}
                qty={userInfos ?`${userInfos.data.keyData.lipidCount}g` : ""}
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

