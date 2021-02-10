import React, { memo } from 'react'
import { Layout } from 'antd'

import { Header } from '../../ui'

import { MainPage } from '..'

const App: React.FC = memo(function App() {
  return (
    <Layout>
      <Header />
      <Layout.Content>
        <MainPage />
      </Layout.Content>
    </Layout>
  )
})

export { App }
