import React, { memo } from 'react'
import { Layout } from 'antd'

import { Header, PagesContainer, Content } from '../../ui'

import { MovieList, MainPage } from '..'
import { Switch, Route } from 'react-router-dom'

const App: React.FC = memo(function App() {
  return (
    <PagesContainer>
      <Layout>
        <Header />
        <Content>
          <Switch>
            <Route exact path="/:category(watch|like)" component={MovieList} />
            <Route path="*" component={MainPage} />
          </Switch>
        </Content>
      </Layout>
    </PagesContainer>
  )
})

export { App }
