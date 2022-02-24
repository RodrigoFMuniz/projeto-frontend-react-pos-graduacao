import resume from '../../assets/imgs/resume.svg'
import styled from 'styled-components'

const Layout = ({children})=>{
  return (
    <>
      <HeaderContainer>
        <HeaderH1>Ferramenta para geração de curriculum vitae personalizado</HeaderH1>
        <HeaderImg src={resume} alt="resume" />
      </HeaderContainer>
      <main>
        {children}
      </main>
      <Footer>
        Todos os direitos reservados
      </Footer>
    </>
  )
}
export default Layout
const HeaderContainer = styled.header`
  display:flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1.5rem 1rem;
`
const HeaderImg = styled.img`
max-width:30vw;
min-width:25vw;
margin-left:1rem;
max-width: 30vw;
min-width:30vw;
`
const HeaderH1= styled.h1`
  font-size:minmax(calc(2rem *0.8),2rem);
  max-width:30vw;
`

const Footer = styled.footer`
  width:100%;
  font-size:1.5rem;
  text-align:center;
  padding:10px;
  background-color:#8538E7;
  color:#fff;
`