var express = require('express');
var app = express();
const bodyParser = require('body-parser');
const session = require('express-session');


const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(session({
    secret: 'your-secret-key',
    resave: true,
    saveUninitialized: true,

}));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/',  (req, res) => {
    res.render('index');
});


app.listen(PORT, function () {
    console.log('Example app listening on port 3000!');
});
