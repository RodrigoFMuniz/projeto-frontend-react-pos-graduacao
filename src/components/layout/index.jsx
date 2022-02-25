// import styled from 'styled-components'
import {Container, Row} from 'reactstrap'
import Header from './header'
import Footer from './footer'

const Layout = ({children})=>{
  return (
    <>
      <Container>
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