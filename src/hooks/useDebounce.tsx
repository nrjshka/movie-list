import { useEffect, useState } from 'react'

function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handlerId = setTimeout(() => setDebouncedValue(value), delay)

    return () => clearTimeout(handlerId)
  }, [value, delay])

  return debouncedValue
}

export { useDebounce }
