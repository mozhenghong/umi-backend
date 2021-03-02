/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
import { extend } from 'umi-request';
import { notification } from 'antd';
import {history} from 'umi';
import { stringify } from 'querystring';
import { getPageQuery } from '@/utils/utils';

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

/**
 * 异常处理程序
 */

const errorHandler = (error: { response: Response; message: string }): Response => {
  const { response } = error;
  if (response && response.status) {
    const errorText = codeMessage[response.status] || response.statusText;
    const { status, url } = response;

    notification.error({
      message: `请求错误 ${status}: ${url}`,
      description: errorText,
    });
  } else if (!response) {
    notification.error({
      message: error.message,
    });
    // throw new Error(error.message);
  }
  return response;
};

/**
 * 配置request请求时的默认参数
 */
const baseUrl = process.env.NODE_ENV === 'production' ? 'https://mehealth-yard.mjiankang.com/mehealth-yard' : 'https://mehealth-yard-dev-alipay-health.dev.yunhutech.com';

const basePrefix = '/';
const request = extend({
  errorHandler, // 默认错误处理
  credentials: 'include', // 默认请求是否带上cookie
  // prefix: `${BASE_URL}${BASE_PREFIX}`, // 前缀, 用于覆盖统一设置的prefix
  prefix: `${baseUrl}${basePrefix}`, // 前缀, 用于覆盖统一设置的prefix
});

/**
 * request 拦截器
 */
request.interceptors.request.use((url, options) => {
  return {
    url: `${url}?token=${localStorage.getItem('token') || undefined}`,
    options: {
      ...options,
      headers: {
        // adminToken: window.localStorage.getItem('adminToken') || '',
        // adminUserId: window.localStorage.getItem('adminUserId') || '',
      },
      interceptors: true,
    },
  };
});

request.interceptors.response.use(async response => {
  const data = await response.clone().json();
  if (data.code === 'MHY1001' || data.status === 500) {
    window.localStorage.setItem('tokenExpired', 'expired');
    notification.error({
      message: `登陆过期，请重新登录！`,
      description: data.msg,
    });
    window.localStorage.clear();
    const { redirect } = getPageQuery();
    if (window.location.pathname !== '/user/login' && !redirect) {
        history.push({
        pathname: '/user/login',
        search: stringify({
          redirect: window.location.href,
        }),
      });
    }
  }
  if (data.code !== 0) {
    throw new Error(data.msg);
  }
  return response;
});

export default request;
