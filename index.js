let express = require('express');

let app = express();

app.listen(3000);
app.set('view engine', 'ejs')

app.use('/', function(req, res) {
    return res.render('index', {});
});