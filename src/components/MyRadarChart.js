import React from "react";
import {
  ResponsiveContainer,
  RadarChart,
  PolarAngleAxis,
  PolarGrid,
  Radar,
} from "recharts";

export default function myRadarChart({dataRadar}) {
  return (
    <div className="graph-bottom radar-chart">
      <ResponsiveContainer widthL="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={dataRadar}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" color="white" fontSize={12} />
          <Radar name="Mike" dataKey="A" fill=" rgba(255, 1, 1, 0.7)" />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
