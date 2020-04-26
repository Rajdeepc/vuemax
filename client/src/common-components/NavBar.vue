<template>
  <b-navbar toggleable type="light" variant="light">
    <b-navbar-brand to="/">Vue Node Boilerplate</b-navbar-brand>
    <b-navbar-nav class="ml-auto">

    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isLoggedIn: false
    };
  },
  mounted(){
    this.changeNavButtons();
  },
  watch: {
    $route: "changeNavButtons" // watching for changes in route and update
  },
  methods: {
    changeNavButtons() {
      const userData = JSON.parse(sessionStorage.getItem("user"));
      if (userData && userData.authToken) {
        this.isLoggedIn = true;
      }
    },
    logOut() {
      sessionStorage.removeItem("user");
      this.isLoggedIn = false;
    }
  }
};
</script>

<style scoped>
</style>