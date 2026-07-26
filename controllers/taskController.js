const Task = require("../models/Task");

//create task 
const createTask= async(req, res) => {
    try{
        const task = await Task.create(req.body);//inserting data

        res.status(201).json({
            success: true,
            data: task
        });
    }
    catch(error){
        res.status(400).json({
            success: false,
            message: error.message
        });

    }
};
//getAllTasks 
const getAllTasks = async(req, res) => {
    try{
        const tasks = await Task.find();

        res.status(200).json({
            success: true,
            count: tasks.length,
            data: tasks
        });

    }
    catch(error){
        res.status(500).json({
            success: false,
            message: error.message

        });

    }
};
module.exports = {
    createTask,
    getAllTasks 
};


//Controllers separate business logic from routing.
// Routes decide which function to call,
//  while controllers contain the actual application logic.