import React from 'react'

import { Search } from './index'

const Preview: React.FC = (props) => <Search {...props} />

export default {
  component: Search,
  title: 'Page/Search',
}

export { Preview }
