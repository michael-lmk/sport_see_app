import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function MyBarChart({ data }) {
  /**
   * Get the minimun of value in data given 
   * @param {*} data date of bar chart
   * @returns minimum of value from data
   */
  const getMinValueUv = (data) => {
    let minus = data.reduce(function (prev, curr) {
      return prev.uv < curr.uv ? prev : curr;
    });
    return minus.uv - 1;
  };

  return (
    <div className="content-graph">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart title={"Activité quotidienne"} data={data}>
          <CartesianGrid horizontal={true} vertical={false} stroke="#DFE2E6" />

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
  );
}
