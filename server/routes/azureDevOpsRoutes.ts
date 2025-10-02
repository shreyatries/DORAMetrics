import express from 'express';
import { getBuilds, getBuildById } from '../controller/buildController';
import { getWorkItem, getWorkItemById } from '../controller/workItemController';

const router= express.Router();

router.get("/builds", getBuilds);
router.get("/builds/:id", getBuildById);

router.get('/workitems', getWorkItem);
router.get('/workitems/:id', getWorkItemById);

export default router;