import { AreaChart, XAxis, YAxis, Tooltip, Area } from 'recharts'
import {
  DiggitChartComponent,
  DiggitChartProps,
  CustomTickFormatterComponent,
  CustomTickProps,
} from './types'

const PrimaryLinearGradient = () => (
  <linearGradient id="colorprimary" x1="0" y1="0" x2="0" y2="1">
    <stop
      offset="0%"
      stopColor="var(--primary-top-gradient-color)"
      stopOpacity={1}
    />
    <stop
      offset="100%"
      stopColor="var(--primary-bottom-gradient-color)"
      stopOpacity={0}
    />
  </linearGradient>
)

const SecondaryLinearGradient = () => (
  <linearGradient id="colorsecondary" x1="0" y1="0" x2="0" y2="1">
    <stop
      offset="0%"
      stopColor="var(--secondary-top-gradient-color)"
      stopOpacity={0.8}
    />
    <stop
      offset="100%"
      stopColor="var(--secondary-bottom-gradient-color)"
      stopOpacity={0}
    />
  </linearGradient>
)

const CustomTickXFormatter: CustomTickFormatterComponent = ({
  x,
  y,
  payload: { value },
}: CustomTickProps) => {
  return (
    <g transform={`translate(${x},${y})`} alignmentBaseline="central">
      <text
        x={0}
        y={0}
        dy={-25}
        fill="var(--secondary-text-color)"
        fontSize={12}
      >
        {value}
      </text>
    </g>
  )
}

const CustomTickYFormatter: CustomTickFormatterComponent = ({
  x,
  y,
  payload: { value },
}: CustomTickProps) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dx={-10}
        dy={-30}
        textAnchor="end"
        fill="var(--secondary-text-color)"
        fontSize={12}
      >
        {value}
      </text>
    </g>
  )
}

const DiggitChart: DiggitChartComponent = ({
  data,
  color,
}: DiggitChartProps) => {
  return (
    <AreaChart
      data={data}
      stackOffset="silhouette"
      height={350}
      width={1000}
      margin={{
        left: 16,
        right: 10,
      }}
    >
      <defs>
        <PrimaryLinearGradient />
        <SecondaryLinearGradient />
      </defs>
      <XAxis
        dataKey="date"
        interval="preserveStart"
        allowDuplicatedCategory={false}
        axisLine={false}
        tickLine={false}
        tick={(props: CustomTickProps) => <CustomTickXFormatter {...props} />}
      />
      <YAxis
        dataKey="count"
        interval="preserveStart"
        scale="linear"
        axisLine={false}
        tickLine={false}
        tick={(props: CustomTickProps) => <CustomTickYFormatter {...props} />}
      />
      <Tooltip />
      <Area
        type="basis"
        fillOpacity={1}
        dataKey="count"
        stroke="none"
        fill={`url(#color${color})`}
      />
    </AreaChart>
  )
}

export default DiggitChart
