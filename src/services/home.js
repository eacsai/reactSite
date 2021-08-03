import request from './request';

export function getHomeBanners() {
  return request({
    url: "/banner"
  })
}