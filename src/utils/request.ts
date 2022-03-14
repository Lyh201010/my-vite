import { message as Message } from 'antd';
import axios from 'axios';
// import { useTranslation } from 'react-i18next';
// import { useNavigate } from 'react-router-dom';

// 网络请求，后续可以随时替换
// const { t } = useTranslation();
// const navigate = useNavigate();

// const getLocalStorage = (key: string) => {
//   return window.localStorage.getItem(key);
// }

// response拦截器 失败提示
export function errorMessage(error: any) {
  switch (error.response.status) {
    case 400:
      error.message = '错误请求';
      break;
    case 401:
      error.message = '未授权，请重新登录';
      break;
    case 403:
      error.message = '拒绝访问';
      break;
    case 404:
      error.message = '请求错误,未找到该资源';
      break;
    case 405:
      error.message = '请求方法未允许';
      break;
    case 408:
      error.message = '请求超时';
      break;
    case 500:
      error.message = '服务器端出错';
      break;
    case 501:
      error.message = '网络未实现';
      break;
    case 502:
      error.message = '网络错误';
      break;
    case 503:
      error.message = '服务不可用';
      break;
    case 504:
      error.message = '网络超时';
      break;
    case 505:
      error.message = 'http版本不支持该请求';
      break;
    default:
      error.message = `连接错误${error.response.status}`;
      break;
  }
}

const contentType = 'application/json;charset=UTF-8';
const service = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 10 * 1000,
  headers: {
    'Content-Type': contentType,
  },
});

// 请求拦截处理
service.interceptors.request.use(
  (config) => {
    config.data = JSON.stringify(config.data);
    config.headers = {
      username: 'Hunter',
      'Content-Type': 'application/json',
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截处理
service.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error && error.response) {
      // 1.公共错误处理
      // 2.根据响应码具体处理
      errorMessage(error);
    } else {
      // 超时处理
      if (JSON.stringify(error?.message).includes('timeout')) {
        Message.error('服务器响应超时，请刷新当前页');
        return;
      }
      Message.error('连接服务器失败');
      return;
    }
    Message.error(error.message);
    return Promise.reject(error);
  }
);

/* 封装 get 请求
 * @param url  请求url
 * @param params  请求参数
 * @returns {Promise}
 */
export function get(url: string, params: object) {
  return new Promise((resolve, reject) => {
    service
      .get(url, {
        params: params,
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

/* 封装 post 请求
 * @param url  请求url
 * @param params  请求参数
 * @returns {Promise}
 */
export function post(url: string, data: object) {
  return new Promise((resolve, reject) => {
    service
      .post(url, data)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

/* 封装 patch 请求
 * @param url  请求url
 * @param params  请求参数
 * @returns {Promise}
 */
export function patch(url: string, data: object) {
  return new Promise((resolve, reject) => {
    service
      .patch(url, data)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        errorMessage(error);
        reject(error);
      });
  });
}

/* 封装 put 请求
 * @param url  请求url
 * @param params  请求参数
 * @returns {Promise}
 */
export function put(url: string, data: object) {
  return new Promise((resolve, reject) => {
    service
      .put(url, data)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        errorMessage(error);
        reject(error);
      });
  });
}
