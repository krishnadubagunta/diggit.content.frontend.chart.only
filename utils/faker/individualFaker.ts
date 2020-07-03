import { FakerModel } from './types'

const IndividualFakerModel: FakerModel = {
  model: {
    id: {
      type: 'faker',
      value: 'random.uuid',
    },
    date: {
      type: 'randomNumberBetween',
      value: [1546313014000, 1559359414000],
    },
    count: {
      type: 'randomNumberBetween',
      value: [1, 50],
    },
  },
}

export default IndividualFakerModel
