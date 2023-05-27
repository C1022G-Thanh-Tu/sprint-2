import request from "../config/request";

const getUserDetail = () => {
  const token = localStorage.getItem("token");
  return request.get("/user/detail", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const userService = {
    getUserDetail
}

export default userService
