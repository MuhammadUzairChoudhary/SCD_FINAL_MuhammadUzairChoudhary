const httpProxy = require('express-http-proxy')
const express = require('express')

const app = express()
const port = 3000

const authServiceProxy = httpProxy('http://localhost:3001')
const blogServiceProxy = httpProxy('http://localhost:3002')
const commentServiceProxy = httpProxy('http://localhost:3003')
const profileServiceProxy = httpProxy('http://localhost:3004')


app.use('/api/auth', authServiceProxy)
app.use('/api/blog', blogServiceProxy)
app.use('/api/comment', commentServiceProxy)
app.use('/api/profile', profileServiceProxy)


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
