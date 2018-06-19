"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PermissionManager {
    canCreate(entity, request, data) {
        return this.canExecuteAction(entity, "create", request, data);
    }
    canRead(entity, request, data) {
        return this.canExecuteAction(entity, "read", request, data);
    }
    canUpdate(entity, request, data) {
        return this.canExecuteAction(entity, "update", request, data);
    }
    canDelete(entity, request, data) {
        return this.canExecuteAction(entity, "delete", request, data);
    }
}
exports.PermissionManager = PermissionManager;
