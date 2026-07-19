const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema(
    {
        task: {
            type: String,
            required: [true, "Task is required"],//for empty req {}
            trim: true,//trims spaces
            minLength: [3,"Task must be at least 3 characters"],
            maxLength: [100,"Task cannot exceed 100 characters"],
        },
        completed: {
            type: Boolean,
            default: false,
        },
    
    },
    {
        timestamps :true,//automatically creates createdAt & updatedAt
    }
);
module.exports =mongoose.model("Task",taskSchema);