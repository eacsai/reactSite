import * as actionTypes from './constants';
// import { getHomeBanners } from '@/services/home';

const changeHomeBannersAction = (res) => ({
  type: actionTypes.CHANGE_Home_BANNERS,
  homeBanners: res.banners,
});

export const getHomeBannersAction = () => {
  return dispatch => {
    // getHomeBanners().then(res => {
    //   dispatch(changeHomeBannersAction(res));
    // })
    let res = {
      banners: [
        "https://tva1.sinaimg.cn/large/008i3skNly1gt2g78krfoj30jg0epgnm.jpg",
        "https://tva1.sinaimg.cn/large/008i3skNly1gt2l7bmum3j30jg0ep41u.jpg",
        "https://tva1.sinaimg.cn/large/008i3skNly1gt2l744toyj308c05kjrl.jpg",
        "https://tva1.sinaimg.cn/large/008i3skNly1gt2l7126hij30jg0ep40r.jpg",
      ],
    }
    dispatch(changeHomeBannersAction(res))
  }
}