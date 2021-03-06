let $ = require('jquery')
let fs = require('fs')
let os = require('os')
let filename = 'contacts'
let sno = 0

$('#add-to-list').on('click', () => {
    let name = $('#Name').val()
    let email = $('#Email').val()

    fs.appendFileSync(filename, name +','+ email + os.EOL)

    addEntry(name, email)
})

function addEntry(name, email) {
    if (name && email) {
        ++sno
        let updateString = "<tr><td>" + sno + "</td><td>" + name + "</td><td>" + email + "</td></tr>"

        $('#contact-table').append(updateString)
    }
}

function loadAndDisplayContracts() {

    if (fs.existsSync(filename)) {
        let data = fs.readFileSync(filename, 'utf8').split('\n');

        data.forEach((contact, index) => {
            let [name, email] = contact.split(',')
            addEntry(name, email)
        })
    } else {
        console.log('File does not exists, creating a new file')

        fs.writeFile(filename, '', (err) => {
            if (err) console.log(err)
        })
    }
}

loadAndDisplayContracts()