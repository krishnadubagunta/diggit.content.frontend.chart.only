import useFakerGenerator from "diggitfaker"
import individualFaker from "diggitfaker/individualFaker"
// import companyFaker from "faker/companyFaker"
import Chart from "components/DiggitChart"

const DATA_COUNT: number = 50

const Dashboard = () => {
  const { data: individualData } = useFakerGenerator({ count: DATA_COUNT, model: individualFaker})
  // const { data } = useFakerGenerator({ count: DATA_COUNT, model: companyFaker})

  console.log(individualData)

  return (<div>
    <Chart data={individualData} color='primary' />
  </div>)
}

export default Dashboard
