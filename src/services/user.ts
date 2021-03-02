import request from '../utils/request';

export async function getInfo(data: any) {
    console.log(111)
    return request('/file/get', {
      method: 'POST',
      data,
    });
  }