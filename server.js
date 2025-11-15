import express from "express"
import cors from "cors"
import { connectdb } from "./config/db.js";
import 'dotenv/config'
import taskroute from "./routes/taskrute.js";

const app = express();
const port = 4000;

app.use(express.json())
// app.use(cors())



app.use(cors({
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
// db connected 
connectdb()
// add router
app.use('/api/taskroute',taskroute)

app.get("/",(req,res)=>{
    res.send("API Working")
})

try {
    app.listen(port,()=>{
    console.log(`Server is Started on http://localhost:${port}`)
})
} catch (error) {
    console.log(error)
}




///mongodb+srv://rashedalidesigner:<db_password>@cluster0.acye2f9.mongodb.net/?