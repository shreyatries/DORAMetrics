import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import azureDevOpsRoutes from './routes/azureDevOpsRoutes';

dotenv.config()
const PORT= process.env.PORT 
const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
    throw new Error("MONGO_URI environment variable is not defined");
}
await mongoose.connect(mongoUri)
.then(()=> console.log('MongoDB connected'))
.catch(err=> console.log('Error connecting to db'))

const app= express();

app.use(express.json());
app.use('/api', azureDevOpsRoutes);

app.listen(PORT, ()=> console.log(`Server is listening on port ${PORT} on ${process.env.NODE_ENV} environment`))