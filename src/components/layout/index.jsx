// import styled from 'styled-components'
import {Container, Row} from 'reactstrap'
import Header from './Layout_Header/header'
import Footer from './Layout_Footer/footer'
import Logo from './Layout_Logo/logo'

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