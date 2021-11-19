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
  </div>
</template>

<script>
import BlogPost from '../components/BlogPost.vue';
import BlogCard from '../components/BlogCard.vue'
export default {
  name: "Home",
  components: {BlogPost, BlogCard},
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
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
.blog_card_wrapper {
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}
</style>
