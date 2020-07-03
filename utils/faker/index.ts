import { generateModel } from "fake-data-generator"
import { useEffect, useState } from "react"
import { FakerModel, ChartDataObject } from "./types"
import { map, sortBy, truncate } from 'lodash'

const transformData: ChartDataObject = (data) => map(data, ({ id, date, count }) => {
  const dateObj = new Date(date)
  const transformedMonth = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(dateObj)

  return {
    id,
    count,
    date: `${truncate(transformedMonth, { length: 3, omission: '' })}'${truncate(dateObj.getFullYear(), { length: 2, omission: '' })}`
  }
})

const sortData = (data) => sortBy(data, (eachData) => new Date(eachData.date))

const useFakerGenerator: ChartDataObject = ({ count, model }: { count: number, model: FakerModel }) => {
  const [data, setData] = useState<ChartDataObject | null>(null)
  const generateAndSetData = () => {
    const randomData = generateModel({
      amountArg: count,
      modelArg: model,
      inputType: 'object',
      outputType: 'object'
    })
    const sortedData = sortData(randomData)
    const transformedData = transformData(sortedData)
    setData(transformedData)
  }

  useEffect(() => {
    return generateAndSetData()
  }, [count, model])


  return {
    data
  }
}

export default useFakerGenerator
