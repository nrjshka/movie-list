import React, { memo } from 'react'
import { Layout } from 'antd'

import { MainPage } from '..'

const App: React.FC = memo(function App() {
  return (
    <Layout>
      <Layout.Header>123</Layout.Header>
      <Layout.Content>
        <MainPage />
      </Layout.Content>
    </Layout>
  )
})

export { App }
