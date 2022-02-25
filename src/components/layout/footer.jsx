import styled from 'styled-components'
// import './footer.css'

const Footer = ()=>{
  return (
  <FooterContent>
    Todos os direitos reservados
  </FooterContent>
  )
}
export default Footer;

const FooterContent = styled.footer`
  width:100%;
  font-size:120%;
  text-align:center;
  padding:10px;
  background-color:#8538e7;
  color:#fff;
  font-family:'Special Forces''Alata',sans-serif;
`

