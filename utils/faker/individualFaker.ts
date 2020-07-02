import { FakerModel } from "./types"

const IndividualFakerModel: FakerModel = {
  model: {
    id: {
      type: "faker",
      value: "random.uuid"
    },
    date: {
      type: "faker",
      value: "date.between",
      options: ["2019-1-2", "2019-6-29"]
    },
    count: {
      type: "randomNumberBetween",
      value: [1, 50]
    }
  }
}

export default IndividualFakerModel
