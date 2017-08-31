import axios from 'axios'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import BreedList from 'Component/BreedList'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import styled from 'styled-components'
import Loading from 'Component/Loading'

const TextStyled = styled.div`
  margin: .8rem 0 1.2rem 0;
`

const TextFieldStyled = styled(TextField)`
  width: 100% !important;
`

const LineStyled = styled.div`
  margin-top: 1.2rem;
  border: 1px dashed #f7f7f7;
`

const LinkStyled = styled(Link)`
  color: #333;
  text-decoration: none;
`

const Result = styled.div`
  margin-top: 1.2rem;
`

class SearchComponent extends Component {

  constructor(props){
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

  searchDog(e) {
    const { filterBreed } = this.props
    const query = e.target.value.toLowerCase()
    filterBreed(query)
  }

  render() {
    const { isDone } = this.state
    const { breeds } = this.props

    return (
      <div>

        <TextStyled>
          <TextFieldStyled onKeyUp={ this.searchDog.bind(this) } placeholder="Type a breed" name="query" />
        </TextStyled>

        <LineStyled />

        <Result>
        {
          isDone
            ?
              breeds.map((v,key) => (
                <LinkStyled to={`/browse/${v}`} key={key}>
                  <BreedList data={v} />
                </LinkStyled>
              ))
            :
              <Loading />
        }
        </Result>

      </div>
    )
  }
}

export default SearchComponent