import Aside from "../../components/aside/Aside";
import Header from "../../components/header/Header";
import "./ProfileScreen";
import { BarChart, Pie, PieChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, RadarChart, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, Customized } from 'recharts';
import "./ProfileScreen.css";
import data from "../../data/datagraph1.json"
import dataLine from "../../data/datagraph2.json"
import dataRadar from "../../data/datagraph3.json"
import dataCircle from "../../data/datagraph4.json"



const ProfileScreen = ({ name }) => {

    const getMinValueUv = (data) => {
        let minus = data.reduce(function (prev, curr) {
            return prev.uv < curr.uv ? prev : curr;
        });
        return minus.uv - 1;
    }

    return (
        <>
            <Header />
            <div className="content">
                <Aside />
                <div className="dashboard">
                    <div className="content-text">
                        <h1 className="name">Bonjours <span className="color-red">Thomas</span></h1>
                        <h3>Félicitation ! Vous avez explosé vos objectifs hier 👏</h3>
                    </div>
                    <div className="content-graph">

                        <BarChart title={"Activité quotidienne"} width={700} height={300} data={data}>

                            <CartesianGrid horizontal={true} vertical={false} stroke="#DFE2E6" />

                            <Bar radius={[20, 20, 0, 0]} barSize={7} name="Poids (kg)" dataKey="pv" stackId="a" fill="#282D30" />
                            <Bar radius={[20, 20, 0, 0]} barSize={7} name="Calories brûlées (kCal)" dataKey="uv" fill="#E60000" />

                            <XAxis tickMargin={10} tickLine={false} dataKey="name" />
                            <YAxis axisLine={false} tickLine={false} type="number" interval="preserveStartEnd" domain={[dataMin => (Math.round(getMinValueUv(data))), dataMax => (Math.round(dataMax + 1))]} orientation="right" />

                            <Tooltip />
                            <Legend iconSize={"8px"} iconType="circle" verticalAlign="top" align="right" height={36} />
                            <text className="title" x="60" y="11" color="#20253A" dominantBaseline="hanging" fontWeight="500">Activité quotidienne</text>
                        </BarChart>

                    </div>
                    <div className="group-bottom-graph">

                        <div className="graph-bottom line-chart" style={{ backgroundColor: "red" }}>
                            <LineChart title="Durée moyenne des sessions" width={300} height={250} data={dataLine}>
                                <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={1} />
                                <XAxis tick={{ stroke: 'white' }} axisLine={false} tickLine={false} label={{ fill: 'white' }} dataKey="day" />
                                <text className="title-graph2" x="30" y="25">
                                    <tspan x="30" dy="1.2em">Durée moyenne des</tspan>
                                    <tspan x="30" dy="1.2em">sessions</tspan>
                                </text>
                            </LineChart>
                        </div>


                        <div className="graph-bottom radar-chart" >
                            <RadarChart width={300} height={250} cx="50%" cy="50%" outerRadius="80%" data={dataRadar}>
                                <PolarGrid />
                                <PolarAngleAxis dataKey="subject" color="white" />
                                <Radar name="Mike" dataKey="A" fill=" rgba(255, 1, 1, 0.7)" fillOpacity={0.6} />
                            </RadarChart>
                        </div>
                        <div>
                            <PieChart width={730} height={250}>

                                <Pie data={dataCircle} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                            </PieChart>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileScreen;