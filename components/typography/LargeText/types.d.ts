import { PropsWithChildren, FunctionComponent } from 'react'

export interface LargeTextProps extends PropsWithChildren {
  color: 'primary' | 'secondary'
}

export type LargeTextComponentType = FunctionComponent<LargeTextProps>
