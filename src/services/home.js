import request from './request';

export function getHomeBanners() {
  return request({
    url: "/default/index'"
  })
}

export function getPageDetail() {
  return request({
    url: "/default/getArticleList"
  })
} 

export function getPic() {
  return request({
    url: "/default/getPic"
  })
}

