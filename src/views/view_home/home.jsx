import {useState, useEffect } from 'react'
import Presentation from '../../components/mock_presentation'
import {getGender, getGenderCateg} from '../../services/home.service'
import { Title, CustomContainer, CustomLink } from './home.styles' //Refatorar
import {Row, Col, Button} from 'reactstrap'
import FormInput from "../../components/generic_components/generic_input/input"
import Image from "../../components/generic_components/generic_image/img"
import ButtonCustom from "../../components/generic_components/generic_button/btn"
import SelectGeneric from "../../components/generic_components/generic_select/select"
import personal_data from '../../assets/imgs/personal_data.jpg'

const Home = (props)=>{
  const [personalData, setPersonalData]=useState({})
  const [gender, setGender]=useState([])
  const [abrev, setAbrev]=useState([])
  const [showPresentation, setShowPresentation] = useState(false)
  const [enableButton, setEnableButton] = useState(false)

  const handleClick = ()=>{
    setShowPresentation(!showPresentation)
  }

  const handleChange = (e)=>{
    const {name, value} = e.target
    setPersonalData({
      ...personalData,
      [name]:value
    })
  }

  useEffect(()=>{
    const validateInputs =[
      'Nome',
      'Sobrenome',
      'Sexo',
      'abrev',
      'Email',
      'Telefone'
    ]
    const invalidForm = validateInputs.some((field)=> !personalData[field])
    setEnableButton(invalidForm)
  },[personalData])


  useEffect(()=>{
    ( async ()=>{
    const gender = await getGender()
    setGender(gender)
    setAbrev([])
    })()
  },[])

  useEffect(()=>{
    if(personalData?.Sexo){
      (async ()=>{
        const genderCateg = await getGenderCateg(personalData.Sexo)
        setAbrev(genderCateg)
      })()
    }
  },[personalData.Sexo])

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
              onChange={handleChange}/>
              <SelectGeneric 
              size={"4"}
              id={"abrev"}
              label={"abrev"}
              iteravel={abrev} 
              disabled = {abrev.length === 0}
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
                disabled={enableButton}
                onClick={handleClick}
                >
                Apresentar info
              </Button>
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              {showPresentation && (<Presentation data={personalData}/>)}
            </Col>
          </Row>
        </CustomContainer>
      </div>
  )
}
export default Home;

