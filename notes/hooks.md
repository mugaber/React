# Hooks

## Effect hook ( useEffect )

useEffect is a React hook where you can apply side effects, \
for example, getting data from server.

The first argument is a callback that will be fired after browser\
layout and paint. Therefore it does not block the painting process of the browser.

The second argument is an array of values (usually props).

If any of the value in the array changes, the callback will be fired after every render.\
When it's not present, the callback will always be fired after every render.\
When it's an empty list, the callback will only be fired once, similar to componentDidMount.\

When you return a function in the callback passed to useEffect,\
the returned function will be called before the component is removed from the UI.

## Custom Hooks (reusable logic)

If we are using the same logic in two different components or \
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
