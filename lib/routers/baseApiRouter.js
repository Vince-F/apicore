"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class BaseApiRouter {
    constructor(ctrlInstance) {
        this.ctrlInstance = ctrlInstance;
        this.router = express.Router();
    }
    addRoute(httpVerb, localUrl, action) {
        this.router[httpVerb](localUrl, action);
    }
    getRouter() {
        return this.router;
    }
    sendResponseFromPromise(promise, res) {
        promise.then((result) => {
            res.status(result.status);
            res.send({ success: true, result: result.data, count: result.count });
        }).catch((result) => {
            res.status(result.status);
            res.send({ success: false, error: result.error });
        });
    }
}
exports.BaseApiRouter = BaseApiRouter;
