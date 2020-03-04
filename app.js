const app = require("express")();


app.get('/', (req, res) => {
    console.log(__dirname)
    return res.sendFile(`${__dirname}/web-front/index.html`);
})

app.get('/home', (req,res) => {
    return res.send({
        question: "Maybe it works"
    })
})
const server = app.listen(3000, error => {
    if(error){
        console.log(error)
    }
    console.log('Server running on port ' , server.address().port)
})