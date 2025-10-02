import {Request, Response} from 'express';
import WorkItem from '../models/WorkItem';

export const getWorkItem=async( req: Request, res: Response ) => {
try {
    const workitems= await WorkItem.find()
    res.json(workitems)
} catch(err) {
    res.status(500).json({mesage: "Error fetching work items", error: err})
}
}

export const getWorkItemById= async(req: Request, res: Response) => {
try {
    const workitem= await WorkItem.findById(req.params.id)
    if(!workitem) return res.status(404).json({message: "No workitems found"})
    res.json(workitem)
} catch(err) {
    res.status(500).json({message: "Error fetching work items", error: err})
}
}