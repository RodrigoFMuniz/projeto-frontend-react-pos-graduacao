import { Input,Form, FormGroup,Label,Row,Col } from "reactstrap";
// import styled from "styled-components";

const FormInput = ({onChange,placeholder, type, label, size, spr, value})=>{
  return (
    <>
        <Row>
          <Col xs={size}>
            <Form inline>
            <FormGroup floating>
            <Input
                id={label}
                name={label}
                placeholder={placeholder}
                type={type}
                value={value}
                maxLength={spr}
                onChange = {onChange}
              />
              <Label for={label}>
                {label}
              </Label>
            </FormGroup>
            {' '}
            </Form>
          </Col>
        </Row>
    </>
  )
}
export default FormInput
