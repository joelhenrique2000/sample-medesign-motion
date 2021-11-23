import { AxiosResponse } from "axios";

import { getAPIClient } from "./axios";

type SignInProp = {
    email: string,
    senha: string
  }

export const checkToken = async () => {
  const api = getAPIClient()
  return api
    .post(`token`)
    .then(response => {
      return response;
    })
    .catch(err => {
      return err;
    });
};

export const SignIn = async (data: SignInProp): Promise<AxiosResponse> => {
    const api = getAPIClient()
    return api
      .post(`account`, data)
      .then(response => {
        return response;
      })
      .catch(err => {
        return err;
      });
  };