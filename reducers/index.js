import { combineReducers } from 'redux'
import breeds from './breeds'
import dogs from './dogs'
import visibilityFilters from './visibilityFilters'

const dogApp = combineReducers({
    breeds,
    dogs,
    visibilityFilters
})

export default dogApp