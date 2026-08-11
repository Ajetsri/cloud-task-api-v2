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
        const page = parseInt(req.query.page)||1;
        const limit = parseInt(req.query.limit)||10;
        const skip = (page - 1) * limit;
        const totalTasks = await Task.countDocuments();//Get total number of tasks
        const totalPages = Math.ceil(totalTasks / limit);//Calculate total pages

        const tasks = await Task.find()
                                .skip(skip)
                                .limit(limit);
        

        res.status(200).json({
            success: true,
            count: tasks.length,
            page: page,
            limit: limit,
            totalTasks: totalTasks,
            totalPages: totalPages,
            data: tasks
        });

});
// Get Task By ID
const getTaskByID = asyncHandler(async(req,res) => {
        const task = await Task.findById(req.params.id);

        if(!task){
            throw new AppError("Task not found",404);
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
            throw new AppError("Task not found",404);
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
            throw new AppError("Task not found",404);
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