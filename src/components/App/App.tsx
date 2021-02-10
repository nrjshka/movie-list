import React, { memo } from 'react'
import { Layout } from 'antd'

import { Header, PagesContainer, Content } from '../../ui'

import { MainPage } from '..'

const App: React.FC = memo(function App() {
  return (
    <PagesContainer>
      <Layout>
        <Header />
        <Content>
          <MainPage />
        </Content>
      </Layout>
    </PagesContainer>
  )
})

export { App }
