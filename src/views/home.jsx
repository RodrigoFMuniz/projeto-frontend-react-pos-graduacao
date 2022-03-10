
import {useState, useEffect } from 'react'
import {Link} from '@reach/router'
import axios from 'axios'
import styled from 'styled-components'
import {Container,Row,Col, Button} from 'reactstrap'
import FormInput from "../components/generic_components/Generic_Input/input"
import Image from "../components/generic_components/Generic_Image/img"
import ButtonCustom from "../components/generic_components/Generic_Button/btn"
import SelectGeneric from "../components/generic_components/Generic_Select/select"
import personal_data from '../assets/imgs/personal_data.jpg'

const Home = (props)=>{
  const [personalData, setPersonalData]=useState({})
  const [gender, setGender]=useState([])
  const [abrev, setAbrev]=useState([])


  const getGender = async () => {
    const genderRes =  await axios.get("http://localhost:5000/gender")
    console.log(genderRes.data)
    setGender(genderRes.data)
  }

  const handleChangeGender = async(e)=>{
    const {name,value} = e.target 
    const genderCateg = await axios.get(`http://localhost:5000/prefix?gender_id=${value}`)
    setAbrev(genderCateg.data)
    setPersonalData({
      ...personalData,
      [name]:value
    })
  }

  const handleChange = (e)=>{
    const {name, value} = e.target
    setPersonalData({
      ...personalData,
      [name]:value
    })
  }

  useEffect(()=>{
    getGender()
  },[])

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
              type={"text"}
              size={"12"}
              label={"Nome"}
              onChange={handleChange} />
              <FormInput 
              type={"text"}
              size={"12"}
              label={"Sobrenome"}
              onChange={handleChange} />
              <SelectGeneric 
              size={"4"}
              id={"sexo"}
              label={"Sexo"}
              iteravel={gender} 
              onChange={handleChangeGender}/>
              <SelectGeneric 
              size={"4"}
              id={"abrev"}
              label={"abrev"}
              iteravel={abrev} 
              onChange={handleChange} />
              <FormInput 
              type={"email"}
              size={"12"}
              label={"Email"} 
              onChange={handleChange} />            
              <FormInput 
              type={"tel"}
              size={"12"}
              label={"Telefone"} 
              onChange={handleChange} />
              <ButtonCustom 
              size={"4"}
              type={"submit"}
              label={"+ Telefone"} 
              onChange={handleChange} />
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
          <Row>
            <Col xs="12">
              <Button
                color="danger"
                >
                Apresentar info
              </Button>
            </Col>
          </Row>
          <hr />
          {JSON.stringify(personalData)}
          <hr />
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

