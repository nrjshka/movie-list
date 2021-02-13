import { Tag } from 'antd'
import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

import { SearchContainer as Search } from './SearchContainer'

import { Content, Container, HeaderStyled, Section } from './Styled'

const Header = memo(function Header() {
  return (
    <HeaderStyled>
      <Container>
        <Content>
          <NavLink exact to="/" activeClassName="active">
            <Section>All</Section>
          </NavLink>
          <NavLink exact to="/watchLater" activeClassName="active">
            <Section>
              <div>Watch Later</div>
              {/* <div>
                <Tag color="purple">163</Tag>
              </div> */}
            </Section>
          </NavLink>
          <NavLink exact to="/favourite" activeClassName="active">
            <Section>
              <div>Favourite</div>
              {/* <div>
                <Tag color="purple">163</Tag>
              </div> */}
            </Section>
          </NavLink>
        </Content>
        <Content>
          <Search />
        </Content>
      </Container>
    </HeaderStyled>
  )
})

export { Header }
