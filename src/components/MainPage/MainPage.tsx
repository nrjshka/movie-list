import React, { memo } from 'react'

import { Col, Row } from 'antd'
import { MovieCard } from '../../ui'
import { movieMockNowYouSee, moviewMockSuicide } from '../../models'

const MainPage: React.FC = memo(function MainPage() {
  // @ts-ignore
  const mockArr = [...Array(10).keys()]

  return (
    <div>
      <Row justify="center" align="top" gutter={[16, 16]}>
        {mockArr.map((_, index) => (
          <Col key={index} xs={12} md={8} lg={6}>
            <MovieCard {...(index % 2 ? movieMockNowYouSee : moviewMockSuicide)} />
          </Col>
        ))}
      </Row>
    </div>
  )
})

export { MainPage }
