"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseApiRouter_1 = require("./baseApiRouter");
const httpVerb_1 = require("../models/httpVerb");
class CrudApiRouter extends baseApiRouter_1.BaseApiRouter {
    constructor(ctrlInstance) {
        super(ctrlInstance);
        this.initCrudRoutes();
    }
    initCrudRoutes() {
        this.addRoute(httpVerb_1.HttpVerb.POST, "/", this.create.bind(this));
        this.addRoute(httpVerb_1.HttpVerb.GET, "/:id", this.retrieve.bind(this));
        this.addRoute(httpVerb_1.HttpVerb.GET, "/", this.retrieveAll.bind(this));
        this.addRoute(httpVerb_1.HttpVerb.PUT, "/:id", this.update.bind(this));
        this.addRoute(httpVerb_1.HttpVerb.DELETE, "/:id", this.delete.bind(this));
    }
    sendResponseFromPromise(promise, res) {
        promise.then((result) => {
            res.send({ success: true, result: result, count: Array.isArray(result) ? result.length : result ? 1 : 0 });
        }).catch((error) => {
            res.send({ success: false, error: error });
        });
    }
    create(req, res) {
        let data = req.body.data;
        this.sendResponseFromPromise(this.ctrlInstance.create(data), res);
    }
    retrieve(req, res) {
        let id = req.params.id;
        this.sendResponseFromPromise(this.ctrlInstance.retrieve(id), res);
    }
    retrieveAll(req, res) {
        this.sendResponseFromPromise(this.ctrlInstance.retrieveAll(), res);
    }
    update(req, res) {
        let id = req.params.id;
        let data = req.body.data;
        this.sendResponseFromPromise(this.ctrlInstance.update(id, data), res);
    }
    delete(req, res) {
        let id = req.params.id;
        this.sendResponseFromPromise(this.ctrlInstance.delete(id), res);
    }
}
exports.CrudApiRouter = CrudApiRouter;
