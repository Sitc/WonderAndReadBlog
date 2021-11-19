<template>
  <div class="blog_wrapper" :class="{'no-user' : !user}">
    <div class="blog_content">
      <div>
        <h2 v-if="post.welcomeScreen">{{ post.title }}</h2>
        <h2 v-else>{{ post.title }}</h2>
        <p v-if="post.welcomeScreen">{{ post.blogPost }}</p>
        <p class="content_preview" v-else>{{ post.blogPost }}</p>
        <router-link class="link link--light" v-if="post.welcomeScreen" to="#">
          Login/Register <Arrow class="arrow arrow_light"/>
        </router-link>
        <router-link class="link" v-else>
          Read more <Arrow class="arrow"/>
        </router-link>
      </div>
    </div>
    <div class="blog_photo">
      <img v-if="post.welcomeScreen" :src="require(`../assets/blogPhotos/${post.photo}.jpg`)" alt="">
      <img else :src="require(`../assets/blogPhotos/${post.photo}.jpg`)" alt="">
    </div>
  </div>
</template>

<script>
import Arrow from "../assets/Icons/arrow-right-light.svg"

  export default {
    name: 'blogPost',
    props: ['post'],
    components: { Arrow }
    
  }
</script>

<style lang="scss" scoped>
.blog_wrapper {
  display: flex;
  flex-direction: column;
  @media(min-width: 700px) {
    min-height: 650px;
    max-height: 650px;
    flex-direction: row;
  }
  .blog_content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 4;
    order: 2;
    @media(min-width: 700px) {
      order: 1;
    }
    @media(min-width: 800px) {
      flex: 3;
    }
    div {
      max-width: 350px;
      padding: 72px 24px;
      @media(min-width: 700px) {
        padding: 0 24px;
      }

      h2 {
        font-size: 32px;
        font-weight: 300;
        text-transform: uppercase;
        margin-bottom: 24px;
        @media(min-width: 700px) {
          font-size: 40px;
        }
      }
      p {
        font-size: 15px;
        font-weight: 300;
        line-height: 1.7;
      }

      .content_preview {
        font-size: 13px;
        max-height: 24px;
        width: 250px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .link {
        display: inline-flex;
        align-items: center;
        margin-top: 32px;
        padding-bottom: 4px;
        border-bottom: 1px solid transparent;
        transition: .5s ease-in all;
        &:hover {
          border-bottom-color: #303030;
        }
      }
      .link_light {
        &:hover {
          border-bottom-color: #fff;
        }
      }
    }
  }
  .blog_photo {
    order: 1;
    flex: 3;

    @media(min-width: 700px) {
      order: 2;
    } 

    @media(min-width: 800px) {
      flex: 4;
    } 

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &:nth-child(even) {
    .blog_content {
      order: 2;
    }
    .blog_photo {
      order: 1;
    }
  }
}
.no-user:first-child {
  .blog_content {
    background-color: #303030;
    color: #fff;
  }
}
</style>