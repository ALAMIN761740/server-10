import taskModel from "../models/taskmodel.js";

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
    res.json({ success: true, message: "Food Added" });
  } catch (error) {
    console.log(error);
    res.json({ succes: false, message: "Error" });
  }
};

// all food list

const alltask = async (req, res) => {
  try {
    const tasks = await taskModel.find({});
    res.json({ success: true, data: tasks });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// remove food item

const task = async (req, res) => {
  try {
    const task = await taskModel.findById(req.body.id);
    res.json({ success: true, data:task });
  } catch (error) {
    console.log("remove error", req.body.id);
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

const mytask = async (req, res) => {
  const email = req.body.email;
  const task = await taskModel.find();
  const mytaskdata = task.filter((e)=>{
      if(task.email==email){
        return task;
      }
  });
  
  res.json({success:true,data:mytaskdata})
}

export { addTask, alltask, task,mytask };
