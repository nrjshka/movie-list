import { Progress, Skeleton } from 'antd'
import styled from 'styled-components'

const PosterImg = styled.img`
  width: 100%;
  height: 100%;
  max-height: 300px;

  object-fit: cover;
  vertical-align: top;
`

const SkeletonImage = styled(Skeleton.Image)`
  width: 100%;

  &&& > * {
    width: 100%;
    height: auto;
    max-height: 300px;
  }
`

const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
`

const Overview = styled.p`
  display: -webkit-box;

  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;

  overflow: hidden;
  text-overflow: ellipsis;
`

const StyledProgress = styled(Progress)`
  position: absolute;
  bottom: 65px;
  right: 24px;

  &&& .ant-progress-text {
    color: #1890ff;
    font-weight: bold;
  }
`

export { PosterImg, Title, Overview, SkeletonImage, StyledProgress }
