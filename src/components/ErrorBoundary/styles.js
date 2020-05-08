import styled from 'styled-components'

export const ErrorImageOverlay = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const ErrorImageContainer = styled.div`
  width: 40vh;
  height: 40vh;
  display: inline-block;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`

export const ErrorImageText = styled.h2`
  font-size: 24px;
  color: #2f8e89;
`
