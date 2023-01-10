import React from "react";
import {
  ResponsiveContainer,
  RadarChart,
  PolarAngleAxis,
  PolarGrid,
  Radar,
} from "recharts";
import PropTypes from "prop-types"

export default function myRadarChart({dataRadar}) {
  return (
    <div className="graph-bottom radar-chart">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={dataRadar}>
          <PolarGrid  radialLines={false} />

          <PolarAngleAxis axisLine={false} dataKey="subject" fontSize={10}/>
          <Radar name="Mike" dataKey="A" fill=" rgba(255, 1, 1, 0.7)" />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

myRadarChart.propTypes = {
  /**
   * Data of radar chart
   */
  dataRadar: PropTypes.array.isRequired,

}

