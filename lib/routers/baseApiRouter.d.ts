/// <reference types="express" />
import { HttpVerb } from "../models/httpVerb";
import { BaseApiController } from "../controllers/baseApiController";
import { EntityDao } from "../controllers/entityDao";
import { ApiResponse } from '../models/apiResponse';
import express = require("express");
export declare abstract class BaseApiRouter<Dao extends EntityDao> {
    protected ctrlInstance: BaseApiController<Dao>;
    private router;
    constructor(ctrlInstance: BaseApiController<Dao>);
    addRoute(httpVerb: HttpVerb, localUrl: string, action: (req: express.Request, res: express.Response) => void): void;
    getRouter(): express.Router;
    sendResponseFromPromise(promise: Promise<ApiResponse>, res: express.Response): void;
}
