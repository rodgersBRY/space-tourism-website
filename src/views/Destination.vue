<template>
  <div id="destination">
    <nav-bar />

    <main>
      <div class="pick-destination">
        <span>01</span>
        PICK YOUR DESTINATION
      </div>
      <div class="tabs-container">
        <div class="tabs">
          <ul>
            <li>MOON</li>
            <li>MARS</li>
            <li>EUROPA</li>
            <li>TITAN</li>
          </ul>
        </div>
        <div class="tab-contents">
          <div>MOON</div>
          <div class="details">
            See our planet as you’ve never seen it before. A perfect <br />
            relaxing trip away to help regain perspective and come <br />
            back refreshed. While you’re there, take in some history <br />
            by visiting the Luna 2 and Apollo 11 landing sites.
          </div>
        </div>
        <div class="divider"></div>
        <div class="metrics">
          <div class="distance">
            <header>AVG. DISTANCE</header>
            <p>384,400 KM</p>
          </div>
          <div class="travel-time">
            <header>EST. TRAVEL TIME</header>
            <p>3 DAYS</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        {
          title: "MOON",
          details:
            "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
          distance: "384,400 KM",
          travelTime: "3 DAYS",
        },
        {
          title: "MARS",
          details:
            "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
          distance: "225 MIL. KM",
          travelTime: "9 MONTHS",
        },

        {
          title: "EUROPA",
          details:
            "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
          distance: "628 MIL. KM",
          travelTime: "3 YEARS",
        },
        {
          title: "TITAN",
          details:
            "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
          distance: "1.6 BIL. KM",
          travelTime: "7 YEARS",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
#destination {
  background-image: url("../assets/destination/background-destination-desktop.jpg");
  background-size: cover;
  height: 100vh;
  padding-top: 3rem;
}

main {
  display: flex;
  padding: 2rem 5rem;
}

.pick-destination {
  color: white;
  font-family: "Barlow-condensed", sans-serif;
  font-size: 28px;
  span {
    color: rgb(91, 90, 90);
    font-family: "Barlow-condensed", sans-serif;
    font-weight: bold;
    margin-right: 10px;
  }
}

.tabs {
  font-family: "barlow-condensed", sans-serif;
  font-size: 16px;
}

.tab-contents {
  div:first-child {
    font-family: "Bellefair", serif;
    font-size: 100px;
  }
}

.tabs-container {
  color: white;
  margin-left: 20rem;
  margin-top: 5rem;
  ul {
    list-style: none;
    padding: 2rem 0;
    li {
      display: inline-block;
    }
    li {
      margin: 0 15px;
    }
    li:hover {
      padding-bottom: 5px;
      border-bottom: 2px solid white;
      cursor: pointer;
    }
  }
}

.details {
  font-family: "Barlow", sans-serif;
  font-size: 18px;
  margin: 2rem 0;
}

.divider {
  width: 100%;
  border-bottom: 1px solid grey;
  margin-bottom: 2rem;
}

.metrics {
  .distance,
  .travel-time {
    display: inline-block;
    margin: 4px 2.5rem 4px 0;
  }
}

.distance header,
.travel-time header {
  font-family: "Barlow", sans-serif;
}
.distance p,
.travel-time p {
  font-family: "Bellefair", serif;
  font-size: 28px;
}
</style>
