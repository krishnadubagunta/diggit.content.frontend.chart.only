import { ChartDataObject } from "diggitfaker/types"
import { FunctionComponent, PropsWithChildren } from "react"

export interface DiggitChartProps extends PropsWithChildren {
  data: ChartDataObject,
  color: 'primary' | 'secondary'
}

export type DiggitChartComponent = FunctionComponent<DiggitChartProps>
