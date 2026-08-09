const Task = require("../models/Task");
const asyncHandler = require("../middleware/asyncHandler");
const AppError = require("../utils/AppError");

//create task 
const createTask= asyncHandler(async(req, res) => {
        const task = await Task.create(req.body);//inserting data

        res.status(201).json({
            success: true,
            data: task
        });
});
//getAllTasks 
const getAllTasks = asyncHandler(async(req, res) => {
        const tasks = await Task.find();

        res.status(200).json({
            success: true,
            count: tasks.length,
            data: tasks
        });

});
// Get Task By ID
const getTaskByID = asyncHandler(async(req,res) => {
        const task = await Task.findById(req.params.id);

        if(!task){
            return res.status(404).json({
                success : false,
                message:"Task not found"
            });
        }
        res.status(200).json({
            success : true,
            data :task
        });
});
// Update Task
const updateTask =asyncHandler(async(req,res) => {
        const task = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new : true,
                runValidators : true
            }
        );
        if(!task){
            return res.status(404).json({
                success : false,
                message :"Task not found"
            });
        }
        res.status(200).json({
            success : true,
            data : task
        });
});
//delete Task
const deleteTask = asyncHandler(async(req,res) => {
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
});
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