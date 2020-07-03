import Navbar from 'react-bootstrap/Navbar'
import { Container } from 'react-bootstrap'
import styles from './styles.module.css'
import { NavbarProps, NavbarComponentType } from './types'

const DiggitNavbar: NavbarComponentType = (props: NavbarProps) => (
  <Container fluid className={styles.navbar} {...props}>
    <Navbar />
  </Container>
)

export default DiggitNavbar
