const AUTH = "auth";
const USER = "user";
const THEME = "theme";

export const setUserToLocalStorage = (payload) =>
  localStorage.setItem(USER, JSON.stringify(payload));

export const setAuthToLocalStorage = (payload) =>
  localStorage.setItem(AUTH, payload);

export const getUserFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(USER) ?? "{}");

export const getAuthFromLocalStorage = () => localStorage.getItem(AUTH);

export const setThemeInLocalStorage = (payload) => localStorage.setItem(THEME, payload);

export const getPreferedTheme = () => localStorage.getItem(THEME);

export const handleLogout = () => {
  localStorage.removeItem(USER);
  localStorage.removeItem(AUTH);
};
