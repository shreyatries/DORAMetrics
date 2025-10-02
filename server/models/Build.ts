import mongoose from "mongoose";

const buildSchema= new mongoose.Schema({
    id: Number,
    buildNumber: String,
    projectId: String,
    definitionId: Number,
    definitionName: String,
    status: String,
    result: String,
    startTime: Date,
    finishTime: Date,
    requestedBy: String,
    tags: [String],
    sourceBranch: String,
    repositoryId: String,
})
export default mongoose.model("Build", buildSchema);