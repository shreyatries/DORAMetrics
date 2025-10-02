import mongoose from "mongoose";
import Build from "../models/Build";
import WorkItem from "../models/WorkItem";
import { generateBuilds, generateWorkItems } from "./generator";

import dotenv from "dotenv";
dotenv.config()

async function seedDatabase(){

const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
	throw new Error("MONGO_URI environment variable is not defined");
}
await mongoose.connect(mongoUri);
console.log("Clearing old data");
await Build.deleteMany({});
await WorkItem.deleteMany({});

console.log("Seeding build data");
await Build.insertMany(generateBuilds(200));

console.log("Seeding workitems data");
await WorkItem.insertMany(generateWorkItems(200));

console.log("Done!!")
process.exit();
}

seedDatabase()
