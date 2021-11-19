<template>
  <header>
    <nav class="container">
      <div class="branding">
        <router-link class="header" :to="{ name: Home }">Wonder and read</router-link>
      </div>
      <div class="nav_links">
        <ul v-if="!isMobile">
          <router-link class="link" to="#">Home</router-link>
          <router-link class="link" to="#">Blogs</router-link>
          <router-link class="link" to="#">Create post</router-link>
          <router-link class="link" to="#">Login/register</router-link>
        </ul>
      </div>
    </nav>
    <menuIcon @click="toggleMobileNav" class="menu_icon" v-if="isMobile"/>
    <transition name="mobile-nav">
      <ul v-if="mobileNav" class="mobile_nav">
        <router-link class="link" to="#">Home</router-link>
        <router-link class="link" to="#">Blogs</router-link>
        <router-link class="link" to="#">Create post</router-link>
        <router-link class="link" to="#">Login/register</router-link>
      </ul>
    </transition>
  </header>
</template>

<script>
  import menuIcon from '../assets/Icons/bars-regular.svg'
  import style_variables from "../_style_variables.scss";
  // import Home from '../views/Home.vue'
  export default {
    name: "Navigation",
    components: {
      menuIcon,
      // Home
    },
    data() {
      return {
        bgColor: style_variables.lightBgColor,
        isMobile: null,
        mobileNav: null,
        windowWidth: null
      }
    },
    created() {
      window.addEventListener('resize', this.checkScreen)
    },
    methods: {
      checkScreen() {
        console.log("object")
        this.windowWidth = window.innerWidth
        if(this.windowWidth <= 750) {
          this.isMobile = true
          return
        }
        this.isMobile = false
        this.mobileNav = false
        return
      },
      toggleMobileNav () {
        this.mobileNav = !this.mobileNav
      }
    }
  }
</script>

<style lang="scss" scoped>
header {
  background: var(--bgColor);
  padding: 0 25px;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
  z-index: 99;
  .link {
    font-weight: 500;
    padding: 0 8px;
    transition: .3s color ease;

    &:hover {
      color: teal;
    }
  }
  nav {
    display: flex;
    padding: 25px 0;
    .branding {
      display: flex;
      align-items: center;

      .header {
        font-weight: 600;
        font-size: 24px;
        color: black;
        text-decoration: none;
      }
    }
    .nav_links {
      position: relative;
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: flex-end;

      ul {
        margin: 32px;

        .link {
          margin-right: 32px;
          &:last-child {
            margin: 0;
          }
        }
      }

    }
  }

  .menu_icon {
    cursor: pointer;
    position: absolute;
    top: 32px;
    right: 25px;
    height: 25px;
    width: auto;
  }

  .mobile_nav {
    padding: 20px;
    width: 70%;
    max-width: 250px;
    display: flex;
    flex-direction: column;
    position: fixed;
    height: 100%;
    background-color: #303030;
    top: 0;
    left: 0;

    .link {
      padding: 15px 0;

    }
  }
  .mobile-nav-enter-active {
    transition: all 1s ease;
  }

  .mobile.nav-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .mobile-nav-enter {
    transform: translateX(-250px);
  }
  .mobile-nav-enter-to {
    transform: translateX(0);
  }
  .mobile-nav-leave-to {
    transform: translateX(-250px);
  }
}
</style>