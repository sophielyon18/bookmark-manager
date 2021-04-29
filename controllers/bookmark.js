const express = require('express')
const router = express.Router()

const Bookmark = require('../models').Bookmark

router.get('/', async function (req, res) {
    const bookmarks = await Bookmark.findAll() 
    res.render('bookmarks/index', { bookmarks: bookmarks})
})

module.exports = router