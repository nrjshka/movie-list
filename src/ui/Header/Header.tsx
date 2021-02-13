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
          <NavLink exact to="/watch" activeClassName="active">
            <Section>Watch Later</Section>
          </NavLink>
          <NavLink exact to="/favourite" activeClassName="active">
            <Section>Favourite</Section>
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
