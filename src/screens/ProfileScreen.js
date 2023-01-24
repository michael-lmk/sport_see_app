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
import BarChartModel from "../model/BarChartModel";
import { useParams } from "react-router-dom";
import LineChartModel from "../model/LineChartModel";
import RadarChartModel from "../model/RadarChartModel";
import UserModel from "../model/UserModel";

/**
 * This component show profile screen
 */
const ProfileScreen = () => {
  const { userId } = useParams();

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
    let model = new UserModel();
    await model.getDataForUser(userId);
    console.log("------", model);
    return model;
  };


  /**
   * Get data from back about average sessions
   */
  const getLineChartData = async () => {
    let model = new LineChartModel();
    await model.getDataForLineChart(userId);

    return model;
  };

  /**
   * Get data from back about daily activity
   */
  const getBarChartData = async () => {
    let model = new BarChartModel();
    await model.getDataForBarChart(userId);

    return model;
  };

  /**
   * Get data from back about performance
   */
  const getRadarChartData = async () => {

    let model = new RadarChartModel();
    await model.getDataForRadarChart(userId);
    return model;
  };

  /**
   * This useEffect launch function for get data from backend and set data  in my useState hook
   */
  useEffect(() => {
    if (isBackendData && userId) {
    getBarChartData().then((result) => {
      setBarChartData(result);
    })
    getLineChartData().then((result) => {
      setLineChartData(result);
    })
    getRadarChartData().then((result) => {
      setRadarChartData(result);
    })
    getInfoUserData().then((result) => {
      setUserInfos(result);
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
                {/* {userInfos
                  ? userInfos.userInfos.firstName
                  : userInfos.userInfos.firstName} */}
              </span>
            </h1>
            <h3>Félicitation ! Vous avez explosé vos objectifs hier 👏</h3>
          </div>
          <div className="container-graph">
            {erreurApi ? <h1>Impossible de récuperer les informations de l'utilisateur</h1> : null}
            <div className="left">
              <div className="bar-chart">
                {barChartData?.error === false ?
                  <MyBarChart data={barChartData} />
                  :
                  <div>
                    <p>Problèmes lors de la récupération des données</p>
                  </div>
                }

              </div>
              <div className="group-bottom-graph">
                <div className="graph-flex">
                  {lineChartData?.error === false ?
                    <MyLineChart
                      dataLine={lineChartData}
                    />
                    :
                    <div>
                      <p>Problèmes lors de la récupération des données</p>
                    </div>
                  }
                </div>
                <div className="graph-flex">
                  {lineChartData?.error === false ?
                    <MyRadarChart
                      dataRadar={radarChartData}
                    />
                    :
                    <div>
                      <p>Problèmes lors de la récupération des données</p>
                    </div>
                  }
                </div>
                <div className="graph-flex">
                  {lineChartData?.error === false ?
                    <MyCircleChart
                      dataCircle={userInfos}
                    />
                    :
                    <div>
                      <p>Problèmes lors de la récupération des données</p>
                    </div>
                  }
                </div>
              </div>
            </div>
            <div className="right">
              <ItemRight
                type={"Calories"}
                qty={userInfos ? `${userInfos.keyData.calorieCount}kCal` : ""}
                icon={iconRight1}
                className={"first-item"}
              />
              <ItemRight
                type={"Proteines"}
                qty={userInfos ? `${userInfos.keyData.proteinCount}g` : ""}
                icon={iconRight2}
              />
              <ItemRight
                type={"Glucides"}
                qty={userInfos ? `${userInfos.keyData.carbohydrateCount}g` : ""}
                icon={iconRight3}
              />
              <ItemRight
                type={"Lipides"}
                qty={userInfos ? `${userInfos.keyData.lipidCount}g` : ""}
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

