import React from "react";
import { ResponsiveContainer, XAxis, Tooltip, LineChart, Line } from "recharts";

export default function MyLineChart({ dataLine }) {
  const CustomCursor = (day) => {
    let widthL = 0;
    // console.log(coordX);
    switch (day) {
      case "L":
        widthL = 92;
        break;
      case "M":
        widthL = 78;
        break;
      case "M":
        widthL = 64;
        break;
      case "J":
        widthL = 50;
        break;
      case "V":
        widthL = 36;
        break;
      case "S":
        widthL = 22;
        break;
      case "D":
        widthL = 8;
        break;

      default:
        break;
    }

    var r = document.querySelector(":root");

    r.style.setProperty("--width-r", `${widthL}%`);
  };

  /**
   * Event on mouse enter modify opacity property css to 0.1
   */
  const onMouseEnterLineChart = () => {
    var r = document.querySelector(":root");
    r.style.setProperty("--opacity-b", 0.1);
  };

  /**
   * Event on mouse leave modify opacity property css to 0
   */
  const onMouseLeaveLineChart = () => {
    var r = document.querySelector(":root");
    r.style.setProperty("--opacity-b", 0);
  };

  return (
    <div className="graph-bottom line-chart">
      <div style={{ height: "30px" }}>
        <p className="title-graph2">
          <span>Durée moyenne des</span>
          {"\n"}
          <span>sessions</span>
        </p>
      </div>
      <div style={{ width: "100%", height: "80%" }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            title="Durée moyenne des sessions"
            data={dataLine}
            onMouseLeave={onMouseLeaveLineChart}
            onMouseMove={onMouseEnterLineChart}
          >
            <Tooltip
              cursor={false}
              content={(data) => {
                console.log(data);
                CustomCursor(data.label);

                return (
                  <div>
                    <p className="line-label">{data.payload[0]?.value}min</p>
                  </div>
                );
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
  );
}
