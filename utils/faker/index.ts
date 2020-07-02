import { generateModel } from "fake-data-generator"
import { times } from "lodash-es"
import { useEffect, useState } from "react"
import { FakerModel } from "./types"

const useFakerGenerator = ({ count, model }: { count: number, model: FakerModel }) => {
  const [data, setData] = useState(null)
  const generateAndSetData = () => {
    const data = times(count, () => generateModel({
      amountArg: 1,
      modelArg: model
    }))
    setData(data)
  }

  const randomizeData = useEffect(() => {
    return generateAndSetData
  }, [count, model])

  useEffect(() => randomizeData(), [count, model])

  return {
    data,
    randomizeData
  }
}

export default useFakerGenerator
