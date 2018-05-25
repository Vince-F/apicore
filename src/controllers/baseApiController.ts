import { EntityDao } from "./entityDao";

export abstract class BaseApiController<Dao extends EntityDao> {
    protected daoClass: new (data?: any) => Dao;
    protected entityName: string;

    constructor(daoClass: new (data?: any) => Dao, entityName: string) {
        this.daoClass = daoClass;
        this.entityName = entityName;
    }
}