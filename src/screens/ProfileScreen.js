import Aside from "../components/Aside";
import Header from "../components/Header";
import dataBar from "../data/datagraph1.json";
import dataLine from "../data/datagraph2.json";
import dataRadar from "../data/datagraph3.json";
import dataCircle from "../data/datagraph4.json";
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

const ProfileScreen = ({ name }) => {
  return (
    <>
      <Header />
      <div className="content">
        <Aside />
        <div className="dashboard">
          <div className="content-text">
            <h1 className="name">
              Bonjours <span className="color-red">{name}</span>
            </h1>
            <h3>Félicitation ! Vous avez explosé vos objectifs hier 👏</h3>
          </div>
          <div className="container-graph">
            <div className="left">
              <div className="bar-chart">
                <MyBarChart data={dataBar} />
              </div>
              <div className="group-bottom-graph">
                <div className="graph-flex">
                  <MyLineChart dataLine={dataLine} />
                </div>
                <div className="graph-flex">
                  <MyRadarChart dataRadar={dataRadar} />
                </div>
                <div className="graph-flex">
                  <MyCircleChart dataCircle={dataCircle} />
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

ProfileScreen.propTypes = {
  /**
   * User's name
   */
  name: PropTypes.string.isRequired,

}

export default ProfileScreen;
