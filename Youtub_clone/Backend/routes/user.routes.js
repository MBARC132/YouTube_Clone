import { login, logout, register } from "../controller/user.controller.js";

export function userRoutes(app){
    app.post('/api/register', register);
    app.post('/api/login', login);
    app.post('/api/logout', logout);
}