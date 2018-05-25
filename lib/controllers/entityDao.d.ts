export interface EntityDao {
    save(): Promise<EntityDao>;
    retrieve(id: string): Promise<EntityDao>;
    retrieveAll(): Promise<Array<EntityDao>>;
    delete(id: string): Promise<void>;
}
