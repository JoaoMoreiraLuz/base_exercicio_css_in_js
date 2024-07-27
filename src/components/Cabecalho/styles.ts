import styled from 'styled-components'

export const Cabecalho = styled.header`
  background-color: ${(props) => props.theme.corPrincipal};
  color: ${(props) => props.theme.corSecundaria};
  text-align: center;
  padding: 24px 0;
`
