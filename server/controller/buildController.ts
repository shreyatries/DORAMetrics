import {Request, Response} from 'express';
import Build from '../models/Build';

export const getBuilds= async(req: Request, res: Response) => {
try{
    const builds= await Build.find();
    res.json(builds)
} catch(err) {
    res.status(500).json({message: "error fetching builds", error: err})
}
};

export const getBuildById= async(req: Request, res: Response)=> {
try{
    const build= await Build.findById(req.params.id)
    if(!build) return res.status(404).json({message: "build not found"})
    res.json(build)
} catch (err) {
    res.status(500).json({message: "error fetching build", error: err})
}
}
