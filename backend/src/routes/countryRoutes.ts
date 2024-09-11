import { Router } from 'express'
import { body, param } from 'express-validator'
import { CountryController } from '../controllers/Country.controller'
// import { handleInputErrors } from '../middleware/validation'
// import { TaskController } from '../controllers/Task.controller'
// import { validateProjectExist } from '../middleware/project'

const router = Router()

// router.post('/',
//   body('projectName').trim().notEmpty().withMessage('Project\'s name is required'),
//   body('clientName').trim().notEmpty().withMessage('Client\'s name is required'),
//   body('description').trim().notEmpty().withMessage('Description project is required'),
//   handleInputErrors,
//   ProjectController.createProject
// )

router.get('/', CountryController.getAllCountries)

// router.get('/:id',
//   param('id').isMongoId().withMessage('Invalid ID'),
//   handleInputErrors, 
//   ProjectController.getProjectById
// )

// router.put('/:id',
//   param('id').isMongoId().withMessage('Invalid ID'),
//   body('projectName').trim().notEmpty().withMessage('Project\'s name is required'),
//   body('clientName').trim().notEmpty().withMessage('Client\'s name is required'),
//   body('description').trim().notEmpty().withMessage('Description project is required'),
//   handleInputErrors, 
//   ProjectController.updateProject
// )

// router.delete('/:id',
//   param('id').isMongoId().withMessage('Invalid ID'),
//   handleInputErrors, 
//   ProjectController.deleteProjectById
// )

// /* Routes for Tasks */
// router.post('/:projectId/tasks',
//   validateProjectExist,
//   body('name').trim().notEmpty().withMessage('Task\'s name is required'),
//   body('description').trim().notEmpty().withMessage('Task\'s description is required'),
//   handleInputErrors,
//   TaskController.createTask
// )

// router.get('/:projectId/tasks',
//   validateProjectExist,
//   TaskController.getProjectTasks
// )

// router.get('/:projectId/tasks/:taskId',
//   validateProjectExist,
//   TaskController.getTaskById
// )

export default router