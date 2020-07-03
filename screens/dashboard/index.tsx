import useFakerGenerator from 'diggitfaker'
import individualFaker from 'diggitfaker/individualFaker'
import companyFaker from 'diggitfaker/companyFaker'
import Chart from 'components/DiggitChart'
import LargeText from 'components/typography/LargeText'
import { Container, Row } from 'react-bootstrap'
import styles from './styles.module.css'

const DATA_COUNT = 50

const Dashboard = (): JSX.Element => {
  const { data: individualData } = useFakerGenerator({
    count: DATA_COUNT,
    model: individualFaker,
  })
  const { data: companyData } = useFakerGenerator({
    count: DATA_COUNT,
    model: companyFaker,
  })

  return (
    <Container>
      <Row noGutters className={styles.row}>
        <LargeText color="secondary">Individuals</LargeText>
        <Chart data={individualData} color="primary" />
      </Row>
      <Row noGutters className={styles.row}>
        <LargeText color="secondary">Companies</LargeText>
        <Chart data={companyData} color="secondary" />
      </Row>
    </Container>
  )
}

export default Dashboard
