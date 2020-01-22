
const state = {
  uu: [],
  tt: []
}

const actions = {}
const mutations = {
  SETCONTENT (state, params) {
    state.uu = params.img
    state.tt = params.txtt
  }
}

export default {
  state,
  actions,
  mutations
}
