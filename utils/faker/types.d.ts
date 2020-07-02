export interface IndividualFakerObject {
  id: string,
  date: Date,
  count: number
}

interface FakerInnerObject {
  type: string,
  value: string,
  options?: Array<any>,
}

export interface FakerModel {
  [x:string]: FakerInnerObject
}
