const Task = require("../models/Task");

//create task 
const createTask= async(req, res) => {
    try{
        const task = await Task.create(req.body);

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
module.exports = {
    createTask
};


//Controllers separate business logic from routing.
// Routes decide which function to call,
//  while controllers contain the actual application logic.