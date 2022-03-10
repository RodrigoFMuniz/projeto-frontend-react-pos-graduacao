const Presentation = ({data})=>{
  return(
    <>
    <hr />
      <div>Nome: {data.Nome}</div>
      <div>Sobrenome: {data.Sobrenome}</div>
      <div>Sexo: {data.Sexo}</div>
      <div>Prefixo: {data.abrev}</div>
      <div>Email: {data.Email}</div>
      <div>Telefone: {data.Telefone}</div>
      <hr />
    </>
  )
}
export default Presentation