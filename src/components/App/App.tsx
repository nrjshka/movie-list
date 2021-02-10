import React, { memo } from 'react'
import { Layout } from 'antd'

import { Header, PagesContainer } from '../../ui'

import { MainPage } from '..'

const App: React.FC = memo(function App() {
  return (
    <PagesContainer>
      <Layout>
        <Header />
        <Layout.Content>
          <MainPage />
        </Layout.Content>
      </Layout>
    </PagesContainer>
  )
})

export { App }
