import { AxiosResponse } from "axios";
import { getAPIClient } from "./axios";


export const obterTudo = async (query: object): Promise<AxiosResponse> => {
  const api = getAPIClient()
  return api
    .get(`ave_morta`, {
      params: query,
    })
    .then(response => {
      return response;
    })
    .catch(err => {
      return err;
    });
};

export const obterPorId = async (id: string, query: object): Promise<AxiosResponse> => {
  const api = getAPIClient()
  return api
    .get(`ave_morta/${id}`, {
      params: query,
    })
    .then(response => {
      return response;
    })
    .catch(err => {
      return err;
    });
};
export const inserir = async (data: any): Promise<AxiosResponse> => {
  const api = getAPIClient()
  return api
    .post(`ave_morta`, data)
    .then(response => {
      return response;
    })
    .catch(err => {
      return err;
    });
};

export const atualizarPorId = async (id: string, data: any): Promise<AxiosResponse> => {
  const api = getAPIClient()
  return api
    .put(`ave_morta/${id}`, data)
    .then(response => {
      return response;
    })
    .catch(err => {
      return err;
    });
};

export const removerPorId = async (id: string): Promise<AxiosResponse> => {
  const api = getAPIClient()
  return api
    .delete(`ave_morta/${id}`)
    .then(response => {
      return response;
    })
    .catch(err => {
      return err;
    });
};