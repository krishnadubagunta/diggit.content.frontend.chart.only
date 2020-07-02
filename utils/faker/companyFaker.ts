import { FakerModel } from "./types"

const CompanyFakerModel: FakerModel = {
  model: {
    id: {
      type: "faker",
      value: "random.uuid"
    },
    date: {
      type: "faker",
      value: "date.month",
    },
    count: {
      type: "randomNumberBetween",
      value: [1, 50]
    }
  }
}

export default CompanyFakerModel
