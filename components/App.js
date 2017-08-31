import axios from 'axios'
import AppWrapper from 'Component/AppWrapper'
import AboutContainer from 'Container/AboutContainer'
import BreedContainer from 'Container/BreedContainer'
import BrowseContainer from 'Container/BrowseContainer'
import SearchContainer from 'Container/SearchContainer'
import styled from 'styled-components'
import { Component } from 'react'
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {

    constructor() {
      super()
    }

    render() {

      return (
        <Router>
          <AppWrapper>
            <Route exact path='/' component={ BreedContainer } />
            <Route path='/search' component={ SearchContainer } />
            <Route path='/about' component={ AboutContainer } />
            <Route path='/browse/:type' component={ BrowseContainer } />
          </AppWrapper>
        </Router>
      )
    }
}

export default App
