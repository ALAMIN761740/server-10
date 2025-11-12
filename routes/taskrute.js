import express from "express";
import {
  addTask,
  alltask,
  getSingleTask,
  mytaskdata,
  deleteTask,
  updateTask,
} from "../controller/taskcontroller.js";



const taskroute = express.Router();

taskroute.post("/add", addTask);
taskroute.get("/alltask", alltask);
taskroute.get("/:id", getSingleTask);
taskroute.post("/mytaskdata", mytaskdata);
taskroute.delete("/tasks/:id", deleteTask);
taskroute.put("/tasks/:id", updateTask);

taskroute.get("/tasks/:id", getSingleTask);


export default taskroute;
