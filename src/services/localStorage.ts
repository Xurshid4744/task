export const setToken = (token: string) => {
  localStorage.setItem("token", token);
};

export const setUser = (user: any) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const getUser = () => {
  let user = localStorage.getItem("user");
  if (user != null) {
    return JSON.parse(user);
  }
  return null;
};

export const deleteUser = () => {
  localStorage.clear();
};
