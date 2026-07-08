import api from "./api";

export const login = (data) => {
    return api.post("/auth/login", data);
};

export const signup = (data) => {
    return api.post("/auth/signup", data);
};