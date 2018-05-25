"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseApiController {
    constructor(daoClass, entityName) {
        this.daoClass = daoClass;
        this.entityName = entityName;
    }
}
exports.BaseApiController = BaseApiController;
