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

  return (
    <div className="content-graph">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data.sessions}
          barGap={5}
          barCategoryGap={25}
          strokeDasharray="1 4"
        >
          <CartesianGrid vertical={false} />
          <YAxis
            yAxisId="right"
            type="number"
            tickCount={3}
            tickSize={"20"}
            tickLine={false}
            dataKey="kilogram"
            axisLine={false}
            orientation="right"
            tick={{ fontSize: 12 }}
            stroke="#74798C"
            domain={["dataMin-1","dataMin+1","dataMax+1"]}
          />
          <YAxis
            hide={true}
            yAxisId="left"
            orientation="left"
          />
          <XAxis
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 12 }}
            stroke="#74798C"
          />
          <Tooltip
            wrapperStyle={{ top: -50, left: 10 }}
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
          />
          <Legend
            wrapperStyle={{ paddingTop: "15px" }}
            // formatter={CustomLegendText}
            height={50}
            iconSize={8}
            iconType="circle"
            align="right"
            verticalAlign="top"
          />
          <Bar
          yAxisId="right"
            name="Poids (kg)"
            radius={[10, 10, 0, 0]}
            stroke-linejoin={10}
            barSize={10}
            maxBarSize={10}
            dataKey="kilogram"
            fill="#282D30"
          />
          <Bar
          yAxisId="left"
            name="Calories brûlées (kCal)"
            radius={[10, 10, 0, 0]}
            barSize={10}
            maxBarSize={10}
            dataKey="calories"
            fill="#E60000"
          />
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
