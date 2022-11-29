import Aside from "../../components/aside/Aside";
import Header from "../../components/header/Header";
import "./ProfileScreen";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, RadarChart, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';


const data = [
    {
        name: '1',
        uv: 68,
        pv: 70,
    },
    {
        name: '2',
        uv: 69,
        pv: 70,
    },
    {
        name: '3',
        uv: 69,
        pv: 70,
    },
    {
        name: '4',
        uv: 69,
        pv: 70,
    },
    {
        name: '5',
        uv: 69,
        pv: 70,
    },
    {
        name: '6',
        uv: 69,
        pv: 70,
    },
    {
        name: '7',
        uv: 69,
        pv: 70,
    },
    {
        name: '8',
        uv: 69,
        pv: 70,
    },
    {
        name: '9',
        uv: 69,
        pv: 71,
    },
    {
        name: '10',
        uv: 70,
        pv: 72,

    },
];


const dataLine = [
    {
        pv: 10,
    },
    {
        day: 'L',
        pv: 25,
    },
    {
        day: 'M',
        pv: 15,
    },
    {
        day: 'M',
        pv: 20,
    },
    {
        day: 'J',
        pv: 10,
    },
    {
        day: 'V',
        pv: 35,
    },
    {
        day: 'S',
        pv: 16,
    },
    {
        day: 'D',
        pv: 23,
    },
    {
        pv: 45,
    },
];

const dataRadar = [
    {
        subject: 'Math',
        A: 120,
        B: 110,
        fullMark: 150,
    },
    {
        subject: 'Chinese',
        A: 98,
        B: 130,
        fullMark: 150,
    },
    {
        subject: 'English',
        A: 86,
        B: 130,
        fullMark: 150,
    },
    {
        subject: 'Geography',
        A: 99,
        B: 100,
        fullMark: 150,
    },
    {
        subject: 'Physics',
        A: 85,
        B: 90,
        fullMark: 150,
    },
    {
        subject: 'History',
        A: 65,
        B: 85,
        fullMark: 150,
    },
];

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
                    <div className="content-graph">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart title="Activité quotidienne" width={700} height={300} data={data}>
                                <CartesianGrid strokeDasharray="2 2" />

                                <Bar radius={[20, 20, 0, 0]} barSize={7} name="Poids (kg)" dataKey="pv" stackId="a" fill="#282D30" />
                                <Bar radius={[20, 20, 0, 0]} barSize={7} name="Calories brûlées (kCal)" dataKey="uv" fill="#E60000" />

                                <XAxis dataKey="name" />
                                <YAxis type="number" interval="preserveStartEnd" domain={[dataMin => (getMinValueUv(data)), dataMax => (dataMax + 1)]} />

                                <Tooltip />
                                <Legend iconSize={"8px"} iconType="circle" verticalAlign="top" align="right" height={36} />

                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="group-bottom-graph">
                        <div>
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart title="Durée moyenne des sessions" width={250} height={250} data={dataLine}>
                                    <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
                                    <XAxis dataKey="day" />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                        <div>
                            <ResponsiveContainer width="100%" height="100%">
                                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={dataRadar}>
                                    <PolarGrid />
                                    <PolarAngleAxis dataKey="subject" />
                                    <PolarRadiusAxis />
                                    <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                                </RadarChart>
                            </ResponsiveContainer>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileScreen;