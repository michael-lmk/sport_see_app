import React, { useRef } from "react";
import { ResponsiveContainer, XAxis, Tooltip, LineChart, Line } from "recharts";
import PropTypes from "prop-types"

/**
 *  This component showing average sessions sport
 * @param {Object} dataLine data acout average sessions sport
 */
export default function MyLineChart({ dataLine }) {
  
  const ref = useRef(null);

  /**
   * Set the width in CSS property of before element for animate hovering of line chart
   * @param {*} day day hovering
   */
  const CustomCursor = (day) => {

    var r = document.querySelector(":root");

    r.style.setProperty("--width-r", `${day+15}px`);
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
    <div className="graph-bottom line-chart" ref={ref}>
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
            data={dataLine.sessions}
            onMouseLeave={onMouseLeaveLineChart}
            onMouseMove={onMouseEnterLineChart}
          >
            <Tooltip
              cursor={false}
              content={({ payload, coordinate }) => {
                CustomCursor(coordinate.x);
                return (
                  <div>
                    <p className="line-label">{payload[0]?.payload?.sessionLength}min</p>
                  </div>
                );
              }}
            />
            <Line
              dot={false}
              type="natural"
              dataKey="sessionLength"
              stroke="white"
              strokewidthL={1}
            />
            <XAxis
              tick={{ stroke: "white" }}
              axisLine={false}
              tickLine={false}
              dataKey={(data) => {
                const day = ["L", "M", "M", "J", "V", "S", "D"];
                return (
                  day[data.day-1]
                )
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

MyLineChart.propTypes = {
  /**
   * data line chart
   */
  dataLine: PropTypes.object.isRequired,

}