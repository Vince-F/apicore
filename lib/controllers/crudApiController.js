"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseApiController_1 = require("./baseApiController");
class CrudApiController extends baseApiController_1.BaseApiController {
    create(data) {
        let entityDao = new this.daoClass(data);
        return entityDao.save()
            .then((data) => {
            return data;
        });
    }
    retrieve(id) {
        let entityDao = new this.daoClass();
        return entityDao.retrieve(id)
            .then((data) => {
            return data;
        });
    }
    retrieveAll() {
        let entityDao = new this.daoClass();
        return entityDao.retrieveAll()
            .then((data) => {
            return data;
        });
    }
    update(id, data) {
        let entityDao = new this.daoClass(data);
        return entityDao.save()
            .then((data) => {
            return data;
        });
    }
    delete(id) {
        let entityDao = new this.daoClass();
        return entityDao.delete(id);
    }
}
exports.CrudApiController = CrudApiController;
