import { AreaChart, XAxis, YAxis, Tooltip, Area } from "recharts"
import styles from "./diggitchart.module.css"
import { DiggitChartComponent, DiggitChartProps } from "./types";
import cx from "classnames"
import { sortBy, truncate } from "lodash";

const PrimaryLinearGradient = () => (<linearGradient id="colorprimary" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="var(--primary-top-gradient-color)" stopOpacity={1}/>
      <stop offset="100%" stopColor="var(--primary-bottom-gradient-color)" stopOpacity={0}/>
    </linearGradient>)

const SecondaryLinearGradient = () => (<linearGradient id="colorsecondary" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="100%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    )

const CustomTickFormatter = (props) => {
  return <div>text</div>
}

const DiggitChart: DiggitChartComponent = ({
  data,
  color
}: DiggitChartProps) => {
  return (<AreaChart data={data} height={300} width={700}>
  <defs>
    <PrimaryLinearGradient /> 
    <SecondaryLinearGradient />
  </defs>
  <XAxis dataKey="date" allowDuplicatedCategory={false} axisLine={false} tickLine={false} padding={{
    left: 30
  }} 
  />
  <YAxis dataKey="count" scale='linear' axisLine={false} tickLine={false} padding={{
    bottom: 30
  }} />
  <Tooltip />
  <Area
    type="basis"
    fillOpacity={1}
    dataKey="count"
    stroke="none"
    fill={`url(#color${color})`}
  />
</AreaChart>)}

export default DiggitChart
