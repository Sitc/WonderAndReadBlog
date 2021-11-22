import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase/firebaseInit";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    blogPosts: [],
    postLoaded: null,
    blogHTML: "Write your blog title here...",
    blogTitle: "",
    blogPhotoName: "",
    blogPhotoFileURL: null,
    blogPhotoPreview: null,
    editPost: null,
    user: null,
    profileAdmin: null,
    profileEmail: null,
    profileFirstName: null,
    profileLastName: null,
    profileUsername: null,
    profileId: null,
    profileInitials: null,
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
  },
  getters: {
    blogPostsFeed(state) {
      return state.blogPosts.slice(0, 2);
    },
    blogPostsCards(state) {
      return state.blogPosts.slice(2, 6);
    },
  },
  mutations: {
    newBlogPost(state, payload) {
      state.blogHTML = payload;
    },
    updateBlogTitle(state, payload) {
      state.blogTitle = payload;
    },
    fileNameChange(state, payload) {
      state.blogPhotoName = payload;
    },
    createFileURL(state, payload) {
      state.blogPhotoFileURL = payload;
    },
    openPhotoPreview(state) {
      state.blogPhotoPreview = !state.blogPhotoPreview;
    },
    toggleEditPost(state, payload) {
      state.editPost = payload;
    },
    setBlogState(state, payload) {
      state.blogTitle = payload.blogTitle;
      state.blogHTML = payload.blogHTML;
      state.blogPhotoFileURL = payload.blogCoverPhoto;
      state.blogPhotoName = payload.blogCoverPhotoName;
    },
    filterBlogPost(state, payload) {
      state.blogPosts = state.blogPosts.filter((post) => post.blogID !== payload);
    },
    updateUser(state, payload) {
      state.user = payload;
    },
    setProfileAdmin(state, payload) {
      state.profileAdmin = payload;
      console.log(state.profileAdmin);
    },
    setProfileInfo(state, doc) {
      state.profileId = doc.id;
      state.profileEmail = doc.data().email;
      state.profileFirstName = doc.data().firstName;
      state.profileLastName = doc.data().lastName;
      state.profileUsername = doc.data().username;
      console.log(state.profileId);
    },
    setProfileInitials(state) {
      state.profileInitials =
        state.profileFirstName.match(/(\b\S)?/g).join("") + state.profileLastName.match(/(\b\S)?/g).join("");
    },
    changeFirstName(state, payload) {
      state.profileFirstName = payload;
    },
    changeLastName(state, payload) {
      state.profileLastName = payload;
    },
    changeUsername(state, payload) {
      state.profileUsername = payload;
    },
  },
  actions: {
    async getCurrentUser({ commit }, user) {
      const dataBase = await db.collection("users").doc(firebase.auth().currentUser.uid);
      const dbResults = await dataBase.get();
      commit("setProfileInfo", dbResults);
      commit("setProfileInitials");
      const token = await user.getIdTokenResult();
      const admin = await token.claims.admin;
      commit("setProfileAdmin", admin);
    },
    async getPost({ state }) {
      const dataBase = await db.collection("blogPosts").orderBy("date", "desc");
      const dbResults = await dataBase.get();
      dbResults.forEach((doc) => {
        if (!state.blogPosts.some((post) => post.blogID === doc.id)) {
          const data = {
            blogID: doc.data().blogID,
            blogHTML: doc.data().blogHTML,
            blogCoverPhoto: doc.data().blogCoverPhoto,
            blogTitle: doc.data().blogTitle,
            blogDate: doc.data().date,
            blogCoverPhotoName: doc.data().blogCoverPhotoName,
          };
          state.blogPosts.push(data);
        }
      });
      state.postLoaded = true;
    },
    async updatePost({ commit, dispatch }, payload) {
      commit("filterBlogPost", payload);
      await dispatch("getPost");
    },
    async deletePost({ commit }, payload) {
      const getPost = await db.collection("blogPosts").doc(payload);
      await getPost.delete();
      commit("filterBlogPost", payload);
    },
    async updateUserSettings({ commit, state }) {
      const dataBase = await db.collection("users").doc(state.profileId);
      await dataBase.update({
        firstName: state.profileFirstName,
        lastName: state.profileLastName,
        username: state.profileUsername,
      });
      commit("setProfileInitials");
    },
  },
  modules: {},
});