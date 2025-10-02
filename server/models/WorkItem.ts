import mongoose from "mongoose";

const workItemSchema= new mongoose.Schema({
    id: Number,
    projectId: String,
    workItemType: String,
    title: String,
    state: String,
    createdDate: Date,
    closedDate: Date,
    assignedTo: String,
    tags: [String],
})

export default mongoose.model("WorkItem", workItemSchema);