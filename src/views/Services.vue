<template>
  <div class="app">
    <div id="path" class="container-fluid  bg-primary text-light pt-5 pb-5">
      <div class="container ">
        <div class="row">
          <div class="col-md-4">
            <img src="../assets/princess.png" id="princess" class="img-fluid " alt="">
          </div>
          <div class="col-md-8">
            <p class="display-4 ">Servicii<p>
            <p class="lead mt-2">Deoarece ne gandim la varietate, am conceput două pachete de servicii pentru a
              putea sa-ti indeplinim cerintele necesare intr-un raport/pret convenabil. <br> Alegeti un pachet pentru
              copilul dumneavoastra, iar inscrierea o puteti face online , urmand sa fiti contactat telefonic in cel
              mai scurt timp posibil.
            </p>

          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid p-5">
      <div class="container text-center">
        <h1 class="">
          Program și ofertă educațională

        </h1>
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <p class=" mt-5">
             <strong> Program normal (11:30-18:30):</strong>
                <br><br>
                <ul class="text-justify">
                  <li>preluarea copiilor de la scoală</li>
                  <li>servirea mesei de prânz</li>
                  <li>pregatirea temelor şi verificarea lor de către cadre didactice specializate</li>
                  <li>activităţi educaţionale şi recreative prin jocuri interactive</li>
                  <li>gustare la ora 16</li>
                </ul>


              </p>
            </div>
            <div class="col-md-6">
              <p class="mt-5"><strong>Activitati optionale:</strong>

               <ul class="text-justify">
                 <br>
                  <li> Curs de limba spaniolă</li>
                  <li> Curs de limba engleză</li>
                  <li> Atelier plastic</li>
                  <li> Șah</li>
                  <li> Activități sportive</li>
                  <li> Dezvoltare si cunoaștere prin intermediul tehnologiei.</li>
                </ul>
              </p>


            </div>
          </div>
        </div>
      </div>
      <div class="container text-center p-4">
        <h1 class="">
          Tarife 
        </h1>
        <div class="row mt-5">
          <div class="col-md-6">
            <div class="container rounded shadow bg-info"><p class="lead text-light">TARIF PROGRAM  11:30-18:30 <br> <strong>30RON/ZI</strong> </p></div>
            
          </div>
          <div class="col-md-6 text-danger"><div class="container rounsws shadow bg-danger"><p class="lead text-light">TARIF PROGRAM 11:30-15:30 <br> <strong>20RON/ZI</strong> </p></div></div>
        </div>
        <div class="row ">
          
          <div class="col-md-6">
         <div class="container rounded shadow bg-warning p-0"> <p class="lead text-dark"> TARIF MASĂ  3 FELURI+GUSTARE ORA 16 <br> <strong>15RON/ZI</strong> </p>  </div>
          </div>
        <div class="col-md-6">
    <div class="container rounded shadow bg-success"> <p class="lead text-light">TARIF OPTIONALE  4H/LUNA <br><strong>80 RON</strong> </p></div>
        </div>
        </div>
      </div>
    </div>
   


    <div class="container-fluid">
      <div class="container text-center rounded shadow p-5">
        <h1 class=" mb-4">Inscriere online</h1>
        <form id="signup-form " v-on:submit.prevent="addMessage">
         <div class="input-group-sm">
           <div class="row">
             <div class="col-md-3"></div>
             <div class="col-md-6"> <input v-model="newMessage.names" class="form-control form-control  m-2" type="text" placeholder="Nume parinte">
        <input v-model="newMessage.pname"  class="form-control form-control  m-2" type="text" placeholder="Prenume parinte">
        <input v-model="newMessage.email"  class="form-control form-contro  m-2" type="text " placeholder="Adresa de email">
        <input v-model="newMessage.phone"  class="form-control form-control  m-2" type="text" placeholder="Numar de telefon">
       <button class="btn btn-primary mt-3" @click="showDismissibleAlert=true" type="submit">Inscriere!</button></div>
             <div class="col-md-3"></div>
           </div>
       
       </div>
        </form>
      </div>
            <b-alert variant="danger"
             dismissible
             :show="showDismissibleAlert"
             @dismissed="showDismissibleAlert=false">
      Dismissible Alert!
    </b-alert>
    </div>
  </div>
</template>
<script>
import Firebase from 'firebase'
import toastr from 'toastr'

  let config = {
  apiKey: "AIzaSyAi3QBiIp7stFJmDS_8QOY7UBp1CHPK6Nw",
  authDomain: "afterschool-don-quijote.firebaseapp.com",
  databaseURL: "https://afterschool-don-quijote.firebaseio.com",
  projectId: "afterschool-don-quijote",
  storageBucket: "afterschool-don-quijote.appspot.com",
  messagingSenderId: "226710008619"
  };
  
let app = Firebase.initializeApp(config);
let db = app.database();


let msgRef = db.ref('messages')

  export default {
 name: 'services',

   firebase: {
    messages: msgRef
  },
  
  data() {
    return {
      newMessage: {
          names: '',
          pname: '',
          email: '',
          phone:'',
           dismissSecs: 10,
      dismissCountDown: 0,
      showDismissibleAlert: false,
      }
    }

  },
  methods:{
  addMessage: function () {
     toastr.success('Book removed successfully')
        msgRef.push(this.newMessage);
        this.newMessage.names = ' ';
        this.newMessage.pname = ' ';
        this.newMessage.email=  '' ;
        this.newMessage.phone=  ' ';
       
      },
      countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    }
  },
 
  created: function() {
        window.document.title = 'Servicii'
        
    },

 

  }

</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto');
h1{
  font-family: 'Roboto', sans-serif;
}
  @media screen and (min-width: 800px) {
    #path {
      -webkit-clip-path: polygon(100% 0, 100% 88%, 52% 100%, 55% 94%, 0 100%, 0 0);
      clip-path: polygon(100% 0, 100% 88%, 52% 100%, 55% 94%, 0 100%, 0 0);
    }
    @keyframes rotate {
      0%{transform: rotate(0deg);}
      25%{transform: rotate(20deg);}
      75%{transform: rotate(-20deg);}
      100%{transform: rotate(0deg);}
    }
    #princess{
      animation-name: rotate;
      animation-duration: 4s;
    }
  }
</style>