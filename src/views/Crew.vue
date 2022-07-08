<template>
  <div id="crew">
    <nav-bar />

    <main>
      <div class="meet-crew"><span>02</span>MEET YOUR CREW</div>
      <div class="crew-info">
        <div class="crew-title">COMMANDER</div>
        <div class="crew-name">DOUGLAS HURLEY</div>
        <div class="crew-details">
          Douglas Gerald Hurley is an American engineer, former <br />
          Marine Corps pilot and former NASA astronaut. He <br />
          launched into space for the third time as commander of <br />
          Crew Dragon Demo-2.
        </div>
        <div class="progress-circles">
          <ul>
            <li><i class="bx bxs-circle active"></i></li>
            <li><i class="bx bxs-circle"></i></li>
            <li><i class="bx bxs-circle"></i></li>
            <li><i class="bx bxs-circle"></i></li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
main {
  color: white;
  padding: 2rem 5rem;
}
#crew {
  background-image: url("../assets/crew/background-crew-desktop.jpg");
  background-size: cover;
  height: 100vh;
  padding-top: 3rem;
}

.meet-crew {
  font-family: "Barlow-condensed", sans-serif;
  font-size: 28px;
  span {
    color: rgb(91, 90, 90);
    font-family: "Barlow-condensed", sans-serif;
    font-weight: bold;
    margin-right: 10px;
  }
}

.crew-title {
  font-family: "Bellefair", serif;
  font-size: 32px;
  color: grey;
  margin-top: 10rem;
}

.crew-name {
  font-family: "Bellefair", serif;
  font-size: 56px;
  margin: 1rem 0;
}

.crew-details {
  font-family: "Barlow", sans-serif;
  font-size: 18x;
  margin: 2rem 0;
}

.progress-circles {
  margin-top: 10px;
  ul {
    list-style: none;
    li {
      display: inline-block;
      margin: 0 5px;
      color: rgb(70, 69, 69);
      cursor: pointer;
    }
    li.active {
      color: white;
    }
  }
}
</style>
