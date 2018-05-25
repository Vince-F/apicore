import { BaseApiRouter } from "./baseApiRouter";
import { CrudApiController } from "../controllers/crudApiController";
import { EntityDao } from "../controllers/entityDao";
import { HttpVerb } from "../models/httpVerb";
import express = require("express");

export abstract class CrudApiRouter<Dao extends EntityDao> extends BaseApiRouter<EntityDao> {
    protected ctrlInstance: CrudApiController<Dao>;

    constructor(ctrlInstance: CrudApiController<Dao>) {
        super(ctrlInstance);
        this.initCrudRoutes();
    }

    private initCrudRoutes() {
        this.addRoute(HttpVerb.POST, "/", this.create.bind(this));
        this.addRoute(HttpVerb.GET, "/:id", this.retrieve.bind(this));
        this.addRoute(HttpVerb.GET, "/", this.retrieveAll.bind(this));
        this.addRoute(HttpVerb.PUT, "/:id", this.update.bind(this));
        this.addRoute(HttpVerb.DELETE, "/:id", this.delete.bind(this));
    }

    sendResponseFromPromise(promise: Promise<any>, res: express.Response) {
        promise.then((result) => {
            res.send({ success: true, result: result, count: Array.isArray(result) ? result.length : result ? 1 : 0 });
        }).catch((error) => {
            res.send({ success: false, error: error })
        });
    }

    create(req: express.Request, res: express.Response) {
        let data = req.body.data;
        this.sendResponseFromPromise(this.ctrlInstance.create(data), res);
    }

    retrieve(req: express.Request, res: express.Response) {
        let id = req.params.id;
        this.sendResponseFromPromise(this.ctrlInstance.retrieve(id), res);
    }

    retrieveAll(req: express.Request, res: express.Response) {
        this.sendResponseFromPromise(this.ctrlInstance.retrieveAll(), res);
    }

    update(req: express.Request, res: express.Response) {
        let id = req.params.id;
        let data = req.body.data;

        this.sendResponseFromPromise(this.ctrlInstance.update(id, data), res);
    }

    delete(req: express.Request, res: express.Response) {
        let id = req.params.id;
        this.sendResponseFromPromise(this.ctrlInstance.delete(id), res);
    }
}