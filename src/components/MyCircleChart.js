import React from "react";
import { Pie, PieChart, ResponsiveContainer, Cell } from "recharts";
import PropTypes from "prop-types"

/**
 * This component showing progress score 
 * @param {Object} dataCircle data of progress score 
 * @returns 
 */
export default function MyCircleChart({ dataCircle }) {
  console.log(dataCircle.score);
  return (
    <div className="graph-bottom bg-circle">
      <div className="circle-chart">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <text
              className="graph4-value"
              fill="#282D30"
              x={"50%"}
              y={"40%"}
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {dataCircle.score * 100}%
            </text>
            <text
              className="graph4-text"
              fill="#74798C"
              x={"49%"}
              y={"50%"}
              textAnchor="middle"
              dominantBaseline="middle"
            >
              de votre
            </text>
            <text
              className="graph4-text"
              fill="#74798C"
              x={"49%"}
              y={"60%"}
              textAnchor="middle"
              dominantBaseline="middle"
            >
              objectif
            </text>
            <Pie
              data={[{ value: 1- dataCircle.score},{ value:  dataCircle.score }]}
              startAngle={180}
              endAngle={540}
              innerRadius={65}
              outerRadius={80}
              
              fill="#8884d8"
              dataKey="value"
            >

             
              <Cell key={`cell-0`} fill={"#f4f4f4"} />
              <Cell cornerRadius={40} key={`cell-0`} fill={"red"} />

            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

MyCircleChart.propTypes = {
  /**
   * data cicle chart
   */
  dataCircle: PropTypes.object.isRequired,

}