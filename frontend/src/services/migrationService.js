import api from "./api";

export const startMigration = (projectId) => {
    return api.post(`/migration/start/${projectId}`);
};

export const getMigrationStatus = (projectId) => {
    return api.get(`/migration/status/${projectId}`);
};