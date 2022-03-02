import personal_data from '../assets/imgs/personal_data.svg'
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
            {/* <Col sm="6">
              <Image src={personal_data} alt={"personal_data"} />
            </Col> */}
            <Col sm="8">
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
              size={"12"}
              label={"Número"} />
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
          </Row>
        </Container>
      </div>
  )
}
export default Home;
