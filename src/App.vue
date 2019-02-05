<template>
  <div>
  <b-navbar v:bind="{}" v-bind:class="{ 'path navbar-light': $route.path == '/','bg-primary navbar-dark': $route.path == '/services','bg-success navbar-dark': $route.path == '/about','bg-danger navbar-dark': $route.path == '/gallery','bg-info navbar-dark': $route.path == '/contact' }" toggleable>
    <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
    <b-collapse is-nav id="nav_dropdown_collapse">
      <b-navbar-nav class="ml-auto" >
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/services">Servicii</b-nav-item>
        <b-nav-item to="/about">Despre noi</b-nav-item>
        <b-nav-item to="/gallery">Galerie</b-nav-item>
        <b-nav-item to="/contact">Contact</b-nav-item>
    
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <router-view></router-view>
  <footerx></footerx>
</div>

</template>

<style lang="scss">
img {
    pointer-events: none;
}
.path{
 background: #ffcc33 !important;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
router-link{
  text-decoration: none !important;
}
b-nav-item{

  font-weight: 600 !important;

}
</style>
<script>
import footerx from './components/Footer.vue'
 
  export default {
    name:'App',
    title:'Afterschool "Don Quijote"',
    components:{
      footerx
    },


  }
  </script>