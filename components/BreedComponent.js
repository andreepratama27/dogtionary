import axios from 'axios'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import BreedList from 'Component/BreedList'
import Loading from 'Component/Loading'
import styled from 'styled-components'

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: #333;
`

class BreedComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isDone: false 
    }
  }

  componentDidMount() {
    const { getBreed } = this.props

    axios.get('https://dog.ceo/api/breeds/list')
      .then(res => {
        getBreed(res.data.message)
        this.setState({
          isDone: true
        })
      })

      .catch(err => {
        this.setState({
          isDone: true
        })
        throw err
      })
  }

  render() {
    const { isDone } = this.state
    const { breeds } = this.props

    return(
      <div>
        <h2>Breed List</h2>
        {
          isDone
            ?
              breeds.map((v,key) => (
                <LinkStyled to={`/browse/${v}`} key={key}>
                  <BreedList data={v} size='big' />
                </LinkStyled>
              ))
            :
              <Loading />
        }
      </div>
    )
  }
}

export default BreedComponent