import { uploadvideo } from "../controller/video.controller.js";
import auth from "../middlerware/verifyToken.js";

export function videoRoutes(app){
    app.post('/Upload',auth, uploadvideo )
}