import * as actionTypes from './constants';
// import { getHomeBanners,getHomeWorks } from '@/services/home';
const res = {
  img:['https://tva1.sinaimg.cn/large/008i3skNly1gt2l7126hij30jg0ep40r.jpg',
       'https://tva1.sinaimg.cn/large/008i3skNly1gt2l7126hij30jg0ep40r.jpg',
       'https://tva1.sinaimg.cn/large/008i3skNly1gt2l7126hij30jg0ep40r.jpg',
       'https://tva1.sinaimg.cn/large/008i3skNly1gt3nvolbv5j30u00u0n6y.jpg',
       'https://tva1.sinaimg.cn/large/008i3skNly1gt2l7126hij30jg0ep40r.jpg',
       'https://tva1.sinaimg.cn/large/008i3skNly1gt2l7126hij30jg0ep40r.jpg',
       'https://tva1.sinaimg.cn/large/008i3skNly1gt2l7126hij30jg0ep40r.jpg',
       'https://tva1.sinaimg.cn/large/008i3skNly1gt2l7126hij30jg0ep40r.jpg',
       'https://tva1.sinaimg.cn/large/008i3skNly1gt2l7126hij30jg0ep40r.jpg',
       'https://tva1.sinaimg.cn/large/008i3skNly1gt2l7126hij30jg0ep40r.jpg',
       'https://tva1.sinaimg.cn/large/008i3skNly1gt2l7126hij30jg0ep40r.jpg',
       'https://tva1.sinaimg.cn/large/008i3skNly1gt2l7126hij30jg0ep40r.jpg',
       'https://tva1.sinaimg.cn/large/008i3skNly1gt2l7126hij30jg0ep40r.jpg',
       'https://tva1.sinaimg.cn/large/008i3skNly1gt2l7126hij30jg0ep40r.jpg',
       'https://tva1.sinaimg.cn/large/008i3skNly1gt2l7126hij30jg0ep40r.jpg',
       'https://tva1.sinaimg.cn/large/008i3skNly1gt2l7126hij30jg0ep40r.jpg',
       'https://tva1.sinaimg.cn/large/008i3skNly1gt2l7126hij30jg0ep40r.jpg',
       'https://tva1.sinaimg.cn/large/008i3skNly1gt2l7126hij30jg0ep40r.jpg',
       'https://tva1.sinaimg.cn/large/008i3skNly1gt2l7126hij30jg0ep40r.jpg',
       'https://tva1.sinaimg.cn/large/008i3skNly1gt2l7126hij30jg0ep40r.jpg',
       'https://tva1.sinaimg.cn/large/008i3skNly1gt2l7126hij30jg0ep40r.jpg',
       'https://tva1.sinaimg.cn/large/008i3skNly1gt2l7126hij30jg0ep40r.jpg',
       'https://tva1.sinaimg.cn/large/008i3skNly1gt2l7126hij30jg0ep40r.jpg',
       'https://tva1.sinaimg.cn/large/008i3skNly1gt2l7126hij30jg0ep40r.jpg',
       'https://tva1.sinaimg.cn/large/008i3skNly1gt2l7126hij30jg0ep40r.jpg',
       'https://tva1.sinaimg.cn/large/008i3skNly1gt2l7126hij30jg0ep40r.jpg',
       'https://tva1.sinaimg.cn/large/008i3skNly1gt2l7126hij30jg0ep40r.jpg',
       'https://tva1.sinaimg.cn/large/008i3skNly1gt2l7126hij30jg0ep40r.jpg',
       'https://tva1.sinaimg.cn/large/008i3skNly1gt2l7126hij30jg0ep40r.jpg',
      ],
}

const changeWorksImageAction = (res) => ({
  type: actionTypes.CHANGE_WORKS_IMAGES,
  workImages: res.img,
})

export const getPageTypesAction = () => {
  return dispatch => {
    dispatch(changeWorksImageAction(res))
  }
}
