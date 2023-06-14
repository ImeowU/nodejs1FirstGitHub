import express from "express";
import homeController from "../controllers/homeController";
let router = express.Router();
let initWebRoutes = (app) => {
    router.get('/',homeController.getHomePage);
    router.get('/crud',homeController.getCRUD);
    router.post('/post-crud',homeController.postCRUD);
    router.get('/hoiNumisuKei', (req, res)=> {
    return res.send('Hi numisuklei with hoiNumisuKei');
    });
    //rest API

    return app.use("/",router);
}
module.exports = initWebRoutes;