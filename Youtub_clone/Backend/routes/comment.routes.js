import { addcomment, getCommentByVideoId } from "../controller/comment.controller.js";
import auth from "../middlerware/verifyToken.js";

export function commentRoutes(app){
    app.post('/comment',auth, addcomment)
    app.get('/comment/:videoId', getCommentByVideoId)
}