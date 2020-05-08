import { useState, useEffect } from 'react'

export const useFetch = (url, specific) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url)
      let resData = await res.json()
      if (specific) resData = resData[0]
      setData(resData)
    }

    fetchData()
  }, [url, specific])

  return data
}
