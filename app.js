const express = require('express')
const app = express()
const port = 3000

const bookmarkController = require('./controllers/bookmark.js')
// const addBookmarkController = require('./controllers/newBookmark')
app.use('/bookmarks', bookmarkController)
// app.use('/bookmarks', addBookmarkController)

const Bookmark = require('./models').Bookmark

app.post('/bookmarks', async function (req, res) {
  Bookmark.create({url: req.body.url})
  await req.body.url.save()
  console.log(req.body.url)
  const bookmarks = await Bookmark.findAll()
  res.render("bookmarks/index", { bookmarks: bookmarks })
})

app.use(express.urlencoded({ extended: false }))

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('./index')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})