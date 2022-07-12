<template>
  <header id="nav">
    <img :src="require('../assets/shared/logo.svg')" alt="logo.svg" />
    <div class="middle-line"></div>
    <div class="nav-links">
      <ul>
        <router-link to="/" tag="li" exact-active-class="active"
          ><span>00</span> HOME</router-link
        >
        <router-link to="/destination" tag="li" active-class="active"
          ><span>01</span> DESTINATION</router-link
        >
        <router-link to="/crew" tag="li" active-class="active"
          ><span>02</span> CREW</router-link
        >
        <router-link to="/technology" tag="li" active-class="active"
          ><span>03</span> TECHNOLOGY</router-link
        >
      </ul>
    </div>
    <div class="mobile-menu">
      <v-btn icon color="white" @click="openMenu">
        <i class="bx bx-menu bx-lg"></i>
      </v-btn>
    </div>
  </header>
</template>

<script>
export default {
  name: "nav-bar",

  data() {
    return {
      showNavigation: false,
    };
  },

  methods: {
    openMenu() {
      this.showNavigation = true;
    },
  },
};
</script>

<style lang="scss" scoped>
#nav {
  padding-left: 3rem;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .nav-links {
    background-color: rgba($color: #979797, $alpha: 0.2);
    width: 60%;
    padding-left: 4rem;
    font-family: "Bellefair", serif;
    font-weight: bold;
    padding-right: 10px;
    ul {
      list-style: none;
      li {
        display: inline-block;
        padding: 2rem 0;
        margin: 0 2rem;
        font-size: 16px;
        letter-spacing: 2.7px;
      }
      li:hover,
      li.active {
        border-bottom: 2px solid white;
        cursor: pointer;
      }
    }
  }
  .middle-line {
    position: relative;
    left: 3%;
    border-bottom: 1px solid rgba($color: #ffff, $alpha: 0.4);
    width: 40%;
  }
  .mobile-menu {
    display: none;
  }
  @media only screen and (max-width: 1200px) {
    .middle-line {
      display: none;
    }
    .nav-links {
      width: 70%;
      padding-left: 0;
      ul li {
        font-size: 14px;
        letter-spacing: 2.36px;
        margin: 0 1rem;
        span {
          display: none;
        }
      }
    }
  }
  @media only screen and (max-width: 600px) {
    padding: 10px;
    .nav-links {
      display: none;
    }
    .mobile-menu {
      display: block;
    }
  }
}
</style>
