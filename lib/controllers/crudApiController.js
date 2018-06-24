"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseApiController_1 = require("./baseApiController");
class CrudApiController extends baseApiController_1.BaseApiController {
    createResponseFromErrorObject(errorObj) {
        if (typeof errorObj === "object") {
            return {
                error: errorObj.error,
                status: errorObj.status,
                count: 0
            };
        }
        else {
            return {
                error: errorObj,
                status: 400,
                count: 0
            };
        }
    }
    create(data, req) {
        let entityDao = new this.daoClass(data);
        return this.permissionMgr.canCreate(this.entityName, req, data)
            .then((access) => {
            if (access.canAccess) {
                return entityDao.save()
                    .then((data) => {
                    return {
                        data: data,
                        status: 201,
                        count: 1
                    };
                });
            }
            else {
                return Promise.reject({
                    status: access.status,
                    error: access.reason
                });
            }
        }).catch((errorObj) => {
            return Promise.reject(this.createResponseFromErrorObject(errorObj));
        });
    }
    retrieve(id, req) {
        let entityDao = new this.daoClass();
        return entityDao.retrieve(id)
            .then((data) => {
            return new Promise((resolve, reject) => {
                this.permissionMgr.canRead(this.entityName, req, data)
                    .then((access) => {
                    if (access.canAccess) {
                        resolve({
                            data: data,
                            status: 200,
                            count: 1
                        });
                    }
                    else {
                        reject({
                            status: access.status,
                            error: access.reason
                        });
                    }
                }).catch((errorObj) => {
                    reject(this.createResponseFromErrorObject(errorObj));
                });
            });
        });
    }
    retrieveAll(req) {
        let entityDao = new this.daoClass();
        return entityDao.retrieveAll()
            .then((data) => {
            return new Promise((resolve, reject) => {
                this.permissionMgr.canRead(this.entityName, req, data)
                    .then((access) => {
                    if (access.canAccess) {
                        resolve({
                            data: data,
                            count: data.length,
                            status: 200
                        });
                    }
                    else {
                        reject({
                            status: access.status,
                            error: access.reason
                        });
                    }
                }).catch((errorObj) => {
                    reject(this.createResponseFromErrorObject(errorObj));
                });
            });
        });
    }
    update(id, data, req) {
        let entityDao = new this.daoClass(data);
        return this.permissionMgr.canUpdate(this.entityName, req, data)
            .then((access) => {
            if (access.canAccess) {
                return entityDao.save()
                    .then((data) => {
                    return {
                        data: data,
                        count: 1,
                        status: 200
                    };
                });
            }
            else {
                return Promise.reject({
                    status: access.status,
                    error: access.reason
                });
            }
        }).catch((errorObj) => {
            return Promise.reject(this.createResponseFromErrorObject(errorObj));
        });
    }
    delete(id, req) {
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
                        };
                    });
                }
                else {
                    return Promise.reject({
                        status: access.status,
                        error: access.reason
                    });
                }
            });
        });
    }
}
exports.CrudApiController = CrudApiController;
