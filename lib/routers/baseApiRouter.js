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
}
exports.BaseApiRouter = BaseApiRouter;
