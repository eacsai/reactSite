import * as actionTypes from './constants';
import { getPageDetail } from '@/services/home';
import { getPic } from '@/services/home';

const res = {
  banners: [
    "https://tva1.sinaimg.cn/large/008i3skNly1gt2g78krfoj30jg0epgnm.jpg",
    "https://tva1.sinaimg.cn/large/008i3skNly1gt2l7bmum3j30jg0ep41u.jpg",
    "https://tva1.sinaimg.cn/large/008i3skNly1gt2l744toyj308c05kjrl.jpg",
    "https://tva1.sinaimg.cn/large/008i3skNly1gt2l7126hij30jg0ep40r.jpg",
  ],
  types: ['All','Net','Golang',"Vue"]
}
const changeHomeBannersAction = (res) => ({
  type: actionTypes.CHANGE_Home_BANNERS,
  homeBanners: res.banners,
});

const changeHomePagesAction = (res) => ({
  type: actionTypes.CHANGE_HOME_PAGES,
  homePages: res.data,
})

const changePageTypesAction = (res) => ({
  type: actionTypes.CHANGE_PAGE_TYPES,
  pageTypes: res.types,
})

const changeWorksImageAction = (res) => ({
  type: actionTypes.CHANGE_WORKS_IMAGES,
  workImages: res.data
});
export const getHomeBannersAction = () => {
  return dispatch => {
    dispatch(changeHomeBannersAction(res))
  }
}

export const getHomePagesAction = () => {
  return dispatch => {
    getPageDetail().then(res => {
      dispatch(changeHomePagesAction(res));
    }).catch(err => console.log(err));
  }
}

export const getPageTypesAction = () => {
  return dispatch => {
    // getHomePages().then(res => {
    //   dispatch(changeHomeBannersAction(res));
    // })
    dispatch(changePageTypesAction(res))
  }
}
export const getPicturesAction = () => {
  return (dispatch) => {
    getPic().then(res => {
      dispatch(changeWorksImageAction(res));
    })
  };
};