import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import dogApp from 'Reducer/'
import App from 'Container/App'

const store = createStore(dogApp)

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app-container')
)
