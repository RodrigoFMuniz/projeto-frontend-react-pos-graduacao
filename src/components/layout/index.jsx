// import styled from 'styled-components'
// import './index.css'
import Header from './header'
import Footer from './footer'

const Layout = ({children})=>{
  return (
    <>
      <Header />
        <main>
          {children}
        </main>
      <Footer />
    </>
  )
}
export default Layout;