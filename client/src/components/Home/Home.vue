<template>
  <div class="home">
    <h1>{{message}}</h1>
    <a href="https://github.com/Rajdeepc/vue-node-boilerplate.git"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png" alt="Fork me on GitHub"></a>
    <div class="section">
      <h5>Front End:</h5>
      <span>
        <img src="https://cdn.iconscout.com/icon/free/png-256/vue-282497.png" />
      </span>
      <span class="add"> + </span>
      <span>
        <img src="https://cdn.iconscout.com/icon/free/png-256/sass-13-1175092.png" />
      </span>
    </div>
    <div class="section">
      <h5>Back End:</h5>
      <span>
        <img src="https://cdn.iconscout.com/icon/free/png-256/nodejs-6-569582.png" />
      </span>
      <span  class="add"> + </span>
      <span>
        <img src="https://images.opencollective.com/frontendmasters/0b9cda4/logo/256.png" />
      </span>
      <span  class="add"> + </span>
      <span>
        <img src="https://cdn.iconscout.com/icon/free/png-256/mongodb-5-1175140.png" />
      </span>
    </div>
    <div class="section">
      <h5>Authenticaion:</h5>
      <span>
        <img
          src="https://static-s.aa-cdn.net/img/gp/20600000315025/Dz_pOmvS8nWAzNhm9bQutW7-kGN2mnQt0pjoLu11ShkCIGleZgUWt5ci4BegnSdYvRCx=w300?v=1"
        />
      </span>
      <span class="add"> + </span>
      <span>
        <img
          src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/384/square_256/hapi-logo-1.png"
        />
      </span>
    </div>
    <div class="section">
      <h5>Deployment:</h5>
      <span>
        <img src="https://cdn.iconscout.com/icon/free/png-256/heroku-5-569467.png" />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data(){
    return {
      message:'A Full Stack Boilerplate built with'
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.home {
  padding:40px;
  text-align: center;
  .section{
    margin-top:40px;
    img {
    height: 100px;
  }
  .add {
    font-size: 40px;
  }
  }
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
