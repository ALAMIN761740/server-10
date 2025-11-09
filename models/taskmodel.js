import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title:{type:String,required:true},
    name : {type:String, required:true},
    email:{type:String, required:true},
    description : {type:String, required:true},
    budget : {type:Number, required:true},
    date : {type:String, required:true},
    category : {type:String, required:true},
})

const TaskModel =mongoose.models.TaskModel || mongoose.model('food',taskSchema);

export default TaskModel;