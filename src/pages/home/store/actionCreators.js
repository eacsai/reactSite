import * as actionTypes from './constants';
import { getPageDetail } from '@/services/home';
const res = {
  banners: [
    "https://tva1.sinaimg.cn/large/008i3skNly1gt2g78krfoj30jg0epgnm.jpg",
    "https://tva1.sinaimg.cn/large/008i3skNly1gt2l7bmum3j30jg0ep41u.jpg",
    "https://tva1.sinaimg.cn/large/008i3skNly1gt2l744toyj308c05kjrl.jpg",
    "https://tva1.sinaimg.cn/large/008i3skNly1gt2l7126hij30jg0ep40r.jpg",
  ],
  works: [
    "https://tva1.sinaimg.cn/large/008i3skNly1gt3n5ez0zuj60u00u0tgg02.jpg",
    "https://tva1.sinaimg.cn/large/008i3skNly1gt2l744toyj308c05kjrl.jpg",
    "https://tva1.sinaimg.cn/large/008i3skNly1gt3n541oz2j30u00u0tga.jpg",
    "https://tva1.sinaimg.cn/large/008i3skNly1gt2g78krfoj30jg0epgnm.jpg",
    "https://tva1.sinaimg.cn/large/008i3skNly1gt3n6bnztwj30u00u0q9l.jpg",
    "https://tva1.sinaimg.cn/large/008i3skNly1gt3nvolbv5j30u00u0n6y.jpg"
  ],
  types: ['All','Net','Golang',"Vue"]
}
const changeHomeBannersAction = (res) => ({
  type: actionTypes.CHANGE_Home_BANNERS,
  homeBanners: res.banners,
});

const changeHomeWorksAction = (res) => ({
  type: actionTypes.CHANGE_Home_WORKS,
  homeWorks: res.works,
})

const changeHomePagesAction = (res) => ({
  type: actionTypes.CHANGE_HOME_PAGES,
  homePages: res.data,
})

const changePageTypesAction = (res) => ({
  type: actionTypes.CHANGE_PAGE_TYPES,
  pageTypes: res.types,
})
export const getHomeBannersAction = () => {
  return dispatch => {
    // getHomeBanners().then(res => {
    //   dispatch(changeHomeBannersAction(res));
    // })
    dispatch(changeHomeBannersAction(res))
  }
}

export const getHomeWorksAction = () => {
  return dispatch => {
    // getHomeWorks().then(res => {
    //   dispatch(changeHomeBannersAction(res));
    // })
    dispatch(changeHomeWorksAction(res))
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
