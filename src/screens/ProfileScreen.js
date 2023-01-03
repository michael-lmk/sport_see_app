import Aside from "../components/Aside";
import Header from "../components/Header";
import "./ProfileScreen";

import "../";
import dataBar from "../data/datagraph1.json";
import dataLine from "../data/datagraph2.json";
import dataRadar from "../data/datagraph3.json";
import dataCircle from "../data/datagraph4.json";
import ItemRight from "../components/ItemRight";
import iconRight1 from "../assets/calories-icon.png";
import iconRight2 from "../assets/protein-icon.png";
import iconRight3 from "../assets/carbs-icon.png";
import iconRight4 from "../assets/fat-icon.png";

import { useRef } from "react";
import MyBarChart from "../components/MyBarChart";
import MyLineChart from "../components/MyLineChart";
import MyRadarChart from "../components/MyRadarChart";
import "../assets/css/ProfileScreen.css";
import MyCircleChart from "../components/MyCircleChart";

const ProfileScreen = ({ name }) => {
  return (
    <>
      <Header />
      <div className="content">
        <Aside />
        <div className="dashboard">
          <div className="content-text">
            <h1 className="name">
              Bonjours <span className="color-red">Thomas</span>
            </h1>
            <h3>Félicitation ! Vous avez explosé vos objectifs hier 👏</h3>
          </div>
          <div className="container-graph">
            <div className="left">
              <div style={{ padding: "14px", background: "#FBFBFB" }}>
                <MyBarChart data={dataBar} />
              </div>
              <div className="group-bottom-graph">
                <MyLineChart dataLine={dataLine} />

                <MyRadarChart dataRadar={dataRadar}/>
                
                <MyCircleChart dataCircle={dataCircle}/>
              </div>
            </div>
            <div className="right">
              <ItemRight
                type={"Calories"}
                qty={"1,930kCal"}
                icon={iconRight1}
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
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileScreen;

const CustomTooltip = ({ active, payload, label }) => {
  console.log(active);
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>

        <p className="desc">Anything you want can be displayed here.</p>
      </div>
    );
  }
};
