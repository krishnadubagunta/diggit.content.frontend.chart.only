import { FakerModel } from "./types"

const IndividualFakerModel: FakerModel = {
  id: {
    type: "faker",
    value: "random.uuid"
  },
  date: {
    type: "faker",
    value: "date.between",
    options: ["2019-01-01", "2019-12-31"]
  },
  count: {
    type: "randomNumberBetween",
    value: [1, 50]
  }
}

export default IndividualFakerModel
