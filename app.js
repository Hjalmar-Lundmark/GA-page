const express = require('express');
const nunjucks = require('nunjucks');
const app = express();
const port = 3000;

app.use(express.static('public'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

nunjucks.configure('views', {
    autoescape: true,
    express: app,
});

app.get('/', async function (req, res, next) {
    res.render('index.njk', {
        title: 'Hjalmars GA',
    });
});