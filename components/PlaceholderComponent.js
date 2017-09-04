import styled from 'styled-components'

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #dadada;
  height: 100%;
`

const PlaceholderComponent = () => (
  <Loading>
      <i className='fa fa-spin fa-spinner fa-2x' style={{ color: '#f7f7f7' }}></i>
  </Loading>
)

export default PlaceholderComponent
