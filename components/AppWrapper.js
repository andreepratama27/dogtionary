import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import MenuItem from 'material-ui/MenuItem'
import AppBar from 'Component/AppBar'
import BottomBar from 'Component/BottomBar'

const appWrapperStyle = {
  padding: '0 1.2rem'
}

const AppWrapper = ({ children }) => (
  <MuiThemeProvider>
    <div>
      <AppBar title='Dogtionary' src='./dist/dog.png' color='#1976D2' />

      <div className='app-wrapper' style={appWrapperStyle}>
        { children }
      </div>

      <BottomBar />

    </div>
  </MuiThemeProvider>
)

export default AppWrapper