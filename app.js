const express = require('express');
const nunjucks = require('nunjucks');
const app = express();
const port = 3000;

app.use(express.static('public'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

app.get('/', async function (req, res, next) {
    res.render('index.njk', {
        message: 'Hello world!',
        title: 'Nunjucks hello world',
    });
});