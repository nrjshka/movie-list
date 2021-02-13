import React, { memo, useEffect } from 'react'

import { useQueryParam, StringParam, withDefault } from 'use-query-params'

import { Search } from '../Search'

import { useDebounce } from '../../hooks'

const SearchContainer = memo(function SearchContainer() {
  const [search, setSearch] = useQueryParam('q', withDefault(StringParam, ''))

  const debouncedValue = useDebounce(search, 500)

  const onChange = (value: string) => setSearch(value, 'replaceIn')

  useEffect(() => {
    console.log('call', debouncedValue)
  }, [debouncedValue])

  return <Search value={search} onChange={onChange} />
})

export { SearchContainer }
