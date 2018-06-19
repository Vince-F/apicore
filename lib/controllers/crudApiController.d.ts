/// <reference types="express" />
import { BaseApiController } from "./baseApiController";
import { EntityDao } from "./entityDao";
import { ApiResponse } from "../models/apiResponse";
import express = require("express");
export declare abstract class CrudApiController<Dao extends EntityDao> extends BaseApiController<EntityDao> {
    protected createResponseFromErrorObject(errorObj: any): ApiResponse;
    create(data: any, req: express.Request): Promise<ApiResponse>;
    retrieve(id: string, req: express.Request): Promise<ApiResponse>;
    retrieveAll(req: express.Request): Promise<ApiResponse>;
    update(id: string, data: any, req: express.Request): Promise<ApiResponse>;
    delete(id: string, req: express.Request): Promise<ApiResponse>;
}
