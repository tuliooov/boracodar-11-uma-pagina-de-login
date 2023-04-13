import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'

import { Container } from './styles'

import { Input } from '../../../../components/Input'
import { Button } from '../../../../components/Button'

const loginFormValidationSchema = zod.object({
  email: zod
    .string({
      required_error: 'E-mail é obrigatório',
    })
    .email('Digite um e-mail válido'),
  password: zod.string().min(1, 'Senha é obrigatória'),
})

type LoginFormData = zod.infer<typeof loginFormValidationSchema>

export function LoginForm() {
  const loginForm = useForm<LoginFormData>({
    resolver: zodResolver(loginFormValidationSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  function handleLogin() {
    loginForm.reset()
  }

  return (
    <FormProvider {...loginForm}>
      <Container noValidate onSubmit={loginForm.handleSubmit(handleLogin)}>
        <Input
          label="E-mail"
          placeholder="Digite seu e-mail"
          onInvalid={() => console.log(123)}
          name="email"
          error={loginForm.formState.errors.email?.message}
        />
        <Input
          type="password"
          label="Senha"
          placeholder="Digite sua senha"
          name="password"
          error={loginForm.formState.errors.password?.message}
        />
        <Button label="Entrar" type="submit" />
      </Container>
    </FormProvider>
  )
}
