import Aside from "../../components/aside/Aside";
import Header from "../../components/header/Header";
import "./ProfileScreen";
import {
  BarChart,
  Pie,
  PieChart,
  Label,
  ResponsiveContainer,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  RadarChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  Customized,
} from "recharts";
import "./ProfileScreen.css";
import data from "../../data/datagraph1.json";
import dataLine from "../../data/datagraph2.json";
import dataRadar from "../../data/datagraph3.json";
import dataCircle from "../../data/datagraph4.json";
import ItemRight from "../../components/itemRight/ItemRight";
import iconRight1 from "../../assets/calories-icon.png";
import iconRight2 from "../../assets/protein-icon.png";
import iconRight3 from "../../assets/carbs-icon.png";
import iconRight4 from "../../assets/fat-icon.png";
import CustomLabel from "../../components/customLabel/CustomLabel";
import { useRef } from "react";

const ProfileScreen = ({ name }) => {
  const toolRef = useRef();

  const getMinValueUv = (data) => {
    let minus = data.reduce(function (prev, curr) {
      return prev.uv < curr.uv ? prev : curr;
    });
    return minus.uv - 1;
  };
  const CustomCursor = (coordX) => {
    let widthL = 0;
    switch (coordX) {
      case 5:
        widthL = 92;
        break;
      case 41.666666666666664:
        widthL = 78;
        break;
      case 78.33333333333333:
        widthL = 64;
        break;
      case 115:
        widthL = 50;
        break;
      case 151.66666666666666:
        widthL = 36;
        break;
      case 188.33333333333331:
        widthL = 22;
        break;
      case 225:
        widthL = 8;
        break;

      default:
        break;
    }

    widthL = TransformWidthPourcent(widthL);
  
    var r = document.querySelector(':root');
   
    r.style.setProperty('--width-r',  `${widthL}%`);
    
  };

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
                <div className="content-graph">
                  <ResponsiveContainer widthL="100%" height="100%">
                    <BarChart title={"Activité quotidienne"} data={data}>
                      <CartesianGrid
                        horizontal={true}
                        vertical={false}
                        stroke="#DFE2E6"
                      />

                      <Bar
                        radius={[20, 20, 0, 0]}
                        barSize={7}
                        name="Poids (kg)"
                        dataKey="pv"
                        stackId="a"
                        fill="#282D30"
                      />
                      <Bar
                        radius={[20, 20, 0, 0]}
                        barSize={7}
                        name="Calories brûlées (kCal)"
                        dataKey="uv"
                        fill="#E60000"
                      />

                      <XAxis tickMargin={15} tickLine={false} dataKey="name" />
                      <YAxis
                        axisLine={false}
                        tickLine={false}
                        type="number"
                        interval="preserveStartEnd"
                        domain={[
                          (dataMin) => Math.round(getMinValueUv(data)),
                          (dataMax) => Math.round(dataMax + 1),
                        ]}
                        orientation="right"
                      />

                      <Tooltip
                        cursor={{
                          backgroundColor: "#C4C4C480",
                          opacity: 0.3,
                          zIndex: -20,
                        }}
                        content={({ active, payload, label }) => {
                          if (active && payload && payload.length) {
                            return (
                              <div className="custom-tooltip">
                                <p className="label">
                                  {payload[0].value}
                                  {payload[0].name.substring(
                                    payload[0].name.indexOf("(") + 1,
                                    payload[0].name.lastIndexOf(")")
                                  )}
                                </p>
                                <p className="label">
                                  {payload[1].value}
                                  {payload[1].name.substring(
                                    payload[1].name.indexOf("(") + 1,
                                    payload[1].name.lastIndexOf(")")
                                  )}
                                </p>
                              </div>
                            );
                          }

                          return null;
                        }}
                        itemStyle={{ color: "white" }}
                        contentStyle={{
                          backgroundColor: "red",
                          color: "white",
                        }}
                      />
                      <Legend
                        iconSize={"8px"}
                        iconType="circle"
                        verticalAlign="top"
                        align="right"
                        height={36}
                      />
                      <text
                        className="title"
                        x="60"
                        y="11"
                        color="#20253A"
                        dominantBaseline="hanging"
                        fontWeight="500"
                      >
                        Activité quotidienne
                      </text>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="group-bottom-graph">
                <div
                  className="graph-bottom line-chart"
                  
                >
                  <div style={{ height: "30px" }}>
                    <p className="title-graph2">
                      <span>Durée moyenne des</span>
                      {"\n"}
                      <span>sessions</span>
                    </p>
                  </div>
                  <div style={{ widthL: "100%", height: "80%" }}>
                    <ResponsiveContainer widthL="100%" height="100%">
                      <LineChart
                        title="Durée moyenne des sessions"
                        data={dataLine}
                      >
                        <Tooltip
                        cursor={false}
                          content={({ coordinate }) => {
                            CustomCursor(coordinate.x)
                          }}
                        />
                        <Line
                          dot={false}
                          type="natural"
                          dataKey="pv"
                          stroke="white"
                          strokewidthL={1}
                        />
                        <XAxis
                          tick={{ stroke: "white" }}
                          axisLine={false}
                          tickLine={false}
                          label={{ fill: "white" }}
                          dataKey="day"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="graph-bottom radar-chart">
                  <ResponsiveContainer widthL="100%" height="100%">
                    <RadarChart
                      cx="50%"
                      cy="50%"
                      outerRadius="80%"
                      data={dataRadar}
                    >
                      <PolarGrid />
                      <PolarAngleAxis
                        dataKey="subject"
                        color="white"
                        fontSize={12}
                      />
                      <Radar
                        name="Mike"
                        dataKey="A"
                        fill=" rgba(255, 1, 1, 0.7)"
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
                <div className="graph-bottom bg-circle">
                  <div className="circle-chart">
                    <ResponsiveContainer widthL="100%" height="100%">
                      <PieChart widthL={230} height={230}>
                        <text
                          className="graph4-value"
                          fill="#282D30"
                          x={120}
                          y={90}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          {dataCircle[0].value}%
                        </text>
                        <text
                          className="graph4-text"
                          fill="#74798C"
                          x={118}
                          y={110}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          de votre
                        </text>
                        <text
                          className="graph4-text"
                          fill="#74798C"
                          x={118}
                          y={130}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          objectif
                        </text>
                        <Pie
                          cornerRadius={10}
                          data={dataCircle}
                          cx="50%"
                          cy="50%"
                          dataKey="value"
                          innerRadius={65}
                          outerRadius={80}
                        >
                          {dataCircle.map((entry, index) => {
                            if (index === 1) {
                              return (
                                <Cell key={`cell-${index}`} fill="#f3f6f9" />
                              );
                            }
                            return <Cell key={`cell-${index}`} fill="red" />;
                          })}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
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
