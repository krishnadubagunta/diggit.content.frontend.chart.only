import { generateModel } from "fake-data-generator"
import { times } from "lodash"
import { useEffect, useState, useCallback, useMemo } from "react"
import { FakerModel } from "./types"

const useFakerGenerator = ({ count, model }: { count: number, model: FakerModel }) => {
  const [data, setData] = useState(null)
  const generateAndSetData = () => {
    const randomData = generateModel({
      amountArg: count,
      modelArg: model,
      inputType: 'object',
      outputType: 'object'
    })
    setData(randomData)
  }

  useEffect(() => {
    return generateAndSetData()
  }, [count, model])


  return {
    data
  }
}

export default useFakerGenerator
