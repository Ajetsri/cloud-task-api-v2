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
// Get Task By ID
const getTaskByID = async(req,res) => {
    try{
        const task = await Task.findById(req.params.id);

        if(!task){
            return res.status(404).json({
                success : false,
                data :"Task not Found"
            });
        }
        res.status(200).json({
            success : true,
            data :task
        });
    }
    catch(error){
        res.status(500).json({
            success :false,
            message : error.message
        });

    }
};
// Update Task
const updateTask =async(req,res) => {
    try{
        const task = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new : true,
                runValidators : true
            }
        );
        if(!Task){
            return res.status(404).json({
                success : false,
                message :"Task not found"
            });
        }
        res.status(200).json({
            success : true,
            data : task
        });
    }
    catch(error){
        res.status(500).json({
            success : false,
            message : error.message
        });

    }
};
//delete Task
const deleteTask = async(req,res) => {
    try{
        const task =await Task.findByIdAndDelete(req.params.id);
        if(!task){
            return res.status(404).json({
                success : false,
                message: "Task not Found"
            });
        }
        res.status(200).json({
            success : true,
            message :"Task deleted successfully",
            data : task  //returns document which is deleted
            
        });

    }
    catch(error){
        res.status(500).json({
            success : false,
            message : error.message
        });

    }

};
module.exports = {
    createTask,
    getAllTasks,
    getTaskByID,
    updateTask,
    deleteTask
};


//Controllers separate business logic from routing.
// Routes decide which function to call,
//  while controllers contain the actual application logic.