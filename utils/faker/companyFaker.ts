import { FakerModel } from './types'

const CompanyFakerModel: FakerModel = {
  model: {
    id: {
      type: 'faker',
      value: 'random.uuid',
    },
    date: {
      type: 'randomNumberBetween',
      value: [1546462347000, 1561927947000],
    },
    count: {
      type: 'randomNumberBetween',
      value: [1, 50],
    },
  },
}

export default CompanyFakerModel
