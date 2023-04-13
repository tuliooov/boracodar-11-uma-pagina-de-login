import styled from 'styled-components'

interface InputWrapperProps {
  disabled?: boolean
  error: boolean
}

export const Container = styled.div`
  width: 100%;
`

export const InputWrapper = styled.div<InputWrapperProps>`
  width: 100%;
  padding: 1.6rem 1.2rem;

  border: 1px solid
    ${(props) =>
      props.error
        ? `${props.theme.error} !important`
        : props.theme['gray-200']};
  border-radius: 4px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  background-color: ${(props) => props.theme.white};
  opacity: ${(props) => (props.disabled ? 0.35 : 1)};

  transition: all 200ms linear;

  input {
    width: 100%;
    border: none;
    outline: none;

    font-weight: 400;
    font-size: 1.4rem;

    color: ${(props) => props.theme['gray-800']};

    &::placeholder {
      color: ${(props) => props.theme['gray-400']};
    }
  }

  svg {
    width: 2rem;
    height: 2rem;

    color: ${(props) => props.theme['gray-400']};
    cursor: pointer;
  }

  &:hover,
  &:focus-within {
    border-color: ${(props) => props.theme['purple-700']};
  }
`

export const LabelWrapper = styled.div`
  margin-bottom: 0.8rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  color: ${(props) => props.theme['gray-800']};

  label,
  a {
    font-weight: 600;
    font-size: 1.4rem;
  }
`

export const InvalidMessage = styled.span`
  font-size: 1.4rem;
  color: ${(props) => props.theme.error};
`
