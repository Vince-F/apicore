import { EntityDao } from "./entityDao";
import { PermissionManager } from "./permissionManager";
export declare abstract class BaseApiController<Dao extends EntityDao> {
    protected daoClass: new (data?: any) => Dao;
    protected entityName: string;
    protected permissionMgr: PermissionManager;
    constructor(daoClass: new (data?: any) => Dao, entityName: string, permissionMgr: PermissionManager);
}
