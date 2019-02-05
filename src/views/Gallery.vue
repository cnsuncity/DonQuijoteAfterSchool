<template>
    <div class="app">
           <div id="path" class="container-fluid  bg-danger text-light pt-5 pb-5">
      <div class="container ">
        <div class="row">
          <div class="col-md-4">
            <img src="../assets/painter.png" id="princess" class="img-fluid " alt="">
          </div>
          <div class="col-md-8">
            <h1 class="display-4 ">Galerie</h1>
            <p class="lead mt-2">Daca ce v-am povestit pana acum nu v-a captat atentie, puteti sa aruncati o privire la galeria noastra foto. <br>
            Aici veti gasi poze din locatie, dar si materiale legate de ultimele noastre activitati desfasurate.
            </p>

          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid p-5">
      <div class="container text-center">
        <h1 class="text-center">Poze locatie</h1>
   
 <div class="row text-center mt-5 p-0 mb-0">
  <div class="col-xs-4 col-md-4 p-0 ">
 <img src="../assets/poze/1.jpg" class="img-fluid" alt="">
  </div>
  <div class="col-xs-4 col-md-4 p-0">
<img src="../assets/poze/2.jpg" class="img-fluid" alt="">
  </div>
  <div class="col-xs-4 col-md-4 p-0">
<img src="../assets/poze/3.jpg" class="img-fluid" alt="">
  </div>
  </div>
  <div class="row text-center mt-0 p-0 mb-5">
    <div class="col-md-12 col-xs-4">
      <img src="../assets/poze/4.jpg" class="img-fluid w-200" alt="">
    </div>
  </div>

 

      </div>
    </div>
    </div>
</template>
<script>
    export default {
  name: 'gallery',
  created: function() {
        window.document.title = 'Galerie'
        
    },

}
</script>
<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');

  h1 {
    font-family: 'Roboto', sans-serif;
    font-weight: 500 !important;
  }

  @media screen and (min-width: 800px) {
    #path {
      -webkit-clip-path: polygon(100% 0, 100% 88%, 52% 100%, 55% 94%, 0 100%, 0 0);
      clip-path: polygon(100% 0, 100% 88%, 52% 100%, 55% 94%, 0 100%, 0 0);
    }
  
  }
</style>