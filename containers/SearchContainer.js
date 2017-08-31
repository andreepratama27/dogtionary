import { connect } from 'react-redux'
import { gatherBreed, updateBreed, filterBreed } from 'Action/'
import SearchComponent from 'Component/SearchComponent'

const filterBreeds = (breed, filter) => {
  if (filter != '') {
    return breed.filter(v => v.includes(filter))
  } else {
    return breed
  }
}

const mapStateToProps = state => ({
  breeds: filterBreeds(state.breeds, state.visibilityFilters)
})

const mapDispatchToProps = dispatch => ({
  getBreed(data) {
    dispatch(gatherBreed(data))
  },

  updateBreed(data) {
    dispatch(updateBreed(data))
  },

  filterBreed(data) {
    dispatch(filterBreed(data))
  }
})

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchComponent)

export default SearchContainer