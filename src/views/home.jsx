
import {Link} from '@reach/router'
import styled from 'styled-components'
import {Container,Row,Col} from 'reactstrap'
import FormInput from "../components/generic_components/input"
import Image from "../components/generic_components/img"
import Button from "../components/generic_components/btn"
import personal_data from '../assets/imgs/personal_data.jpg'

const Home = (props)=>{
  return (  
      <div>
        <CustomContainer>
          <Row>
              <Col>
                <Title>Dados Pessoais</Title>                
              </Col>
            </Row>
          <Row>
            <Col md="6" sm="12">
              <FormInput 
              placeholder={"Insira o seu nome"}
              type={"text"}
              size={"12"}
              label={"Nome"} />
              <FormInput 
              placeholder={"Insira o seu sobrenome"}
              type={"text"}
              size={"12"}
              label={"Sobrenome"} />
              <FormInput 
              placeholder={"Insira o seu email"}
              type={"email"}
              size={"12"}
              label={"Email"} />            
              <FormInput 
              placeholder={"Insira o seu telefone"}
              type={"tel"}
              size={"12"}
              label={"Telefone"} />
              <Button 
              size={"4"}
              type={"submit"}
              label={"+ Telefone"} />
            </Col>
            <Col md="6" sm="12" >
              <Image src={personal_data} alt={"personal_data"} />
            </Col>
          </Row>
          <Row>
            <Col sm="9"></Col>
            <Col sm="3">
              <CustomLink to='endereco'>Endereço</CustomLink>
            </Col>
          </Row>
        </CustomContainer>
      </div>
  )
}
export default Home;

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

