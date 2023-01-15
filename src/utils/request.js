import axios from 'axios';
import Config from 'react-native-config';

const baseUrl = Config.API_URL;
const getHeaders = () => {
  return {
    'Access-Control-Allow-Origin': '*',
    'api-version': '1',
  };
};

const createRequestConfig = ({method, url, data, params}) => {
  const finalUrl = baseUrl + url;
  const config = {method, data, params, url: finalUrl};
  return config;
};

const addRequestInterceptors = () => {
  // Add any interceptor here
  axios.interceptors.request.use(
    requestConfig => {
      return requestConfig;
    },
    err => {
      // DO SOMETHING WITH ERROR
      return Promise.reject(err);
    },
  );
};
const addResponseInterceptors = () => {
  axios.interceptors.response.use(
    response => {
      // console.warn('Response', response);
      if (response.data && response.data.action === 'failure') {
        console.log('Explicit Failing api from backend');
        return Promise.reject(response.data);
      }
      // console.log('response ', response.data);
      return response.data;
    },
    error => {
      // Do something with response error
      return Promise.reject(error.response || error);
    },
  );
};

addRequestInterceptors();
addResponseInterceptors();

const createRequest = configuration => {
  // Add any common headers and other stuff here
  // Add some base URL here

  const headers = getHeaders();

  //  console.log('create request', configuration, headers);
  return axios({
    ...configuration,
    headers: headers,
  });
};

const get = (url, params = {}) => {
  const reqConfig = createRequestConfig({
    method: 'GET',
    url: url,
    params,
  });
  return createRequest(reqConfig);
};

const post = (url, data = {}, params = {}) => {
  const reqConfig = createRequestConfig({
    method: 'POST',
    url: url,
    data,
    params,
  });
  return createRequest(reqConfig);
};

const put = (url, data = {}, params = {}) => {
  const reqConfig = createRequestConfig({
    method: 'PUT',
    url: url,
    data,
    params,
  });
  return createRequest(reqConfig);
};

const del = (url, data = {}, params = {}) => {
  const reqConfig = createRequestConfig({
    method: 'DELETE',
    url: url,
    data,
    params,
  });
  return createRequest(reqConfig);
};

export default {get, post, put, del};
