<template>
  <div class="home">
    <blog-post :post="landingPageData" />
    <blog-post :post="post" v-for="(post, index) in sampleBlogPosts" :key="index"/>
    <div class="blog_card_wrap">
      <div class="container">
        <h3>View more recent Blogs</h3>
        <div class="blog_cards">
          <BlogCard v-for="(item, index) in sampleBlogCards" :key="index" :item="item"/>
        </div>
      </div>
    </div>
    <div class="updates">
      <div class="container">
        <h2>never miss a post. Register for your free account today!</h2>
        <router-link class="router-button" to="#"> Register for Wonder and read blog <Arrow class="arrow arrow-light" /> </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from '../components/BlogPost.vue';
import BlogCard from '../components/BlogCard.vue'
import Arrow from "../assets/Icons/arrow-right-light.svg";
export default {
  name: "Home",
  components: {BlogPost, BlogCard, Arrow},
  data() {
    return {
      landingPageData: {
        title: "Welcome",
        blogPost: "Pariatur adipisicing Lorem velit proident sint dolor esse esse quis id. Esse sunt exercitation sit quis do commodo magna amet. Elit sunt non elit cillum nostrud ut non do. Aliquip commodo occaecat aliqua fugiat dolore magna excepteur cupidatat dolor commodo veniam. Nostrud nostrud duis nisi adipisicing.Aliqua irure cupidatat mollit qui excepteur aliquip. Aliqua adipisicing laborum minim ex ea. Qui adipisicing consequat minim aliqua voluptate ad ad laboris. Adipisicing mollit do deserunt commodo adipisicing magna officia irure sunt amet.Excepteur mollit ut ipsum ipsum ex culpa aliquip culpa occaecat aliquip. Consectetur enim anim qui ut laborum do nisi cillum reprehenderit ullamco minim. Nulla tempor est labore eu quis velit do proident aute.",
        welcomeScreen: true,
        photo: 'coding'
      },
      sampleBlogPosts: [
        {
          title: "How to start reading in different languages",
          blogPost: "Pariatur adipisicing Lorem velit proident sint dolor esse esse quis id. Esse sunt exercitation sit quis do commodo magna amet. Elit sunt non elit cillum nostrud ut non do. Aliquip commodo occaecat aliqua fugiat dolore magna excepteur cupidatat dolor commodo veniam. Nostrud nostrud duis nisi adipisicing.Aliqua irure cupidatat mollit qui excepteur aliquip. Aliqua adipisicing laborum minim ex ea. Qui adipisicing consequat minim aliqua voluptate ad ad laboris. Adipisicing mollit do deserunt commodo adipisicing magna officia irure sunt amet.Excepteur mollit ut ipsum ipsum ex culpa aliquip culpa occaecat aliquip. Consectetur enim anim qui ut laborum do nisi cillum reprehenderit ullamco minim. Nulla tempor est labore eu quis velit do proident aute.",
          photo: 'beautiful-stories'
        },
        {
          title: "Start a book related Instagram profile",
          blogPost: "Pariatur adipisicing Lorem velit proident sint dolor esse esse quis id. Esse sunt exercitation sit quis do commodo magna amet. Elit sunt non elit cillum nostrud ut non do. Aliquip commodo occaecat aliqua fugiat dolore magna excepteur cupidatat dolor commodo veniam. Nostrud nostrud duis nisi adipisicing.Aliqua irure cupidatat mollit qui excepteur aliquip. Aliqua adipisicing laborum minim ex ea. Qui adipisicing consequat minim aliqua voluptate ad ad laboris. Adipisicing mollit do deserunt commodo adipisicing magna officia irure sunt amet.Excepteur mollit ut ipsum ipsum ex culpa aliquip culpa occaecat aliquip. Consectetur enim anim qui ut laborum do nisi cillum reprehenderit ullamco minim. Nulla tempor est labore eu quis velit do proident aute.",
          photo: 'beautiful-stories'
        },
        {
          title: "Test",
          blogPost: "Pariatur adipisicing Lorem velit proident sint dolor esse esse quis id. Esse sunt exercitation sit quis do commodo magna amet. Elit sunt non elit cillum nostrud ut non do. Aliquip commodo occaecat aliqua fugiat dolore magna excepteur cupidatat dolor commodo veniam. Nostrud nostrud duis nisi adipisicing.Aliqua irure cupidatat mollit qui excepteur aliquip. Aliqua adipisicing laborum minim ex ea. Qui adipisicing consequat minim aliqua voluptate ad ad laboris. Adipisicing mollit do deserunt commodo adipisicing magna officia irure sunt amet.Excepteur mollit ut ipsum ipsum ex culpa aliquip culpa occaecat aliquip. Consectetur enim anim qui ut laborum do nisi cillum reprehenderit ullamco minim. Nulla tempor est labore eu quis velit do proident aute.",
          photo: 'beautiful-stories'
        }
      ],
    }
  },
  computed: {
    sampleBlogCards() {
      return this.$store.state.sampleBlogCards;
    }
  }
}
</script>

<style lang="scss" scoped>
.blog_card_wrapper {
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}
.updates {
  .container {
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 800px) {
      padding: 125px 25px;
      flex-direction: row;
    }
    .router-button {
      display: flex;
      font-size: 14px;
      text-decoration: none;
      @media (min-width: 800px) {
        margin-left: auto;
      }
    }
    h2 {
      font-weight: 300;
      font-size: 32px;
      max-width: 425px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      @media (min-width: 800px) {
        text-align: initial;
        font-size: 40px;
      }
    }
  }
}
</style>
