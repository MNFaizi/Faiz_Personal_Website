const Project = require('../models/project');

// create new project
exports.createProject = async (req, res) => {
    // get username and id from user has log in
    const { username, id } = req.loggedUser
    try {
        console.info(`${new Date()} : ${username} Start create new project`)
        // get data from body
        const { projectName, description, technology } = req.body;
        // get file path from multer
        const file = req.file.path
        // append data to database
        const data = await Project.create({
            owner: id,
            project_name: projectName,
            description: description,
            technology: technology,
            path: file
        })
        console.info(`${new Date()} : ${username} success create new Project `)
        return res
            .status(200)
            .json({
                message: "Project list success append to database",
                data
            })

    } catch (error) {
        console.info(`${new Date()} : ${username} Create project error`)
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}
// get All Project list
exports.getProject = async (req, res) => {
    try {
        console.info(`${new Date()} : start get project list`)
        // find data in database
        const data = await Project.find()
        console.info(`${new Date()} : success retrieved data`)
        // return the data
        return res
            .status(200)
            .json({
                message: "Succes get Project",
                data
            })
    } catch (error) {
        console.info(`${new Date()} : Failed get project list`)
        console.error(error)
        return res.status(500).json({ message: 'Internal Server Error' })
    }
}
// get data by id
exports.getProjectById = async (req, res) => {
    // get id from params url
    const { id } = req.params;
    try {
        console.info(`${new Date()} : Start get data by id`)
        // find data by id
        const data = await Project.findById({ _id: id })
        console.info(`${new Date()} : Finished get data by id`)
        // return the data to client
        return res.status(200).json({
            message: 'Get data by id success',
            data
        })
    } catch (error) {
        console.info(`${new Date()} : Failed get data by id`)
        console.error(error)
        return res.status(500).json({ message: 'Internal Server Error' })
    }
}
// update Data in database
exports.updateProject = async (req, res) => {
    // get id from url parameter
    const { id } = req.params
    // get project form from body
    const { projectName, description, technology } = req.body
    // get file uploaded
    const file = req.file?.path
    // check data from body request
    if (projectName || description || technology || file) {
        try {
            console.info(`${new Date()} : Update Project ${id} Started`)
            // input to database
            const data = await Project.updateOne({ _id: id }, {
                $set: {
                    project_name: projectName,
                    description: description,
                    technology: technology,
                    file: file
                }
            })
            console.info(`${new Date()} : Update project ${id} success`)
            return res.status(200).json({
                message: 'Update Project data success',
                data
            })
        } catch (error) {
            console.warn(`${new Date()} : Update project ${id} data is failed`);
            console.error(error)
            res.status(500).json({ message: "Internal Server Error" })
        }
    }
    else {
        res.status(400).json({ message: 'Bad Request' })
    }
}
// delete project
exports.deleteProject = async (req, res) => {
    // get id from params
    const { id } = req.params
    try {
        console.info(`${new Date()} : Start delete project ${id}`);
        // detele data on database
        const data = await Project.findByIdAndDelete({ _id: id });
        console.info(`${new Date} : Delete project ${id} success`);
        // result to client
        return res
            .status(200).json({ message: `Delete project ${id}` })
    }
    catch (error) {
        console.warn(`${new Date()}: Failed to delete project ${id}`);
        console.log('Error on Delete Project')
        return res.status(500).json({ message: 'Internal Server Error' })
    }
}