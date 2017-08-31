import { connect } from 'react-redux'
import { gatherDog } from 'Action/'
import BrowseComponent from 'Component/BrowseComponent'

const mapStateToProps = state => ({
  dogs: state.dogs
})

const mapDispatchToProps = dispatch => ({
  getDog(data) {
    dispatch(gatherDog(data))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BrowseComponent)