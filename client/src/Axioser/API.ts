import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Axioser } from "./Axioser";

const GET = "GET";
const POST = "POST";
const PUT = "PUT";
const PATCH = "PATCH";
const DELETE = "DELETE";

function get<T>(url: string): Promise<T> {
  let request: AxiosRequestConfig = {
    method: GET,
    url,
  };
  return _axios(request);
}

function post<T, U>(url: string, data?: U): Promise<T> {
  let request: AxiosRequestConfig = {
    method: POST,
    url,
    data,
  };
  return _axios(request);
}

function put<T, U>(url: string, data?: U): Promise<T> {
  let request: AxiosRequestConfig = {
    method: PUT,
    url,
    data,
  };
  return _axios(request);
}

function patch<T, U>(url: string, data?: U): Promise<T> {
  let request: AxiosRequestConfig = {
    method: PATCH,
    url,
    data,
  };
  return _axios(request);
}

function remove<T, U>(url: string): Promise<T> {
  let request: AxiosRequestConfig = {
    method: DELETE,
    url,
  };
  return _axios(request);
}

async function _axios<T>(request: AxiosRequestConfig): Promise<T> {
  let response: AxiosResponse<T> = await Axioser.request(request);

  if (
    response.status !== 200 &&
    response.status !== 201 &&
    response.status !== 204
  ) {
    throw new Error("HTTP Error");
  }
  return response.data;
}

const API = {
  get,
  post,
  put,
  patch,
  remove,
};

export default API;
