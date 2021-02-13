import { useEffect, useState } from 'react'

function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handlerId = setTimeout(() => setDebouncedValue(value))

    return () => clearTimeout(handlerId)
  }, [value])

  return debouncedValue
}

export { useDebounce }
