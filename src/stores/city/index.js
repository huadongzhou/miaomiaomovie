const state = {
  nm: window.localStorage.getItem('citynm') || '北京',
  id: window.localStorage.getItem('cityid') || 1
};
const actions = {

};
const mutations = {
  CITY_INFO (state, city) {
    state.nm = city.nm
    state.id = city.id
  }
};
export default {
  namespaced: true,
  state,
  actions,
  mutations
}