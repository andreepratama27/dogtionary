import styled from 'styled-components'

const Box = styled.div`
  background-color: #f7f7f7;
  justify-content: center;
  font-family: verdana;
  align-items: center;
  border: 1px solid #dadada;
  margin-top: -1px;

  ${props => props.big && `
    margin-bottom: 1.2rem;
    padding: 1.2rem;
    font-size: 1.2rem;
  `}

  ${props => props.small && `
    padding: .8rem 1.2rem;
  `}
`

export default ({ data, size }) => {
  return (
    size === 'big'
      ? <Box big>{ data }</Box>
      : <Box small>{ data }</Box>
  )
}