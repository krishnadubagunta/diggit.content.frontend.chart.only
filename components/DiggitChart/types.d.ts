import { ChartDataObject } from 'diggitfaker/types'
import { FunctionComponent, PropsWithChildren } from 'react'

export interface DiggitChartProps extends PropsWithChildren {
  data: ChartDataObject
  color: 'primary' | 'secondary'
}

export interface CustomTickProps {
  x: number
  y: number
  payload: {
    value: string | any
  }
}

export type CustomTickFormatterComponent = FunctionComponent<CustomTickProps>

export type DiggitChartComponent = FunctionComponent<DiggitChartProps>
