
const riot = require('riot')
import todo from './todo.js'
const mountApp = riot.component(todo)

const app = mountApp(
    document.getElementsByTagName('TODO')[0],
    {
        title: 'I want to behave!',
        items: [
          { title: 'Unable to load data from server'}
        ]
      }
  )

const net = require('net')
var serverData = '';

const client = net.connect({port: 8080}, () => {
    console.log("Connection established")
    client.write('I want to behave!')
})

client.on('data', (data) => {
    
    var dataStr = data.toString()
    
    if (dataStr) {
        serverData += dataStr
    }
})

client.on('end', () => {

    console.log("Disconnected!!!")

    if (serverData) {

        console.log(serverData)

        app.update(
            JSON.parse(serverData)
        )
    }
})