import axios from 'axios'
import { Component } from 'react'
import { GridList, GridTile } from 'material-ui/GridList'
import Subheader from 'material-ui/Subheader'
import LazyLoad from 'react-lazyload'
import BoxGridTile from 'Component/BoxGridTile'

class BrowseComponent extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { match, getDog } = this.props

    axios.get(`https://dog.ceo/api/breed/${match.params.type}/images`)
      .then(res => {
        getDog(res.data.message)
      })

      .catch(err => {
        throw err
      })
  }

  render() {
    const { match, dogs } = this.props

    return (
      <div>
        <GridList>
          <Subheader>Breed : <b>{match.params.type}</b></Subheader>
          {
            dogs.map((v,key) => (
              <LazyLoad key={v} height={200}>
                <GridTile>
                  <img src={v} />
                </GridTile>
              </LazyLoad>
            ))
          }
        </GridList>

      </div>
    )
  }
}

export default BrowseComponent