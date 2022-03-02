import resume from '../../assets/imgs/resume.jpg'
import styled from 'styled-components'
import {Col} from 'reactstrap'

const Header = ()=>{
  return(
    <HeaderContainer>
      <Col sm="12">
        <HeaderH1>Ferramenta para geração de <span>Curriculum Vitae</span> personalizado</HeaderH1>
      </Col>
      {/* <Col sm="4">
        <HeaderImg src={resume} alt="resume" />
      </Col> */}
    </HeaderContainer>
  )
}
export default Header

const HeaderContainer = styled.header`
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1rem;
  flex-wrap: wrap;
`
const HeaderImg = styled.img`
object-fit:cover;
max-width:30vw;
min-width:25vw;
margin-left:1rem;
width:100%;
`
const HeaderH1= styled.h1`
  font-size:3vw;
  max-width:30vw;
  margin-left:5%;
  span{
    color: #C59D10;
    
  }
`