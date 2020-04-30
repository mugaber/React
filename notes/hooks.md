# Hooks

## Custom Hooks (reusable logic)

If we are using the same loginc in two different components or \
if the useEffect in a component became cluttery we can remove\
this logic to seperate custom hook that laverage both useState\
and useEffect and return what we want from state or setState\
then inside of the component we can destructure of the returns

- we return an array to name the destructured properties as we want

```
import { useState, useEffect } from 'react'

const useCustomHook = (url) => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url)
      const data = res.json()
      setData(data)
    }

    fetchData()
  }, [])

  return [data, setData]
}

const Component = () => {
  const myData = useCustomHook('url')

  return null
}
```
