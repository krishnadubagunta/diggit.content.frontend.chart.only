export interface IndividualFakerObject {
  id: string
  date: string
  count: number
}

export interface CompanyFakerObject {
  id: string
  date: string
  count: number
}

interface FakerInnerObject {
  type: string
  value: string | Array<string | number> | FakerInnerObject
  options?: Array<any>
}

export type ChartDataObject = Array<IndividualFakerObject>

export type FakerGenerator = ({
  count: number,
  model: FakerModel,
}) => {
  data: ChartDataObject
}

export interface FakerModel {
  model: {
    [x: string]: FakerInnerObject
  }
}
