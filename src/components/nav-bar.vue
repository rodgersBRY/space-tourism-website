<template>
  <header id="nav">
    <img
      :src="require('../assets/shared/logo.svg')"
      alt="logo.svg"
    />
    <div class="middle-line">

    </div>
    <div class="nav-links">
      <ul>
        <router-link to="/" tag="li" exact-active-class="active">00 HOME</router-link>
        <router-link to="/destination" tag="li" active-class="active">01 DESTINATION</router-link>
        <router-link to="/crew" tag="li" active-class="active">02 CREW</router-link>
        <router-link to="/technology" tag="li" active-class="active">03 TECHNOLOGY</router-link>
      </ul>
    </div>
  </header>
</template>

<style lang="scss" scoped>
#nav {
  padding-left: 3rem;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  

  .nav-links {
    background-color: rgba($color: #ffff, $alpha: 0.2);
    width: 60%;
    padding-left: 4rem;
    font-family: 'Bellefair', serif;
  font-weight: bold;
    ul {
      list-style: none;
      li {
        display: inline-block;
        padding: 2rem 0;
        margin: 0 2rem;
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
}
</style>
