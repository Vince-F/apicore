import { BaseApiController } from "./baseApiController";
import { EntityDao } from "./entityDao";
export declare abstract class CrudApiController<Dao extends EntityDao> extends BaseApiController<EntityDao> {
    create(data: any): Promise<Dao>;
    retrieve(id: string): Promise<Dao>;
    retrieveAll(): Promise<Array<Dao>>;
    update(id: string, data: any): Promise<Dao>;
    delete(id: string): Promise<void>;
}
