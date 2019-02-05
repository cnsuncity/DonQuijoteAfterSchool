<template>
  <div class="app">
    <div id="path" class="container-fluid  bg-success text-light pt-5 pb-5">
      <div class="container ">
        <div class="row">
          <div class="col-md-4">
            <img src="../assets/family.png" class="img-fluid " id="boy" alt="">
          </div>
          <div class="col-md-8">
            <p class="display-4 ">Despre noi</p>
            <p class="lead mt-2">Afterschool "Don Quijote" a luat nastere in anul 2008, din dorinta de a le oferi
              elevilor de la Liceul Miguel de Cervantes, un loc unde sa isi petreaca timpul dupa ore fiind ingrijiti si
              obervati chiar de catre invatatori ai liceului. <br> De {{ new Date().getFullYear()-2008 }} ani oferim
              servicii de after-before school la cel mai inalt nivel, punand baza astfel unei adevarate comunitati
              educative.
            </p>

          </div>
        </div>
      </div>

    </div>
    <div class="container p-5">
      <h1 class=" text-center">Echipa noastra</h1>
      <div class="row mt-5">
        <div class="col-md-3">
          <div class="container rounded shadow p-0"><img src="../assets/carmen.jpg" alt="" class="img-fluid mw-100 rounded-top shadow">
            <p class="text-center"><br><strong>RADU CARMEN</strong></p>
            <ul>
              <li>Manager</li>
              <li>Învățătoare</li>
              <li>Coordonator atelier plastic</li>

            </ul>

          </div>


        </div>
        <div class="col-md-3">
          <div class="container rounded shadow p-0"><img src="../assets/female.png" alt="" class="img-fluid mw-100 rounded-top shadow">
            <p class="text-center"><br><strong>MIHAESCU CRISTIANA</strong></p>
            <ul>

              <li>Învățătoare</li>
              <li>Coordonator atelier plastic</li>
              <br>

            </ul>
          </div>
        </div>
        <div class="col-md-3">
          <div class="container rounded shadow p-0"><img src="../assets/eduard.jpg" alt="" class="img-fluid mw-100 shadow  rounded-top">
            <p class="text-center"> <br><strong>RADU EDUARD</strong></p>
            <ul>
              <li>Profesor matematica</li>
              <li>Coordonator atelier IT</li> <br>
            </ul>
          </div>
        </div>
        <div class="col-md-3">
          <div class="container rounded shadow p-0"><img src="../assets/andreea.jpg" alt="" class="img-fluid mw-100 rounded-top shadow">
            <p class="text-center"><br><strong>DIACONU ANDREEA</strong></p>
            <ul>

              <li>Profesor engleza</li>
              <br>
              <br>

            </ul>
          </div>
        </div>

      </div>
    </div>
    <div id="path2" class="container-fluid bg-info text-light p-5 mb-0">
      <div class="container">
        <h1>Cine suntem?</h1>
        <p id="lead" class="lead mt-2">Şcoala după şcoală “Don Quijote” functioneaza de 5 ani în aproprierea colegiului
          Miguel de Cervantes. Cuo echipă de profesionisti având experienţă şi performanţe în învăţământ, organizăm
          eficient activităţile elevilor din clasele I-IV după programul de scoală. Includem în toate activităţile
          elemente care urmaresc obţinerea unei atitudini pozitive a copilului, de cooperare, de crestere a increderii
          in sine, a curajului, a responsabilitatii. Profesoarele ii incurajeaza pe copii in exprimarea personalitatii,
          in dezvoltarea unui limbaj ales, elevat, in adoptarea unei atitudini placute. </p>
        <h1>Ce ne dorim?</h1>
        <p id="lead" class="lead mt-2"> Obiectivul nostrum este sa facem copiii sa devina competitivi. Dezvoltăm şi
          valorizam intregul potential pe care copiii il au prin oferirea unui context favorabil dezvoltarii lor
          cognitive si emotionale, prin antrenarea abilitatilor, atitudinilor si talentelor intr-o atmosfera placuta,
          incurajatoare,de siguranta si confort. O sansa in plus pentru copii, un sprijin pentru parinti!</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'about',
    created: function () {
      window.document.title = 'Despre noi'

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
    #path2{
  -webkit-clip-path: polygon(100% 100%, 100% 5%, 61% 7%, 72% 0%, 0% 7%, 0% 100%);
clip-path: polygon(100% 100%, 100% 0%, 71% 7%, 72% 0%, 0% 7%, 0% 100%);
}

  }

  @keyframes jump {
    0% {
      transform: translate(0px, 0px);
    }

    25% {
      transform: translate(0px, 20px);
    }

    50% {
      transform: translate(0px, 0px);
    }

    75% {
      transform: translate(0px, 20px);
    }

    100% {
      transform: translate(0px, 0px);
    }
  }

  #boy {
    animation-name: jump;
    animation-duration: 4s;
  }

  a {
    text-decoration: none !important;
    color: black !important;
  }

  #lead {
    font-weight: 350 !important;
  }

  ul {
    list-style: none;
  }
</style>