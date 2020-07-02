import useFakerGenerator from "faker"
import individualFaker from "faker/individualFaker"
import companyFaker from "faker/companyFaker"

const DATA_COUNT: number = 50

const Dashboard = () => {
  const {data: individualData } = useFakerGenerator({ count: DATA_COUNT, model: individualFaker})
  const { data } = useFakerGenerator({ count: DATA_COUNT, model: companyFaker})

  return (<div>
    
  </div>)
}

export default Dashboard
