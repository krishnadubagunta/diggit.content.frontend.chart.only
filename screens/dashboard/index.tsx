import useFakerGenerator from "../../utils/faker"
import individualFaker from "../../utils/individualFaker"
import companyFaker from "../../utils/companyFaker"

const DATA_COUNT: number = 50

const Dashboard = () => {
  const individualData = useFakerGenerator({ count: 50, model: individualFaker})
  const companyData = useFakerGenerator({ count: 50, model: companyFaker})

  return (<div>
    
  </div>)
}
