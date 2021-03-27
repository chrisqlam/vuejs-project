<template>
  <div id="app">
    <header>
      <top-nav></top-nav>
    </header>
    <div class="container">
      <b-sidebar>
        <sidebar></sidebar>
      </b-sidebar>
      <main>
        <div class="container">
          <router-view />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
import TopNav from "./components/TopNav.vue";

export default {
  name: "App",
  components: {
    Sidebar,
    TopNav,
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


header {
  background: white;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
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

@media (min-width: 992px) {
  .navbar-nav .dropdown-menu {
    width: 50vw;
    position: absolute;
    left: 50% !important;
    transform: translateX(-50%) !important;
  }
}
</style>
