import {Item, Label, Value} from './presentation.styles'
const Presentation = ({data})=>{
  return(
    <>
    <hr />
      <Item><Label>Nome: </Label> <Value>{data.Nome}</Value></Item>
      <Item><Label>Sobrenome: </Label> <Value>{data.Sobrenome}</Value></Item>
      <Item><Label>Sexo: </Label> <Value>{data.Sexo}</Value></Item>
      <Item><Label>Prefixo: </Label> <Value>{data.abrev}</Value></Item>
      <Item><Label>Email: </Label> <Value>{data.Email}</Value></Item>
      <Item><Label>Telefone: </Label> <Value>{data.Telefone}</Value></Item>
      <hr />
    </>
  )
}
export default Presentation