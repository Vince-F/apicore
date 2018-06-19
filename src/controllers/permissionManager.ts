import express = require("express");
import { ApiAccessResponse } from "../models/apiAccessResponse";

export abstract class PermissionManager {

    abstract canExecuteAction(entity:string,action:string,request:express.Request,data:any):Promise<ApiAccessResponse>;

    canCreate(entity:string,request:express.Request,data:any):Promise<ApiAccessResponse> {
        return this.canExecuteAction(entity,"create",request,data);
    }

    canRead(entity:string,request:express.Request,data:any):Promise<ApiAccessResponse> {
        return this.canExecuteAction(entity,"read",request,data);
    }

    canUpdate(entity:string,request:express.Request,data:any) :Promise<ApiAccessResponse> {
        return this.canExecuteAction(entity,"update",request,data);
    }

    canDelete(entity:string,request:express.Request,data:any):Promise<ApiAccessResponse> {
        return this.canExecuteAction(entity,"delete",request,data);
    }
} 