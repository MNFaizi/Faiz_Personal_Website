const router = require('express').Router()
const { createProject, getProject, getProjectById, updateProject, deleteProject } = require('../controllers/project.controller')
const { authentication, authorization } = require('../middlewares/auth')
const upload = require('../../upload');

router.post('/', authentication, upload.single('file') , createProject);
router.get('/', getProject);
router.get('/:id', getProjectById);
router.put('/:id', authentication, authorization,upload.single('file'), updateProject);
router.delete('/:id', authentication, authorization, deleteProject);

module.exports = router