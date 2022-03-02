import resume from '../../assets/imgs/resume.jpg'
import styled from 'styled-components'
import {Col} from 'reactstrap'

const Header = ()=>{
  return(
    <HeaderContainer>
      <Col sm="6" md="6" xs="6">
        <HeaderH1>Ferramenta para geração de <span>Curriculum Vitae</span> personalizado</HeaderH1>
      </Col>
      <Col sm="6" md="6" xs="6">
        <HeaderImg src="https://media3.giphy.com/media/fOB70Fvjy8wauhkKSH/giphy.gif?cid=ecf05e47hqnwrr927h2spmen3jidkcmattefuzrpa12qc0c7&rid=giphy.gif&ct=g" alt="resume" />
      </Col>
    </HeaderContainer>
  )
}
export default Header

const HeaderContainer = styled.header`
  display:flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 1rem;
  flex-wrap: wrap;
  background-color: #E8F1FF;
`
const HeaderImg = styled.img`
max-width:calc(200px + 3vw);
object-fit:cover;
margin-left:1rem;

`
const HeaderH1= styled.h1`
  font-size:minmax(1.5vw,2.5vw);
  max-width:30vw;
  margin-left:5%;
  span{
    color: #C59D10;
    
  }
`