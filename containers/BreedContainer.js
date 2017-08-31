import { connect } from 'react-redux'
import { gatherBreed } from 'Action/'
import BreedComponent from 'Component/BreedComponent'

const mapStateToProps = state => ({
  breeds: state.breeds
})

const mapDispatchToProps = dispatch => ({
  getBreed(data) {
    dispatch(gatherBreed(data))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BreedComponent)