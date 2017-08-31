import styled from 'styled-components'

const AppBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 4rem;
  background-color: ${props => props.color};
  color: #fff;
  font-size: 1.4rem;
  font-family: verdana;
`

const Wrapper = styled.div`
  width: 100%;
  padding: 0 1.2rem;
`

const Icon = (props) => (
  <img src={props.src} style={{ height: '2.2rem', marginRight: '.4rem' }} />
)

const AppBarContainer = (props) => (
  <AppBar color={props.color}>
    <Wrapper>
      {
        props.src && <Icon src={props.src} />
      }

      {props.title}
    </Wrapper>
  </AppBar>
)

export default AppBarContainer