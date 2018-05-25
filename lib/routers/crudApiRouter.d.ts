/// <reference types="express" />
import { BaseApiRouter } from "./baseApiRouter";
import { CrudApiController } from "../controllers/crudApiController";
import { EntityDao } from "../controllers/entityDao";
import express = require("express");
export declare abstract class CrudApiRouter<Dao extends EntityDao> extends BaseApiRouter<EntityDao> {
    protected ctrlInstance: CrudApiController<Dao>;
    constructor(ctrlInstance: CrudApiController<Dao>);
    private initCrudRoutes();
    sendResponseFromPromise(promise: Promise<any>, res: express.Response): void;
    create(req: express.Request, res: express.Response): void;
    retrieve(req: express.Request, res: express.Response): void;
    retrieveAll(req: express.Request, res: express.Response): void;
    update(req: express.Request, res: express.Response): void;
    delete(req: express.Request, res: express.Response): void;
}
