import axios from 'axios'
import { Component } from 'react'
import BreedList from 'Component/BreedList'

class SubBreedComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isDone: false
    }
  }

  componentDidMount() {
    const { match } = this.props

    axios.get(`https://dog.ceo/api/breed/${match.params.type}/list`)
      .then(res => {
        console.log(res.data)
      })

      .catch(err => {
        throw err
      })
  }

  render() {
    const { match, breeds, updateBreed } = this.props

    return (
      <div>
        <h2>Sub-jenis { match.params.type} </h2>
      </div>
    )
  }
}

export default SubBreedComponent