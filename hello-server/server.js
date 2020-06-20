let net = require('net')
let server = net.createServer((con) => {
    console.log('Client connected')

    con.on('end', () => {
        console.log('Client disconnected')
    })

    con.on('data', (data) => {
        
        var title = data.toString()
        console.log(title)

        if (title == "I want to behave!") {
            con.write('{\r\n')
            con.write('\t\"title\": \"' + title + '\",\r\n')
            con.write('\t\"items\": [\r\n')
            con.write('\t\t{ \"title\": \"Item 1\"},\r\n')
            con.write('\t\t{ \"title\": \"Item 2\"},\r\n')
            con.write('\t\t{ \"title\": \"Item 3\"}\r\n')
            con.write('\t]\r\n')
            con.write('}\r\n')
            con.pipe(con)
            con.end()                
        }
    })

})

server.listen(8080, () => {
    console.log('Server running on http://localhost:8080')
})
