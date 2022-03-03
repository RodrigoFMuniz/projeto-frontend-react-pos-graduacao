import { Row, Col } from "reactstrap"
import styled from "styled-components"

const ButtonGen = (props)=>{
  return(
    <>
    <Row>
      <Col xs={props.size}>
        <CustomButton type={props.type}>{props.label}</CustomButton>
      </Col>
    </Row>
    </>
  )
}
export default ButtonGen

const CustomButton = styled.button`
  background: none;
  border-radius:10px;
  border:none;
  outline:none;
  padding:10px 0;
  color:#C59D10;
`

