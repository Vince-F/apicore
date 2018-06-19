import { EntityDao } from "./entityDao";
import { PermissionManager } from "./permissionManager";

export abstract class BaseApiController<Dao extends EntityDao> {
    protected daoClass: new (data?: any) => Dao;
    protected entityName: string;
    protected permissionMgr: PermissionManager;

    constructor(daoClass: new (data?: any) => Dao, entityName: string, permissionMgr:PermissionManager) {
        this.daoClass = daoClass;
        this.entityName = entityName;
        this.permissionMgr = permissionMgr;
    }
}