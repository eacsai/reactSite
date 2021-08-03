import { Map } from 'immutable';

import * as actionTypes from './constants';

const defaultState = Map({
  homeBanners: [],
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_Home_BANNERS:
      return state.set("homeBanners", action.homeBanners);
    default:
      return state;
  }
}

export default reducer;
