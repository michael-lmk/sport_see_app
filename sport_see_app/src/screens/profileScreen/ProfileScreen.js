import Aside from "../../components/aside/Aside";
import Header from "../../components/header/Header";
import "./ProfileScreen";
import { BarChart, Pie, PieChart, ResponsiveContainer, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, RadarChart, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, Customized } from 'recharts';
import "./ProfileScreen.css";
import data from "../../data/datagraph1.json"
import dataLine from "../../data/datagraph2.json"
import dataRadar from "../../data/datagraph3.json"
import dataCircle from "../../data/datagraph4.json"
import ItemRight from "../../components/itemRight/ItemRight"
import iconRight1 from "../../assets/calories-icon.png"
import iconRight2 from "../../assets/protein-icon.png"
import iconRight3 from "../../assets/carbs-icon.png"
import iconRight4 from "../../assets/fat-icon.png"


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
                    <div className="container-graph">
                        <div className="left">
                            <div className="content-graph">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart title={"Activité quotidienne"} data={data}>

                                        <CartesianGrid horizontal={true} vertical={false} stroke="#DFE2E6" />

                                        <Bar radius={[20, 20, 0, 0]} barSize={7} name="Poids (kg)" dataKey="pv" stackId="a" fill="#282D30" />
                                        <Bar radius={[20, 20, 0, 0]} barSize={7} name="Calories brûlées (kCal)" dataKey="uv" fill="#E60000" />

                                        <XAxis tickMargin={10} tickLine={false} dataKey="name" />
                                        <YAxis axisLine={false} tickLine={false} type="number" interval="preserveStartEnd" domain={[dataMin => (Math.round(getMinValueUv(data))), dataMax => (Math.round(dataMax + 1))]} orientation="right" />

                                        <Tooltip />
                                        <Legend iconSize={"8px"} iconType="circle" verticalAlign="top" align="right" height={36} />
                                        <text className="title" x="60" y="11" color="#20253A" dominantBaseline="hanging" fontWeight="500">Activité quotidienne</text>
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                            <div className="group-bottom-graph">

                                <div className="graph-bottom line-chart" style={{ backgroundColor: "red" }}>
                                    <div style={{ height: "30px" }}>
                                        <p className="title-graph2">
                                            <span>Durée moyenne des</span>{"\n"}
                                            <span>sessions</span>
                                        </p>
                                    </div>
                                    <div style={{ width: "100%", height: "80%" }}>
                                        <ResponsiveContainer width="100%" height="100%">

                                            <LineChart title="Durée moyenne des sessions" data={dataLine}>

                                                <Tooltip />
                                                <Line dot={false} type="natural" dataKey="pv" stroke="#8884d8" strokeWidth={1} />
                                                <XAxis tick={{ stroke: 'white' }} axisLine={false} tickLine={false} label={{ fill: 'white' }} dataKey="day" />

                                            </LineChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>


                                <div className="graph-bottom radar-chart" >
                                    <ResponsiveContainer width="100%" height="100%">
                                        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={dataRadar}>
                                            <PolarGrid />
                                            <PolarAngleAxis dataKey="subject" color="white" />
                                            <Radar name="Mike" dataKey="A" fill=" rgba(255, 1, 1, 0.7)" />
                                        </RadarChart>
                                    </ResponsiveContainer>
                                </div>
                                <div className="graph-bottom">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <PieChart>

                                            <Pie data={dataCircle} startAngle={0} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" >
                                                <Cell key={`cell-1`} fill={"red"} />
                                            </Pie>
                                        </PieChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <ItemRight type={"Calories"} qty={"1,930kCal"} icon={iconRight1}/>
                            <ItemRight type={"Calories"} qty={"1,930kCal"} icon={iconRight2}/>
                            <ItemRight type={"Calories"} qty={"1,930kCal"} icon={iconRight3}/>
                            <ItemRight type={"Calories"} qty={"1,930kCal"} icon={iconRight4}/>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileScreen;