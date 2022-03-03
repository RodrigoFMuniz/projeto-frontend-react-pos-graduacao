import {Link} from '@reach/router'
import styled from 'styled-components'
import {Container, Row, Col} from 'reactstrap'
import FormInput from "../components/generic_components/input"
import the_world from '../assets/imgs/the_world.jpg'
import Image from "../components/generic_components/img"

const Endereco = ()=>{
  return(
    <>
    <CustomContainer>
       <Row>            
            <Col>
              <Title>Endereço</Title>                
            </Col>      
          </Row>
          <Row>
            <Col md="6" sm="12" >
              <Image src={the_world} alt={"personal_data"} />
            </Col>
            <Col md="6" sm="12">
              <FormInput 
              placeholder={"Insira o seu CEP"}
              type={"search"}
              size={"6"}
              spr={8}
              label={"CEP"} />
              <FormInput 
              placeholder={"Insira o nome de sua rua"}
              type={"text"}
              size={"12"}
              label={"Rua"} />
              <FormInput 
              placeholder={"Insira o número de sua casa"}
              type={"number"}
              size={"6"}
              label={"Número"} />
              <FormInput 
              placeholder={"Bairro"}
              type={"text"}
              size={"12"}
              label={"Bairro"} />
              <FormInput 
              placeholder={"Cidade"}
              type={"text"}
              size={"12"}
              label={"Cidade"} />
              <FormInput 
              placeholder={"Estado"}
              type={"text"}
              size={"6"}
              label={"Estado"} />
              <FormInput 
              placeholder={"País"}
              type={"text"}
              size={"8"}
              label={"País"} />
            </Col>
          </Row>    
          <Row>
            <Col sm="3"> 
              <CustomLink to="../">Dados pessoais</CustomLink>
            </Col>
            <Col sm="6"></Col>
            <Col sm="3">
            <CustomLink to="qualificacao">Qualificação profissional</CustomLink>
            </Col>
          </Row>
        </CustomContainer>    
    </>
  )
}

export default Endereco

const Title = styled.div`
  font-size: 1.2rem;
  margin:1rem 0;
  color:#C59D10;
`
const CustomLink = styled(Link)`
  text-decoration:none;
  font-weight: bold;
  color: #6C63FF;
  :hover{
    color: #6C63aa;
  }
  :active{
    color: #6C63FF;
  }
`

const CustomContainer = styled(Container)`
  background-color: #FFFFFF;
  border-radius:10px;
  padding:1rem 1rem;
`