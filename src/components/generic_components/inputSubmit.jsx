import { Input, Row, Col } from "reactstrap"

const SubmitInput = ({color, size, label, type})=>{
  return(
    <>
    <Row>
      <Col xs={size}>
        <Input color={color} value={label} size type={type} />
      </Col>
    </Row>
    </>
  )
}

export default SubmitInput