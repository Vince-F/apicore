"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseApiController {
    constructor(daoClass, entityName, permissionMgr) {
        this.daoClass = daoClass;
        this.entityName = entityName;
        this.permissionMgr = permissionMgr;
    }
}
exports.BaseApiController = BaseApiController;
