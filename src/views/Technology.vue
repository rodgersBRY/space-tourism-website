<template>
  <div id="technology">
    <nav-bar />

    <main>
      <div class="top-text">
        <span>03</span>
        SPACE LAUNCH 101
      </div>
      <div class="align-horizontally">
        <div class="terminology-div">
          <div class="navigate-btns">
            <div class="active one">1</div>
            <div class="two">2</div>
            <div class="three">3</div>
          </div>
          <div class="terminology">
            <p>THE TERMINOLOGY...</p>
            <div class="terminology-title">LAUNCH VEHICLE</div>
            <div class="terminology-details">
              A launch vehicle or carrier rocket is a rocket-propelled <br />
              vehicle used to carry a payload from Earth's surface to <br />
              space, usually to Earth orbit or beyond. Our WEB-X <br />
              carrier rocket is the most powerful in operation. Standing <br />
              150 metres tall, it's quite an awe-inspiring sight on the <br />
              launch pad!
            </div>
          </div>
        </div>
        <div class="black-div" />
      </div>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#technology {
  background-image: url("../assets/technology/background-technology-desktop.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  padding-top: 3rem;
  color: white;
}

main {
  padding: 2rem 0 5rem 5rem;
}

.top-text {
  font-family: "Barlow-condensed", sans-serif;
  font-size: 28px;
  span {
    color: rgb(91, 90, 90);
    font-family: "Barlow-condensed", sans-serif;
    font-weight: bold;
    margin-right: 10px;
  }
}

.terminology-div {
  display: flex;
  align-items: center;
  .navigate-btns {
    margin-right: 5rem;
    div {
      border: 1px solid white;
      height: 70px;
      width: 70px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 16px 0;
      padding: 2px;
      font-size: 32px;
      cursor: pointer;
    }
    div.active {
      background-color: white;
      color: black;
    }
  }
}

.terminology p {
  font-family: "Barlow-condensed", sans-serif;
  font-size: 16px;
  letter-spacing: 2.7px;
}

.terminology-title {
  font-family: "Bellefair", serif;
  font-size: 56px;
  margin: 15px 0;
}

.terminology-details {
  font-size: 18px;
  font-family: "Barlow", sans-serif;
}

.align-horizontally {
  display: flex;
  position: relative;
  height: 500px;
  .black-div {
    width: 40%;
    height: 100%;
    background-color: #0b0d17;
    position: absolute;
    right: 0;
  }
}
</style>
