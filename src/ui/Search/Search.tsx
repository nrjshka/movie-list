import { Input } from 'antd'
import React, { memo } from 'react'

const Search: React.FC = memo(function Search() {
  return <Input.Search allowClear enterButton />
})

export { Search }
