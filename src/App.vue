<template>
  <div id="app">
    <header>
      <top-nav></top-nav>
    </header>
    <div class="row bg-grey">
        <div class="col-12">
          <div class="container">
          <p class="version-no m-4 text-left">Mobile Suit Gundam EXVS Maxiboost ON Player's Guide  <span class=" version-no-sub bg-primary p-1 text-light">Version:2.0.x</span></p>
          </div>
        </div>
      </div>
    <main>    
    <div class="container">
      <div class="row">
        <div class="col-lg-2 border-right d-none d-lg-block">
          <sidebar></sidebar>
        </div>
        <div class="col-sm-12 col-lg-10 px-lg-5">
          <router-view>
          </router-view>
        </div>
      </div>
    </div>
    </main>
    <footer>
      <custom-footer></custom-footer>
    </footer>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
import TopNav from "./components/TopNav.vue";
import CustomFooter from "./components/CustomFooter.vue"

export default {
  name: "App",
  components: {
    Sidebar,
    TopNav,
    CustomFooter
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.app_wrapper {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.version-no {
  font-size: 1.5em;
}

.version-no-sub {
  font-size: .75em;
}

.bg-grey {
  background-color:#F5F8FA;
  border-bottom: 1px solid #ddd;
}

header {
  background: white;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  display: initial !important;;
}
aside {
  flex: 1;
  border-right: 1px solid #ddd;
  min-height: 100vh;
}
main {
  flex: 3;
  padding: 1rem;
}

.content {
  display: flex;
}

/* NAVIGATION STYLING */
.navbar-nav .dropdown-item {
  font-size: 0.75em;
}


@media (min-width: 1024px) {
  .navbar-nav .dropdown-menu {
    min-width: 75vw;
    position: absolute;
    left: 50% !important;
    transform: translateX(-50%) !important;
  }
}
</style>
