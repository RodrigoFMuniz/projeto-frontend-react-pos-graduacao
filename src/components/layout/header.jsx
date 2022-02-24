import resume from '../../assets/imgs/resume.svg'
import styled from 'styled-components'

const Header = ()=>{
  return(
    <HeaderContainer>
        <HeaderH1>Ferramenta para geração de <span>Curriculum Vitae</span> personalizado</HeaderH1>
        <HeaderImg src={resume} alt="resume" />
      </HeaderContainer>
  )
}
export default Header

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
  span{
    color: #C59D10;
  }
`