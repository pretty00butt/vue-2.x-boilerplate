import * as types from '../mutation-types'

const state = {
  friends: []
}

const mutations = {
  [types.GET_FRIENDS] (state, { friends }) {
    state.friends = friends
  },

  [types.ADD_FRIENDS] (state, { friend }) {
    state.friends.push(friend)
  }
}

const actions = {
  getFriends ({ commit }) {
    return new Promise((resolve, reject) => {
      let friends = [{
        name: 'KIM'
      }, {
        name: 'JO'
      }]

      setTimeout(() => {
        commit(types.GET_FRIENDS, {
          friends
        })

        resolve(friends)
      }, 2000)
    })
  },

  addMoreFriends ({ commit }) {
    let friends = [{
      name: 'JANG'
    }, {
      name: 'PARK'
    }, {
      name: 'YUM'
    }, {
      name: 'JEONG'
    }]

    commit(types.ADD_FRIENDS, {
      friend: friends[Math.ceil(Math.random() * 4) - 1]
    })
  }
}

const getters = {
  friends: state => state.friends
}

export default {
  state,
  mutations,
  getters,
  actions
}
