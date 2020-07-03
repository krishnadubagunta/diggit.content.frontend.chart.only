import Dashboard from 'screens/dashboard'
import { FunctionComponent, PropsWithChildren } from 'react'

type IndexProps = PropsWithChildren

const Index = (): FunctionComponent<IndexProps> => (
  <div>
    <Dashboard />
  </div>
)
export default Index
