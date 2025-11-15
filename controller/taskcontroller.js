import taskModel from "../models/taskmodel.js";

// Add Task
const addTask = async (req, res) => {
  const task = new taskModel({
    title: req.body.title,
    name: req.body.name,
    email: req.body.email,
    description: req.body.description,
    budget: req.body.budget,
    date: req.body.date,
    category: req.body.category,
  });

  try {
    await task.save();
    res.json({ success: true, message: "Task Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error adding task" });
  }
};

// Get All Tasks
const alltask = async (req, res) => {
  try {
    const tasks = await taskModel.find({});
    res.json({ success: true, data: tasks });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error fetching tasks" });
  }
};

// Get Single Task by ID (from URL param)
const getSingleTask = async (req, res) => {
  try {
    const { id } = req.body;
    const task = await taskModel.findById(id);
    if (!task) return res.status(404).json({ success: false, message: "Task not found" });
    res.status(200).json({ success: true, data: task });
  } catch (error) {
    console.error("Get Single Task Error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Get Task by POST body ID (for TaskDetails.jsx)
const getTask = async (req, res) => {
  try {
    const { id } = req.body;
    if (!id) return res.status(400).json({ message: "Task ID required" });

    const task = await taskModel.findById(id); // ✅ use taskModel, not Task
    if (!task) return res.status(404).json({ message: "Task not found" });

    res.json({ data: task });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Get Tasks by Email (My Tasks)
const mytaskdata = async (req, res) => {
  const email = req.body.email;
  try {
    const tasks = await taskModel.find({ email });
    res.json({ success: true, data: tasks });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error fetching my tasks" });
  }
};

// Delete Task
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await taskModel.findByIdAndDelete(id);
    res.json({ success: true, message: "Task deleted successfully" });
  } catch (error) {
    console.error("Delete Error:", error);
    res.status(500).json({ success: false, message: "Failed to delete task" });
  }
};

// Update Task
const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTask = await taskModel.findByIdAndUpdate(id, req.body, { new: true });
    res.json({ success: true, data: updatedTask });
  } catch (error) {
    console.error("Update Error:", error);
    res.status(500).json({ success: false, message: "Failed to update task" });
  }
};

export {
  addTask,
  alltask,
  getSingleTask,
  getTask, 
  mytaskdata,
  deleteTask,
  updateTask,
};
