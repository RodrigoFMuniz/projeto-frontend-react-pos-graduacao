import styled from 'styled-components'
import personal_data from '../assets/imgs/personal_data.jpg'
import the_world from '../assets/imgs/the_world.jpg'
// import {Link} from '@reach/router'
import {Container,Row,Col} from 'reactstrap'
import FormInput from "../components/generic_components/input"
import Image from "../components/generic_components/img"
import SubmitInput from "../components/generic_components/inputSubmit"

const Home = ()=>{
  return (  
      <div>
        {/* <Link to='sobre'>Sobre</Link> */}
        <Container>
          <Row>
            
              <Col>
              <hr />
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
              <SubmitInput 
              type={"submit"}
              size={"4"}
              label={"+ Telefone"}
              color={"warning"}
              />
            </Col>
            <Col md="6" sm="12" >
              <Image src={personal_data} alt={"personal_data"} />
            </Col>
          </Row>
          <Row>            
            <Col>
            <hr />
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
              size={"4"}
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
              size={"4"}
              label={"Estado"} />
              <FormInput 
              placeholder={"País"}
              type={"text"}
              size={"8"}
              label={"País"} />
            </Col>

          </Row>         
        </Container>
      </div>
  )
}
export default Home;

const Title = styled.div`
  font-size: 1.2rem;
  margin-bottom:2rem;
`
