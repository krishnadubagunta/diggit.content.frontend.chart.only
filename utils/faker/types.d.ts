export interface IndividualFakerObject {
  id: string,
  date: string,
  count: number
}

export interface CompanyFakerObject {
  id: string,
  date: string,
  count: number
}

interface FakerInnerObject {
  type: string,
  value: string | Array<string | number>,
  options?: Array<any>,
}

export interface FakerModel {
  model: {
    [x:string]: FakerInnerObject
  }
}
