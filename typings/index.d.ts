import {
  IndividualFakerObject,
  CompanyFakerObject,
  FakerModel,
} from '../utils/faker/types'

declare module 'fake-data-generator' {
  interface FakerDataGenerator {
    generateModel({
      amountArg: number,
      modelArg: FakerModel,
    }): Array<IndividualFakerObject | CompanyFakerObject>
  }
}
