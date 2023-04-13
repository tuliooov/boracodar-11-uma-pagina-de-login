import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;

  padding: 1.6rem 2.4rem;
  outline: none;
  border: none;
  border-radius: 4px;

  font-weight: 700;

  background-color: ${(props) => props.theme['purple-700']};
  color: ${(props) => props.theme.white};

  cursor: pointer;
  transition: all 200ms linear;

  &:hover {
    background-color: ${(props) => props.theme['purple-500']};
  }
`
