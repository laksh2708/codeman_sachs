import api from "./api";

export const uploadSnippet = (data) => {
    return api.post("/projects/snippet", data);
};

export const uploadZip = (formData) => {
    return api.post("/projects/upload", formData);
};

export const uploadRepository = (data) => {
    return api.post("/projects/repository", data);
};