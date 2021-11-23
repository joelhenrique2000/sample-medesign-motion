import { AxiosResponse } from "axios";
import { getAPIClient } from "./axios";

export const obterTudo = async (query: object): Promise<AxiosResponse> => {
  const api = getAPIClient()
  return api
    .get(`ovo_quebrado`, {
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
    .get(`ovo_quebrado/${id}`, {
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
    .post(`ovo_quebrado`, data)
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
    .put(`ovo_quebrado/${id}`, data)
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
    .delete(`ovo_quebrado/${id}`)
    .then(response => {
      return response;
    })
    .catch(err => {
      return err;
    });
};