<template>

<div class="app">
<div id="path" class="container-fluid  bg-warning pt-5 pb-5">
  <div class="container ">
   <div class="row">
      <div class="col-md-4">
      <img src="../assets/woody.png" id="woody" class="img-fluid " alt="">
      </div>
      <div class="col-md-8">
    <h1 class="display-4 text-pop-up-top">Afterschool Don Quijote</h1>
    <p class="lead mt-2">Oferă-i copilului tău un loc liniștit si plin de veselie, unde isi poate petrece timpul după ore, asistat de cadre didactice pregatite la un nivel înalt.</p>
    <b-button  class="mt-5 bounce-top" to="/services" variant="primary">Aflați mai multe!</b-button>
      </div>
    </div>
    </div>
</div>

<div class="container  pt-5 pb-5">
  <h1 class="display-5 text-center mb-5">Beneficile copilului tau</h1>
  <div class="row pt-5 pb-5">
   <div class="col-md-4 text-center"><div class="container rounded p-4 shadow"><font-awesome-icon  class="mb-3 text-primary" icon="coffee" size="6x" /> <p class="x">Acesta va avea parte de o masa caldă, proaspăt gătită, în propria noastră bucătarie in fiecare zi, dar si de o gustare la ora amiezei.</p></div> </div>
   <div class="col-md-4 text-center"><div class="container rounded p-4 shadow"> <font-awesome-icon  class="mb-3 text-danger" icon="book" size="6x" /><p class="x">Temele sunt completate sub îndrumarea unor învățătoare cu nivel inalt de pregătire, astfel ajungând acasă copilul își va putea petrece timpul liber.</p></div></div>
   <div class="col-md-4 text-center"><div class="container rounded p-4 shadow"><font-awesome-icon  class="mb-3 text-success" icon="football-ball" size="6x" /> <p class="x">Desfășuăm activiăți recreative in aer-liber, pentru a facilita o dezvoltare fizica armonioasă, însă practicăm și ateliere de creație, IT și șah.</p> </div></div>
 

  </div>
</div>
<div id="path2" class="container-fluid bg-primary  y p-5">
 <div class="container "> <h1 class=" pt-5 text-center text-light ">Despre noi</h1>
 <div class="row">
<div class="col-md-8 pt-5"><h5 class="text-light font-weight-light">Şcoala după şcoală “Don Quijote” functioneaza de 5 ani  în aproprierea colegiului Miguel de Cervantes.

Cuo echipă de profesionisti având experienţă şi performanţe în învăţământ, organizăm eficient activităţile elevilor din clasele I-IV după programul de scoală.

Includem în toate activităţile elemente care urmaresc obţinerea unei atitudini pozitive a copilului, de cooperare, de crestere a increderii in sine, a curajului, a responsabilitatii.

Profesoarele ii incurajeaza pe copii in exprimarea personalitatii, in dezvoltarea unui limbaj ales, elevat, in adoptarea unei atitudini placute.

Obiectivul nostrum este sa facem copiii sa devina competitivi. Dezvoltăm şi valorizam intregul potential pe care copiii il au prin oferirea unui context favorabil dezvoltarii lor cognitive si emotionale, prin antrenarea abilitatilor, atitudinilor si talentelor intr-o atmosfera placuta, incurajatoare,de siguranta si confort.

O sansa in plus pentru copii, un sprijin pentru parinti!</h5></div>
<div class="col-md-4"><img class="img-fluid w-75" src="../assets/c-w.png" alt=""></div>

 </div>
 
 </div>
</div>
<div class="container-fluid ">
  <div class="row">
  <div class="col-md-2 p-0 "><img src="../assets/1.jpg" alt="" class="img-fluid "></div>
  <div class="col-md-2 p-0"><img src="../assets/2.jpg" alt="" class="img-fluid "></div>
  <div class="col-md-2 p-0"><img src="../assets/3.jpg" alt="" class="img-fluid"></div>
  <div class="col-md-2 p-0"><img src="../assets/4.jpg" alt="" class="img-fluid"></div>
  <div class="col-md-2 p-0"><img src="../assets/5.jpg" alt="" class="img-fluid"></div>
  <div class="col-md-2 p-0"><img src="../assets/6.jpg" alt="" class="img-fluid"></div>



 </div>
</div>
<div class="container-fluid">
  <div class="container p-5">
    <h1 class="text-center mb-5">Află mai multe despre optionalele noastre</h1>
    <div class="row">
      <div class="col-md-3"><div class="card rounded shadow m-2" style="">
<div class="top-card text-center mt-2 mb-0"> <font-awesome-icon  class="mb-3 text-warning" icon="calculator" size="6x" /></div>
  <div class="card-body mt-0">
    
    <h5 class="card-title">IT</h5>
    <p class="card-text">Prin cursul nostru de IT, copilul tău va învăța să folosească calculatorul într-un mod educativ si productiv.</p>
    <a href="#" class="btn btn-warning">Citește</a>
  </div>
</div></div>
      <div class="col-md-3"><div class="card rounded shadow m-2" style="">
  <div class="top-card text-center mt-2 mb-0"><font-awesome-icon  class="mb-3 text-warning" icon="chess" size="6x" /></div>
  <div class="card-body">
    <h5 class="card-title">Șah</h5>
    <p class="card-text">Șahul este sportul minții, astfel punem preț pe acest opțional minunat care ajută la dezvoltarea gândirii.</p>
    <a href="#" class="btn btn-primary ">Citește</a>
  </div>
</div></div>
      <div class="col-md-3"><div class="card rounded shadow m-2" style="">
<div class="top-card text-center mt-2 mb-0"><font-awesome-icon  class="mb-3 text-warning" icon="hand-holding-heart" size="6x" /></div>
  <div class="card-body">
    <h5 class="card-title">Atelier de creație</h5>
    <p class="card-text">Arta este unul dintre lucrurile care pune bază sufeltului unui om, astfel am elaborat acest atelier de creație.</p>
    <a href="#" v-b-popover.hover="'I am popover content!'" title="Popover Title" class="btn btn-primary">Citește</a>
  </div>
</div></div>
      <div class="col-md-3"><div class="card rounded shadow  m-2" style="">
<div class="top-card text-center mt-2 mb-0"><font-awesome-icon  class="mb-3 text-warning" icon="futbol" size="6x" /></div>
  <div class="card-body">
    <h5 class="card-title">Fotbal</h5>
    <p class="card-text">Mișcare si competivitatea ajută la elaborarea unui mediu de viață sănătos si iti impunea depasirea limitelor</p>
    <a href="#" class="btn btn-primary">Citește</a>
  </div>
</div></div>
    </div>
  </div>
  <footer></footer>
</div>

</div>
</template>

<script>
// @ is an alias to /src

import footerx from '@/components/Footer.vue'



export default {
  name: 'home',
  title:'Afterschool "Don Quijote"',
  components:{
    footerx
  },
   created: function() {
        window.document.title = 'Afterschool "Don Quijote"'
        
    }

}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');


@keyframes woody {
  from{width: 10%;opacity: 0.1;}
  to{width: 100%;opacity: 1;}
}
#woody{
  animation-name: woody;
  animation-duration: 1s;
  
}
.bounce-top {
	-webkit-animation: bounce-top 0.9s both;
	        animation: bounce-top 0.9s both;
}
@-webkit-keyframes bounce-top {
  0% {
    -webkit-transform: translateY(-45px);
            transform: translateY(-45px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
    opacity: 1;
  }
  24% {
    opacity: 1;
  }
  40% {
    -webkit-transform: translateY(-24px);
            transform: translateY(-24px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  65% {
    -webkit-transform: translateY(-12px);
            transform: translateY(-12px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  82% {
    -webkit-transform: translateY(-6px);
            transform: translateY(-6px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  93% {
    -webkit-transform: translateY(-4px);
            transform: translateY(-4px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  25%,
  55%,
  75%,
  87% {
    -webkit-transform: translateY(0px);
            transform: translateY(0px);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  100% {
    -webkit-transform: translateY(0px);
            transform: translateY(0px);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
    opacity: 1;
  }
}
@keyframes bounce-top {
  0% {
    -webkit-transform: translateY(-45px);
            transform: translateY(-45px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
    opacity: 1;
  }
  24% {
    opacity: 1;
  }
  40% {
    -webkit-transform: translateY(-24px);
            transform: translateY(-24px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  65% {
    -webkit-transform: translateY(-12px);
            transform: translateY(-12px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  82% {
    -webkit-transform: translateY(-6px);
            transform: translateY(-6px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  93% {
    -webkit-transform: translateY(-4px);
            transform: translateY(-4px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  25%,
  55%,
  75%,
  87% {
    -webkit-transform: translateY(0px);
            transform: translateY(0px);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  100% {
    -webkit-transform: translateY(0px);
            transform: translateY(0px);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
    opacity: 1;
  }
}

h1{
  font-family: 'Open Sans', sans-serif;
}
#path{
  background: #ffcc33 !important;
}
.display-4{
  font-weight: 400 !important;
}
.x{
  font-weight: 400 !important;
}
@media screen and (min-width: 800px) {
    #path{
 -webkit-clip-path: polygon(100% 0, 100% 88%, 52% 100%, 55% 94%, 0 100%, 0 0);
          clip-path: polygon(100% 0, 100% 88%, 52% 100%, 55% 94%, 0 100%, 0 0);
}
#path2{
  -webkit-clip-path: polygon(100% 100%, 100% 5%, 61% 7%, 72% 0%, 0% 7%, 0% 100%);
clip-path: polygon(100% 100%, 100% 0%, 71% 7%, 72% 0%, 0% 7%, 0% 100%);
}
}

</style>
