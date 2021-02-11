import React, { memo } from 'react'
import { Layout } from 'antd'

import { Header, PagesContainer, Content } from '../../ui'

import { MovieList } from '..'

const App: React.FC = memo(function App() {
  return (
    <PagesContainer>
      <Layout>
        <Header />
        <Content>
          <MovieList />
        </Content>
      </Layout>
    </PagesContainer>
  )
})

export { App }
