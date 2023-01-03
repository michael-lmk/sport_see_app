import React from "react";
import { ResponsiveContainer, XAxis, Tooltip, LineChart, Line } from "recharts";
export default function MyLineChart({
  dataLine
}) {
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

    var r = document.querySelector(":root");

    r.style.setProperty("--width-r", `${widthL}%`);
  };

  const onMouseEnterLineChart = () => {
    var r = document.querySelector(":root");
    r.style.setProperty("--opacity-b", 0.1);
  };

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
      <div style={{ widthL: "100%", height: "80%" }}>
        <ResponsiveContainer widthL="100%" height="100%">
          <LineChart
            title="Durée moyenne des sessions"
            data={dataLine}
            onMouseLeave={onMouseLeaveLineChart}
            onMouseMove={onMouseEnterLineChart}
          >
            <Tooltip
              cursor={false}
              content={({ payload, coordinate }) => {
                CustomCursor(coordinate.x);

                return (
                  <div>
                    <p className="line-label">{payload[0]?.value}min</p>
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
