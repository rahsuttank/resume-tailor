// src/utils/auth.js
export const getToken = () => localStorage.getItem("token");
export const removeToken = () => localStorage.removeItem("token");