import type { Request, Response } from "express"
//import Project from "../models/Project"


export class CountryController {
//   static createProject = async(req: Request, res: Response) => {
//     const project = new Project(req.body)

//     try {
//       await project.save() 
//       res.send('Proyecto creado correctamente ...')
//     } catch (error) {
//       console.log(error)
//     }
//   }

  static getAllCountries = async(req: Request, res: Response) => {
    try {
    //   const projects = await Project.find({})
    //   res.json(projects)
    console.log('Working!')
      
    } catch (error) {
      console.log(error)  
    }
    
  }

//   static getProjectById = async(req: Request, res: Response) => {
//     const { id } = req.params
//     try {
//       const project = await Project.findById(id).populate('tasks')

//       if(!project) {
//         const error = new Error('The Project doesn\'t exist' )
//         return res.status(404).json({
//           error: error.message
//         })
//       }
//       res.json(project)
      
//     } catch (error) {
//       console.log(error)  
//     }
//   }

//   static updateProject = async(req: Request, res: Response) => {
//     const { id } = req.params
//     try {
//       const project = await Project.findByIdAndUpdate(id, req.body)

//       if(!project) {
//         const error = new Error('The Project doesn\'t exist' )
//         return res.status(404).json({
//           error: error.message
//         })
//       }

//       await project.save()
//       res.send('Project updated succesfully!')
      
//     } catch (error) {
//       console.log(error)  
//     }
//   }

//   static deleteProjectById = async(req: Request, res: Response) => {
//     const { id } = req.params
//     try {
//       const project = await Project.findById(id)

      
//       if(!project) {
//         const error = new Error('The Project doesn\'t exist' )
//         return res.status(404).json({
//           error: error.message
//         })
//       }

//       await project.deleteOne()
      
//       res.send('Project deleted sucessfully!')
      
//     } catch (error) {
//       console.log(error)  
//     }
//   }
}