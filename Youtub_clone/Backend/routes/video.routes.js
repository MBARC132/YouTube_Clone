import { getAllVideo, getAllVideoByUserId, getVideoById, uploadvideo } from "../controller/video.controller.js";
import auth from "../middlerware/verifyToken.js";

export function videoRoutes(app){
    app.post('/Upload',auth, uploadvideo )
    app.get('/allvideo', getAllVideo)
    app.get('/getVideoById/:id', getVideoById)
    app.get('/:userId/channel', getAllVideoByUserId)
}