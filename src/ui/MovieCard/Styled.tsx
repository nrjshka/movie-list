import styled from 'styled-components'

const PosterImg = styled.img`
  width: 100%;
  height: 100%;
  max-height: 300px;

  object-fit: cover;
  vertical-align: top;
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

export { PosterImg, Title, Overview }