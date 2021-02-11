import React, { memo } from 'react'
import { Layout } from 'antd'

import { Header, PagesContainer, Content } from '../../ui'

import { MovieList } from '..'
import { movieMockNowYouSee, moviewMockSuicide } from '../../models'

const App: React.FC = memo(function App() {
  return (
    <PagesContainer>
      <Layout>
        <Header />
        <Content>
          <MovieList movies={[moviewMockSuicide]} />
        </Content>
      </Layout>
    </PagesContainer>
  )
})

export { App }
