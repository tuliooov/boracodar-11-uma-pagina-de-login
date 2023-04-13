import { Container, LoginWrapper } from './styles'

import { Header } from './components/Header'
import { LoginForm } from './components/LoginForm'
import { Footer } from './components/Footer'

export function Home() {
  return (
    <Container>
      <Header />
      <LoginWrapper>
        <h2>Acesse a plataforma</h2>
        <h3>
          Faça login ou registre-se para começar a construir seus projetos ainda
          hoje.
        </h3>
        <LoginForm />
      </LoginWrapper>
      <Footer />
    </Container>
  )
}
