import React from "react";
import { Pie, PieChart, ResponsiveContainer, Cell } from "recharts";

export default function MyCircleChart({ dataCircle }) {
  return (
    <div className="graph-bottom bg-circle">
      <div className="circle-chart">
        <ResponsiveContainer widthL="100%" height="100%">
          <PieChart widthL={230} height={230}>
            <text
              className="graph4-value"
              fill="#282D30"
              x={130}
              y={100}
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {dataCircle[0].value}%
            </text>
            <text
              className="graph4-text"
              fill="#74798C"
              x={124}
              y={120}
              textAnchor="middle"
              dominantBaseline="middle"
            >
              de votre
            </text>
            <text
              className="graph4-text"
              fill="#74798C"
              x={124}
              y={140}
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
                  return <Cell key={`cell-${index}`} fill="#f3f6f9" />;
                }
                return <Cell key={`cell-${index}`} fill="red" />;
              })}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
