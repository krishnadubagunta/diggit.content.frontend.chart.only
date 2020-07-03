import { FunctionComponent } from 'react'

export interface LargeTextProps {
  color: 'primary' | 'secondary'
  children: ReactNode
}

export type LargeTextComponentType = FunctionComponent<LargeTextProps>
