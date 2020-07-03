import '../styles/global.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import DiggitNavbar from 'components/Navbar'
import { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps): App {
  return (
    <Container fluid>
      <DiggitNavbar />
      <Component {...pageProps} />
    </Container>
  )
}
