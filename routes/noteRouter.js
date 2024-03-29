const router = require('express').Router()
const auth = require('../middleware/auth')
const noteCtrl = require('../controllers/noteCtrl')

router.route('/')
    .get(auth, noteCtrl.getNotes)
    .post(auth, noteCtrl.createNote)

router.route('/bookmarks')
    .get(auth, noteCtrl.getBookmarkedNotes);
    
router.route('/:id')
    .get(auth, noteCtrl.getNote)
    .put(auth, noteCtrl.updateNote)
    .delete(auth, noteCtrl.deleteNote)


router.route('/:id/bookmark')
    .put(auth, noteCtrl.bookmarkNote);

module.exports = router