import React, { memo } from 'react'

import { useQueryParam, StringParam, withDefault } from 'use-query-params'

import { Search } from '../Search'

const SearchContainer = memo(function SearchContainer(props) {
  const [search, setSearch] = useQueryParam('q', withDefault(StringParam, ''))

  const onChange = (value: string) => setSearch(value, 'replaceIn')

  return <Search value={search} onChange={onChange} />
})

export { SearchContainer }
