import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sampleBlogCards: [
      {
        blogTitle: "How to start reading in different languages",
        blogPost: "Pariatur adipisicing Lorem velit proident sint dolor esse esse quis id. Esse sunt exercitation sit quis do commodo magna amet. Elit sunt non elit cillum nostrud ut non do. Aliquip commodo occaecat aliqua fugiat dolore magna excepteur cupidatat dolor commodo veniam. Nostrud nostrud duis nisi adipisicing.Aliqua irure cupidatat mollit qui excepteur aliquip. Aliqua adipisicing laborum minim ex ea. Qui adipisicing consequat minim aliqua voluptate ad ad laboris. Adipisicing mollit do deserunt commodo adipisicing magna officia irure sunt amet.Excepteur mollit ut ipsum ipsum ex culpa aliquip culpa occaecat aliquip. Consectetur enim anim qui ut laborum do nisi cillum reprehenderit ullamco minim. Nulla tempor est labore eu quis velit do proident aute.",
        coverPhoto: 'stock-1',
        blogDate: ""
      },
      {
        blogTitle: "Start a book related Instagram profile",
        blogPost: "Pariatur adipisicing Lorem velit proident sint dolor esse esse quis id. Esse sunt exercitation sit quis do commodo magna amet. Elit sunt non elit cillum nostrud ut non do. Aliquip commodo occaecat aliqua fugiat dolore magna excepteur cupidatat dolor commodo veniam. Nostrud nostrud duis nisi adipisicing.Aliqua irure cupidatat mollit qui excepteur aliquip. Aliqua adipisicing laborum minim ex ea. Qui adipisicing consequat minim aliqua voluptate ad ad laboris. Adipisicing mollit do deserunt commodo adipisicing magna officia irure sunt amet.Excepteur mollit ut ipsum ipsum ex culpa aliquip culpa occaecat aliquip. Consectetur enim anim qui ut laborum do nisi cillum reprehenderit ullamco minim. Nulla tempor est labore eu quis velit do proident aute.",
        coverPhoto: 'stock-2',
        blogDate: ""
      },
      {
        blogTitle: "Test",
        blogPost: "Pariatur adipisicing Lorem velit proident sint dolor esse esse quis id. Esse sunt exercitation sit quis do commodo magna amet. Elit sunt non elit cillum nostrud ut non do. Aliquip commodo occaecat aliqua fugiat dolore magna excepteur cupidatat dolor commodo veniam. Nostrud nostrud duis nisi adipisicing.Aliqua irure cupidatat mollit qui excepteur aliquip. Aliqua adipisicing laborum minim ex ea. Qui adipisicing consequat minim aliqua voluptate ad ad laboris. Adipisicing mollit do deserunt commodo adipisicing magna officia irure sunt amet.Excepteur mollit ut ipsum ipsum ex culpa aliquip culpa occaecat aliquip. Consectetur enim anim qui ut laborum do nisi cillum reprehenderit ullamco minim. Nulla tempor est labore eu quis velit do proident aute.",
        coverPhoto: 'stock-3',
        blogDate: ""
      },
      {
        blogTitle: "Test",
        blogPost: "Pariatur adipisicing Lorem velit proident sint dolor esse esse quis id. Esse sunt exercitation sit quis do commodo magna amet. Elit sunt non elit cillum nostrud ut non do. Aliquip commodo occaecat aliqua fugiat dolore magna excepteur cupidatat dolor commodo veniam. Nostrud nostrud duis nisi adipisicing.Aliqua irure cupidatat mollit qui excepteur aliquip. Aliqua adipisicing laborum minim ex ea. Qui adipisicing consequat minim aliqua voluptate ad ad laboris. Adipisicing mollit do deserunt commodo adipisicing magna officia irure sunt amet.Excepteur mollit ut ipsum ipsum ex culpa aliquip culpa occaecat aliquip. Consectetur enim anim qui ut laborum do nisi cillum reprehenderit ullamco minim. Nulla tempor est labore eu quis velit do proident aute.",
        coverPhoto: 'stock-4',
        blogDate: ""
      },
    ],
    editPost: null,
    user: null,
  },
  mutations: {
    toggleEditPost(state, payload) {
      state.editPost = payload;
    },
  },
  actions: {
  },
  modules: {
  }
})
