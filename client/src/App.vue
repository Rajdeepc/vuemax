<template>
  <div id="app">
    <Navbar/>
    <div class="main-container">
      <router-view :key="$route.path"></router-view>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from "./common-components/NavBar";
import Footer from "./common-components/Footer";

export default {
  name: "app",
  data() {
    return {
      hideNavFooter: false
    };
  },
  components: {
    Navbar,
    Footer
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #000;
  width: 100%;
  height: 100vh;
}
.main-container {
  min-height: calc(100vh - 106px);
}
</style>
