const app = require('express')()
const cors = require('cors')

const PORT = 8000;

app.use(cors())

let posts = require('./posts.json')

app.get('/posts/', (req, res) => {
    console.log('Request made to posts');
    res.send(JSON.stringify(posts));
    res.end();
})

app.listen(PORT, () => {
    console.log(`App is running on port: ${PORT}`)
})