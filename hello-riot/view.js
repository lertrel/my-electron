const riot = require('riot')
import App from './app.js'

const mountApp = riot.component(App)

const app = mountApp(
  document.getElementById('root'),
  { message: 'Hello World' }
)