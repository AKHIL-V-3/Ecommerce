import { AxiosResponse } from "axios";
import api from "../axios/axios";
import { IsignInUser, Iuser } from "../Interfaces/interface";

export const signUpUser = async(user: Iuser): Promise<AxiosResponse> => {
  return await api.post("/api/user/signup", user);
};

export const signInUser = async (user: IsignInUser): Promise<AxiosResponse> => {
  return await api.post("/api/user/signin", user,{ withCredentials: true });
};
