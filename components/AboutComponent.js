import styled from 'styled-components'

const Title = styled.h2`
  text-align: center;
  font-family: verdana;
`

const Caption = styled.div`
  text-align: center;
  font-family: verdana;
  display: flex;
  flex-direction: column;
  margin: 2rem 0 1.2rem 0;
`

const Link = styled.a`
  font-size: .8rem;
  padding-top: .4rem;
  color: mediumseagreen;
`

const AboutComponent = () => (
  <div>
    <Title>Dogtionary - build with React & Redux</Title>

    <Caption>
      See source code : <Link>https://github.com/andreepratama27/DogFinder</Link>
    </Caption>

    <Caption>
      Data source : <Link>https://dog.ceo/dog-api</Link>
    </Caption>

  </div>
)

export default AboutComponent