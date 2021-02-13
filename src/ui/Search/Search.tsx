import React, { memo, useCallback } from 'react'
import { Input } from 'antd'

import { SearchProps } from './types'

const Search: React.FC<SearchProps> = memo(function Search({ onChange, ...props }) {
  const onChangeWrapper = useCallback((e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value), [onChange])

  return <Input.Search allowClear enterButton onChange={onChangeWrapper} {...props} />
})

export { Search }
