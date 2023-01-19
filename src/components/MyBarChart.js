import React, { useState, useEffect } from "react";
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
import PropTypes from "prop-types";

/**
 * this is a chart of daily activity
 * @param {Object} data data of chart
 * @returns
 */
export default function MyBarChart({ data }) {
  /**
   * Get the minimun of value in data given
   * @param {*} data date of bar chart
   * @returns minimum of value from data
   */
  const getMinValueUv = (data) => {
    let minus = data.reduce(function (prev, curr) {
      return prev.kilogram < curr.kilogram ? prev : curr;
    });

    return minus.kilogram - 1;
  };

  const getMinValue = (data) => {
    let min = data.reduce((prev, curr) => {
      return prev.kilogram < curr.kilogram ? prev : curr;
    });

    return min.kilogram;
  };

  const getMaxValue = (data) => {
    let max = data.reduce((prev, curr) => {
      return prev.calories > curr.calories ? prev : curr;
    });

    return max.calories;
  };

  let minKilo = 0;

  return (
    <div className="content-graph">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart title={"Activité quotidienne"} data={data.sessions}>
          <CartesianGrid horizontal={true} vertical={false} stroke="#DFE2E6" />

          <Bar
            radius={[20, 20, 0, 0]}
            barSize={7}
            name="Poids (kg)"
            dataKey="kilogram"
            fill="#282D30"
          />
          <Bar
            radius={[20, 20, 0, 0]}
            barSize={7}
            name="Calories brûlées (kCal)"
            dataKey="calories"
            fill="#E60000"
          />

          <XAxis
            tickMargin={15}
            tickLine={false}
            dataKey={(dataParams) => {
              return (
                data.sessions.findIndex((e) => dataParams.day === e.day) + 1
              );
            }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            type="number"
            interval="0"
            orientation="right"
            tickFormatter={(e, i) => {
              return getMinValue(data.sessions)+i;
            }}
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

MyBarChart.propTypes = {
  /**
   * Data bar chart
   */
  data: PropTypes.object.isRequired,
};
