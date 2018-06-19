/// <reference types="express" />
import express = require("express");
import { ApiAccessResponse } from "../models/apiAccessResponse";
export declare abstract class PermissionManager {
    abstract canExecuteAction(entity: string, action: string, request: express.Request, data: any): Promise<ApiAccessResponse>;
    canCreate(entity: string, request: express.Request, data: any): Promise<ApiAccessResponse>;
    canRead(entity: string, request: express.Request, data: any): Promise<ApiAccessResponse>;
    canUpdate(entity: string, request: express.Request, data: any): Promise<ApiAccessResponse>;
    canDelete(entity: string, request: express.Request, data: any): Promise<ApiAccessResponse>;
}
