import styled from 'styled-components'

export const Container = styled.header`
  height: 5.4rem;

  position: absolute;
  top: 4rem;
  left: 1.6rem;
  right: 1.6rem;

  background-color: ${(props) => props.theme['gray-50']};

  img {
    height: 100%;
  }
`
