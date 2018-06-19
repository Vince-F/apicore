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
    create(req, res) {
        let data = req.body.data;
        this.sendResponseFromPromise(this.ctrlInstance.create(data, req), res);
    }
    retrieve(req, res) {
        let id = req.params.id;
        this.sendResponseFromPromise(this.ctrlInstance.retrieve(id, req), res);
    }
    retrieveAll(req, res) {
        this.sendResponseFromPromise(this.ctrlInstance.retrieveAll(req), res);
    }
    update(req, res) {
        let id = req.params.id;
        let data = req.body.data;
        this.sendResponseFromPromise(this.ctrlInstance.update(id, data, req), res);
    }
    delete(req, res) {
        let id = req.params.id;
        this.sendResponseFromPromise(this.ctrlInstance.delete(id, req), res);
    }
}
exports.CrudApiRouter = CrudApiRouter;
