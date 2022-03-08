// import styled from 'styled-components'
import {Container, Row} from 'reactstrap'
import Header from './header'
import Footer from './footer'
import Logo from './logo'

const Layout = ({children})=>{
  return (
    <>
      <Container>
        <Row>
           <Logo />
        </Row>
        <Row>
           <Header />
        </Row>
          <main>
            {children}
          </main>
        <Footer />
      </Container>
    </>
  )
}
export default Layout;