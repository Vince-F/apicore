import { BaseApiController } from "./baseApiController";
import { EntityDao } from "./entityDao";
import { ApiResponse } from "../models/apiResponse";
import express = require("express");
import { ApiAccessResponse } from "../models/apiAccessResponse";

export abstract class CrudApiController<Dao extends EntityDao> extends BaseApiController<EntityDao> {

    protected createResponseFromErrorObject(errorObj: any): ApiResponse {
        if (typeof errorObj === "object") {
            return {
                error: errorObj.error,
                status: errorObj.status,
                count: 0
            } as ApiResponse;
        } else {
            return {
                error: errorObj,
                status: 400,
                count: 0
            } as ApiResponse;
        }
    }

    create(data: any, req: express.Request): Promise<ApiResponse> {
        let entityDao = new this.daoClass(data);
        return this.permissionMgr.canCreate(this.entityName, req, data)
            .then((access) => {
                if (access.canAccess) {
                    return entityDao.save()
                        .then((data) => {
                            return {
                                data: data as Dao,
                                status: 201,
                                count: 1
                            } as ApiResponse;
                        });
                } else {
                    return {
                        status: access.status,
                        error: access.reason
                    } as ApiResponse;
                }
            }).catch((errorObj) => {
                return this.createResponseFromErrorObject(errorObj);
            });
    }

    retrieve(id: string, req: express.Request): Promise<ApiResponse> {
        let entityDao = new this.daoClass();
        return entityDao.retrieve(id)
            .then((data) => {
                return this.permissionMgr.canRead(this.entityName, req, data)
                    .then((access) => {
                        if (access.canAccess) {
                            return {
                                data: data as Dao,
                                status: 200,
                                count: 1
                            } as ApiResponse;
                        } else {
                            return {
                                status: access.status,
                                error: access.reason
                            } as ApiResponse;
                        }
                    }).catch((errorObj) => {
                        return this.createResponseFromErrorObject(errorObj);
                    });
            });
    }

    retrieveAll(req: express.Request): Promise<ApiResponse> {
        let entityDao = new this.daoClass();
        return entityDao.retrieveAll()
            .then((data) => {
                return this.permissionMgr.canRead(this.entityName, req, data)
                    .then((access) => {
                        if (access.canAccess) {
                            return {
                                data: data as Array<Dao>,
                                count: data.length,
                                status: 200
                            } as ApiResponse;
                        } else {
                            return {
                                status: access.status,
                                error: access.reason
                            } as ApiResponse;
                        }
                    }).catch((errorObj) => {
                        return this.createResponseFromErrorObject(errorObj);
                    });
            });
    }

    update(id: string, data: any, req: express.Request): Promise<ApiResponse> {
        let entityDao = new this.daoClass(data);
        return this.permissionMgr.canUpdate(this.entityName, req, data)
            .then((access) => {
                if (access.canAccess) {
                    return entityDao.save()
                        .then((data) => {
                            return {
                                data: data as Dao,
                                count: 1,
                                status: 200
                            } as ApiResponse;
                        });
                } else {
                    return {
                        status: access.status,
                        error: access.reason
                    } as ApiResponse;
                }
            }).catch((errorObj) => {
                return this.createResponseFromErrorObject(errorObj);
            });
    }

    delete(id: string, req: express.Request): Promise<ApiResponse> {
        let entityDao = new this.daoClass();
        return this.retrieve(id, req)
            .then((response) => {
                return this.permissionMgr.canDelete(this.entityName, req, response.data)
                    .then((access) => {
                        if (access.canAccess) {
                            return entityDao.delete(id)
                                .then(() => {
                                    return {
                                        status: 200,
                                        count: 0
                                    } as ApiResponse;
                                });
                        } else {
                            return {
                                status: access.status,
                                error: access.reason
                            } as ApiResponse;
                        }
                    });
            });

    }
}