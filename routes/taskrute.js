import express from 'express';
import { addTask, alltask, task,mytask } from '../controller/taskcontroller.js';

const taskroute = express.Router();

taskroute.post('/add', addTask);
taskroute.get('/alltask', alltask);
taskroute.post('/gettask',task);
taskroute.post('/getmytask',mytask);

export default taskroute;