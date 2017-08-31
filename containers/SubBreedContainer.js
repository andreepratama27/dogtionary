import { connect } from 'react-redux'
import { updateBreed } from 'Action/'
import SubBreedComponent from 'Component/SubBreedComponent'

const mapStateToProps = state => ({
  breeds: state.breeds
})

const mapDispatchToProps = dispatch => ({
  updateBreed(data) {
    updateBreed(data)
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubBreedComponent)