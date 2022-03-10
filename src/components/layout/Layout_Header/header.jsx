import {Col} from 'reactstrap'
import { 
  HeaderContainer, 
  HeaderH1, 
  HeaderImg } from './header.styles'

const Header = ()=>{
  return(
    <HeaderContainer>
      <Col sm="8" md="8" xs="6">
        <HeaderH1>Ferramenta para geração de <span>Curriculum Vitae</span> personalizado</HeaderH1>
      </Col>
      <Col sm="4" md="4" xs="6">
        <HeaderImg src="https://media3.giphy.com/media/fOB70Fvjy8wauhkKSH/giphy.gif?cid=ecf05e47hqnwrr927h2spmen3jidkcmattefuzrpa12qc0c7&rid=giphy.gif&ct=g" alt="resume" />
      </Col>
    </HeaderContainer>
  )
}
export default Header





