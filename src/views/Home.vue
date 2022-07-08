<template>
  <div id="home">
    <nav-bar />

    <main>
      <div class="title-div">
        <div>
          <p
            class="display-2 mb-5"
            style="
              font-size: 28px;
              letter-spacing: 4.75px;
              font-family: 'Barlow Condensed', sans-serif;
            "
          >
            SO, YOU WANT TO TRAVEL TO
          </p>
          <p
            class="display-3"
            style="font-size: 150px; font-family: 'Bellefair', serif"
          >
            SPACE
          </p>
          <div style="font-size: 18px; font-family: 'Barlow', sans-serif">
            Let's face it; If you want to go to space, you might as well <br />
            genuinely go outer space and not hover kind of on the <br />
            edge of it. Well sit back, and relax because we'll give you <br />
            a truly out of this world experience
          </div>
        </div>
      </div>
      <div class="explore-btn-div">
        <div class="explore-btn" @click.stop="$router.push('/destination')">
          <p class="display-2" style="font-size: 32px">EXPLORE</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss" scoped>
#home {
  background-image: url("../assets/home/background-home-desktop.jpg");
  background-size: cover;
  height: 100vh;
  padding-top: 3rem;
}

main {
  color: white;
  display: flex;
  justify-content: space-around;
  .title-div,
  .explore-btn-div {
    height: 70vh;
    display: flex;
    align-items: flex-end;
    padding: 0 2rem;
  }

  .explore-btn {
    background-color: white;
    color: black;
    height: 200px;
    width: 200px;
    border-radius: 50%;
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .explore-btn:hover {
    cursor: pointer;
  }
}
</style>
