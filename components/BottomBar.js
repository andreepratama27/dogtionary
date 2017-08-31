import { Component } from 'react'
import { Link } from 'react-router-dom'
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation'
import FontIcon from 'material-ui/FontIcon'
import Paper from 'material-ui/Paper'
import IconLocationOn from 'material-ui/svg-icons/communication/location-on'
import styled from 'styled-components'

const recentsIcon = <FontIcon className='fa fa-home'></FontIcon>
const aboutIcon = <FontIcon className='fa fa-question'></FontIcon>
const searchIcon = <FontIcon className='fa fa-search'></FontIcon>

const PaperStyled = styled(Paper)`
  position: fixed;
  width: 100%;
  bottom: 0;
`

const StyledLink = styled(Link)`
  text-align: center;
`

class BottomBar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedIndex: 0
    }
  }

  select(index) {
    this.setState({
      selectedIndex: index
    })
  }

  render() {
    return (
      <PaperStyled zDepth={1}>

        <BottomNavigation selectedIndex={this.state.selectedIndex}>

          <StyledLink to='/'>
            <BottomNavigationItem
              label="Home"
              icon={recentsIcon} />
          </StyledLink>

          <StyledLink to='/search'>
            <BottomNavigationItem
              label="Search"
              icon={searchIcon} />
          </StyledLink>

          <StyledLink to='/about'>
            <BottomNavigationItem
              label="About"
              icon={aboutIcon} />
          </StyledLink>

        </BottomNavigation>

      </PaperStyled>
    )
  }
}

export default BottomBar