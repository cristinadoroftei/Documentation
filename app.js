const app = require("express")();


app.get('/', (req, res) => {
    return res.send({
        description: 'The sweet starting point of learning how to make an API using NodeJs'
    })
})
const server = app.listen(3000, error => {
    if(error){
        console.log(error)
    }
    console.log('Server running on port ' , server.address().port)
})