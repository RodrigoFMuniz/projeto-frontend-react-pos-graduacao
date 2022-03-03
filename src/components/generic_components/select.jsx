import {Row,Col,FormGroup,Label,Input} from 'reactstrap'
const SelectGeneric = (props)=>{
  return (
    <>
      <Row>
        <Col xs={props.size}>
          <FormGroup>
            <Label for={props.id}>
              {props.label}
            </Label>
            <Input
              id={props.id}
              name={props.label}
              type="select"
              onChange={props.onChange}
            >
              <option>-Selecione-</option>
              {props.iteravel.map((v,index)=>{
                return <option key={index} value={v.id}>{v.value}</option>
              })}
            </Input>
          </FormGroup>
        </Col>
      </Row>
    </>
  )
}

export default SelectGeneric






