import { InputHTMLAttributes, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { Eye, EyeSlash } from 'phosphor-react'

import { Container, InputWrapper, InvalidMessage, LabelWrapper } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
  error: string | undefined
}

export function Input({ label, type, name, error, ...inputProps }: InputProps) {
  const [hidden, setHidden] = useState(true)
  const { register } = useFormContext()

  const actualType = obtainInputActualType()
  const recoverPassword = <a href="#">Esqueceu a senha?</a>

  const Icon = hidden ? (
    <EyeSlash onClick={handleToggleHidden} />
  ) : (
    <Eye onClick={handleToggleHidden} />
  )

  function obtainInputActualType() {
    if (type !== 'password') {
      return type
    }

    return hidden ? 'password' : 'text'
  }

  function handleToggleHidden() {
    setHidden((prevValue) => !prevValue)
  }

  return (
    <Container>
      <LabelWrapper>
        <label htmlFor={name}>{label}</label>
        {type === 'password' ? recoverPassword : <></>}
      </LabelWrapper>
      <InputWrapper error={!!error}>
        <input
          type={actualType}
          id={name}
          {...inputProps}
          {...register(name)}
        />
        {type === 'password' ? Icon : <></>}
      </InputWrapper>
      {error && <InvalidMessage>{error}</InvalidMessage>}
    </Container>
  )
}
