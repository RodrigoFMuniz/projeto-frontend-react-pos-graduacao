import { createGlobalStyle } from "styled-components"
const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  outline:none;
  font-family:'Allerta Stencil',monospace, sans-serif;
  font-weight: bolder;
}
body,
#root{
height: 100vh;
background-color: rgba(255,255,255,1);
flex:1;
}
`
export default GlobalStyle;