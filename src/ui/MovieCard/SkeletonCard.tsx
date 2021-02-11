import React, { memo } from 'react'

import { Card } from 'antd'

import { SkeletonImage } from './Styled'

const SkeletonCard = memo(function SkeletonCard() {
  return <Card loading cover={<SkeletonImage />} actions={Array(3)}></Card>
})

export { SkeletonCard }
