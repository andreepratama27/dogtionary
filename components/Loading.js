import styled from 'styled-components'

const Loading = styled.div`
  text-align: center;
`

const Spinner = styled.i`
  font-size: 2.2rem;
  color: #dadada;
`

export default () => (
  <Loading>
    <Spinner className='fa fa-spin fa-spinner' />
  </Loading>
)