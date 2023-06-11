const express = require(`express`)

const app = new express()

app.use(express.static(`public`))
app.use(`/css`, express.static(__dirname + `public/css`))
app.use(`/img`, express.static(__dirname + `public/img`))

app.set(`view engine`, `ejs`);
app.get(`/`, function(req, res){
    res.render(`page/index`)

})

app.listen(`8080`)
console.log(`servidor rodando`)