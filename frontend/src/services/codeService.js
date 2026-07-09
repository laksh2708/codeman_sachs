import api from "./api";

// Create
export const createSnippet = (data) => {
    return api.post("/code", data);
};

// Get All
export const getAllSnippets = () => {
    return api.get("/code");
};

// Get One
export const getSnippet = (id) => {
    return api.get(`/code/${id}`);
};

// Update
export const updateSnippet = (id, data) => {
    return api.patch(`/code/${id}`, data);
};

// Delete
export const deleteSnippet = (id) => {
    return api.delete(`/code/${id}`);
};