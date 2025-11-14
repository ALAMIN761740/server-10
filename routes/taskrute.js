import express from "express";
import {
  addTask,
  alltask,
  getSingleTask,
  mytaskdata,
  deleteTask,
  updateTask,
  getTask,
} from "../controller/taskcontroller.js";

const taskroute = express.Router();

// Routes
taskroute.post("/add", addTask);
taskroute.get("/alltask", alltask);
taskroute.post("/gettask", getTask);           // POST for TaskDetails.jsx
taskroute.get("/tasks/:id", getSingleTask);    // GET single task by URL param
taskroute.post("/mytaskdata", mytaskdata);
taskroute.delete("/tasks/:id", deleteTask);
taskroute.put("/tasks/:id", updateTask);

export default taskroute;
