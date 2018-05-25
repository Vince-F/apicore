import { BaseApiController } from "./baseApiController";
import { EntityDao } from "./entityDao";

export abstract class CrudApiController<Dao extends EntityDao> extends BaseApiController<EntityDao> {

    create(data: any): Promise<Dao> {
        let entityDao = new this.daoClass(data);
        return entityDao.save()
            .then((data) => {
                return data as Dao;
            });
    }

    retrieve(id: string): Promise<Dao> {
        let entityDao = new this.daoClass();
        return entityDao.retrieve(id)
            .then((data) => {
                return data as Dao;
            });
    }

    retrieveAll(): Promise<Array<Dao>> {
        let entityDao = new this.daoClass();
        return entityDao.retrieveAll()
            .then((data) => {
                return data as Array<Dao>;
            });
    }

    update(id: string, data: any): Promise<Dao> {
        let entityDao = new this.daoClass(data);
        return entityDao.save()
            .then((data) => {
                return data as Dao;
            });
    }

    delete(id: string): Promise<void> {
        let entityDao = new this.daoClass();
        return entityDao.delete(id);
    }
}