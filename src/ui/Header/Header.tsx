import React, { memo } from 'react'

import { SearchContainer as Search } from './SearchContainer'

import { Content, Container, HeaderStyled, Section } from './Styled'

const Header = memo(function Header() {
  return (
    <HeaderStyled>
      <Container>
        <Content>
          <Section>Tranding</Section>
          <Section>Watch Later</Section>
          <Section>Favourite</Section>
        </Content>
        <Content>
          <Search />
        </Content>
      </Container>
    </HeaderStyled>
  )
})

export { Header }
