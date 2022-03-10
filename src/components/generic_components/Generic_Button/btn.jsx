import { Row, Col } from "reactstrap"
import { CustomButton } from "./btn.styles"

const ButtonCustom = (props)=>{
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
export default ButtonCustom


