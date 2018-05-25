import { EntityDao } from "./entityDao";
export declare abstract class BaseApiController<Dao extends EntityDao> {
    protected daoClass: new (data?: any) => Dao;
    protected entityName: string;
    constructor(daoClass: new (data?: any) => Dao, entityName: string);
}
