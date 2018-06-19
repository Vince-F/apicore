import { Route } from "../models/route";
import { HttpVerb } from "../models/httpVerb";
import { BaseApiController } from "../controllers/baseApiController";
import { EntityDao } from "../controllers/entityDao";
import { ApiResponse } from '../models/apiResponse';
import express = require("express");

export abstract class BaseApiRouter<Dao extends EntityDao>{
    protected ctrlInstance: BaseApiController<Dao>;
    private router: express.Router;

    constructor(ctrlInstance: BaseApiController<Dao>) {
        this.ctrlInstance = ctrlInstance;
        this.router = express.Router();
    }

    addRoute(httpVerb: HttpVerb, localUrl: string, action: (req: express.Request, res: express.Response) => void) {
        this.router[httpVerb](localUrl, action);
    }

    getRouter() {
        return this.router;
    }

    sendResponseFromPromise(promise: Promise<ApiResponse>, res: express.Response) {
        promise.then((result) => {
            res.status(result.status);
            res.send({ success: true, result: result.data, count: result.count });
        }).catch((result) => {
            res.status(result.status);
            res.send({ success: false, error: result.error })
        });
    }
}