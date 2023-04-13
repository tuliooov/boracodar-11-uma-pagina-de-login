import styled from 'styled-components'

export const Container = styled.main`
  min-height: 100vh;
  padding: 11rem 1.6rem 1.6rem;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: inherit;

  @media (min-width: 416px) {
    max-width: 416px;
    margin: 0 auto;
  }

  @media (min-width: 832px) {
    flex-grow: 1;
  }
`

export const LoginWrapper = styled.section`
  h2 {
    font-weight: 700;
    font-size: 3.6rem;

    color: ${(props) => props.theme['gray-800']};
  }

  h3 {
    max-width: 35.1rem;
    margin: 1.6rem 0 4rem;

    font-weight: 400;
    font-size: 1.6rem;

    color: ${(props) => props.theme['gray-600']};
  }
`
