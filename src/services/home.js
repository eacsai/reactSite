import request from './request';

export function getHomeBanners() {
  return request({
    url: "/banner"
  })
}

export function getHomeWorks() {
  return request({
    url: "/works"
  })
}