<template>
  <div class="app">
    <div id="path" class="container-fluid  bg-info text-light pt-5 pb-5">
      <div class="container ">
        <div class="row">
          <div class="col-md-4">
            <img src="../assets/car.png" id="princess" class="img-fluid " alt="">
          </div>
          <div class="col-md-8">
            <h1 class="display-4 "> Contact</h1>
            <p class="lead mt-2">Daca aveti nelamuriri, ne puteti contacta oricand folosind formularul de mai jos, sau
              ne puteti face o vizita chiar in locatie. <br>
              De asemenea, puteti trimite un e-mail sau chiar apela la numarul de telefon, la orice ora, in legatura cu
              intrebari si detalii.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="container mt-5">
      <h1 class="text-center">Hai sa tinem legatura!</h1>
      <div class="row mt-5">
        <div class="col-md-6">
          <div class="row">
            <div class="col-md-6">

              <div class="container text-center bg-light rounded shadow">
              <h4>Radu Carmen</h4>
              <hr>
              <p class="lead p-0 mb-0 ">
                <font-awesome-icon class="text-primary" icon="phone"></font-awesome-icon> <a class="text-dark" href="tel:+40725737793">
                  +40725737793</a>
              </p>
              <p class="lead">
                <font-awesome-icon class="text-danger" icon="envelope"></font-awesome-icon> <a class="text-dark" href="mailto:carmenradu0103@gmail.com">
                  Trimite un email</a>
              </p>
             </div>
            </div>
            <div class="col-md-6 ">
              <div class="container text-center  rounded shadow  bg-light">
              <h4>Radu Eduard</h4>
              <hr>
              <p class="lead  p-0 mb-0">
                <font-awesome-icon class="text-primary" icon="phone"></font-awesome-icon> <a class="text-dark" href="tel:+40749830421">
                  +40749830421</a>
              </p>
              <p class="lead p-0">
                <font-awesome-icon class="text-danger" icon="envelope"></font-awesome-icon> <a class="text-dark" href="mailto:e.radu1997@gmail.com@gmail.com">
                  Trimite un email</a>
              </p>
           </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="container rounded  p-3">
                <div class="form-group">
                  <label class="lead" for="email">Email-ul tau:</label>
                  <input type="text" name="" id="email" class="form-control" placeholder="" aria-describedby="helpId">
                  <label class="lead" for="message">Mesaj:</label>
                  <textarea class="form-control" id="message" rows="3"></textarea>
                  <br>
                  <button type="submit" class="btn btn-primary">Trimite-ne mesaj</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="container-fluid">
            <iframe width="100%" height="350px" style="border-radius: 40px;  overflow: hidden;" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=44.437031864202815,26.085512638092045&amp;q=Strada%20Ioan%20Slavici%20nr.4%2C%20Bucuresti+(Afterschool%20Don%20Quijote)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
         frameborder="0" scrolling="no" marginheight="0" marginwidth="0"><a href="https://www.maps.ie/map-my-route/">Plot
           a route map</a></iframe>
          </div>
        </div>

      </div>
    </div>


  </div>


</template>
<script>
  export default {
    name: 'contact',
    created: function () {
      window.document.title = 'Contact'

    },



  }
</script>
<style scoped>
  @media screen and (min-width: 800px) {
    #path {
      -webkit-clip-path: polygon(100% 0, 100% 88%, 52% 100%, 55% 94%, 0 100%, 0 0);
      clip-path: polygon(100% 0, 100% 88%, 52% 100%, 55% 94%, 0 100%, 0 0);
    }

  }

  label {
    font-weight: 400;
  }

  a {
    text-decoration: none !important;

    font-weight: 400;
  }
</style>