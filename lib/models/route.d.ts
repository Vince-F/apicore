/// <reference types="express" />
import { HttpVerb } from "./httpVerb";
import express = require("express");
export interface Route {
    verb: HttpVerb;
    localUrl: string;
    action: (req: express.Request, res: express.Response) => void;
}
