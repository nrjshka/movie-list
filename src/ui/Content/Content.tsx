import styled from 'styled-components'

import { Layout } from 'antd'

const Content = styled(Layout.Content)`
  padding: 20px 0;

  background-color: ${({ theme }) => theme.colors.layoutBackground};
`

export { Content }
