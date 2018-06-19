import { EntityDao } from "..";

export interface ApiResponse {
    data?:EntityDao|Array<EntityDao>;
    status:number;
    error?:string;
    count:number;
}