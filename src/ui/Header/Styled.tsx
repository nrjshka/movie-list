import styled from 'styled-components'

import { Layout } from 'antd'

const HeaderStyled = styled(Layout.Header)`
  background-color: ${({ theme }) => theme.colors.layoutBackground};
  height: auto;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
`

const Content = styled.div`
  display: flex;

  flex-direction: row;

  & > * {
    margin-right: 10px;

    &:last-child {
      margin-right: 0;
    }
  }
`

const Section = styled.div`
  display: flex;
`

export { HeaderStyled, Content, Container, Section }
