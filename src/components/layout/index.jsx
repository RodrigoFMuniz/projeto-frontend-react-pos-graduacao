// import styled from 'styled-components'
import {Container, Row} from 'reactstrap'
import Header from './layout_header/header'
import Footer from './layout_footer/footer'
import Logo from './layout_logo/logo'

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