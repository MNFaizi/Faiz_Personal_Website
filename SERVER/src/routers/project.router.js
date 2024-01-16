const router = require('express').Router()
const { createProject, getProject, getProjectById, updateProject, deleteProject } = require('../controllers/project.controller')
const { authentication, authorization } = require('../middlewares/auth')
const upload = require('../../upload');

router.post('/', authentication, upload.single('file') , createProject);  // create project router
router.get('/', getProject);  // get project route
router.get('/:id', getProjectById); // get project by id
router.put('/:id', authentication, authorization,upload.single('file'), updateProject); // update project 
router.delete('/:id', authentication, authorization, deleteProject); // delete project 

module.exports = router