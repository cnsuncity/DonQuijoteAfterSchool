<template>
  <div id="footer" class="container-fluid p-3 mt-0 ">
  <hr>
<div class="row">
  <div class="col-md-3">
    <div class="container">
     <strong>
       Contacteaza-ne:
     </strong>
     <br>
     <font-awesome-icon icon="phone"></font-awesome-icon> <a href="tel:+40725737793">+40725737793</a>
     <br>
     <font-awesome-icon icon="envelope"></font-awesome-icon> <a href="mailto:carmenradu0103@gmail.com">Send us an email</a>
     <br>
     <font-awesome-icon  icon="location-arrow"></font-awesome-icon> <a target="_blank" rel="noopener noreferrer" href="http://maps.google.com/?q=Strada Ioan Slavici 4, București 010207">Strada Ioan Slavici 4, București 010207</a> 
    </div>
  </div>
<div class="col-md-6">
  
  <h6 id="copr" class=" text-center">
Designed with love by <span class="text-gradient">DEUX</span> 
  </h6>
</div>
  <div class="col-md-3 pl-5"><div class="container"> <font-awesome-icon  icon="globe"></font-awesome-icon><strong>Linkuri utile:</strong>
  <br>
  <a target="_blank" href="https://www.liceulcervantes.ro/">Liceul Cervantes</a><br>
  <a target="_blank" href="https://bucarest.cervantes.es/ro/default.shtm">Institutul Cervantes</a><br>
  <a target="_blank" href="https://www.edu.ro/">Ministerul Educatiei</a></div>
  </div>
</div>
</div>
</template>

<script>

export default {
  name: 'footer'
  
}
</script>
<style lang="scss" scoped>
.text-gradient{
    background: -webkit-linear-gradient(rgb(201, 21, 218), rgb(248, 3, 105));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
#footer{
  a{
    text-decoration: none !important;
    color: black !important;
    font-weight: 400;
  }
  .copr{
  
    opacity: 0.7 !important;
  }
}
</style>
