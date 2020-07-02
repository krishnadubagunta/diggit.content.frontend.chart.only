import useFakerGenerator from "faker"
import individualFaker from "faker/individualFaker"
import companyFaker from "faker/companyFaker"

const DATA_COUNT: number = 50

const Dashboard = () => {
  const individualData = useFakerGenerator({ count: 50, model: individualFaker})
  const companyData = useFakerGenerator({ count: 50, model: companyFaker})

  return (<div>
    
  </div>)
}
