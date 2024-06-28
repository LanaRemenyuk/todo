const USERID_KEY = "user-local-id";

export function setData({ userId }) {
  localStorage.setItem(USERID_KEY, userId);
}
export function getUserId() {
  return localStorage.getItem(USERID_KEY);
}

export function removeData() {
  localStorage.removeItem(USERID_KEY);
}

const localStorageService = {
  setData,
  getUserId,
  removeData
};
export default localStorageService;
