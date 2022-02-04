<template>
  <v-app>
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row no-gutters justify="center">
          <v-col cols="12" sm="7" md="7" class="hidden-sm-and-down">
            <v-card flat color="#ffffff">
              <v-flex class="text-center">
               <img src="../assets/komputer.png" contain height="450">
              </v-flex>
            </v-card>
          </v-col>
          <v-col cols="12" sm="5" md="5">
            <v-card flat color="#ffffff" max-width="500" class="mt-5 textTable">
              <v-flex class="px-10 pb-2 text-center">
               <img src="../assets/komputer.png" justify="center" contain height="90">
                <p class="text-center greetings orangeText">Welcome to MY APPS, Please Sign In!</p>
              </v-flex>
            
              <v-card-text>
               <v-form v-model="valid" ref="form">
                <v-text-field 
              
                  label="Enter your email" 
                  v-model="email"
                  placeholder="loginadmin@gmail.com"
                  prepend-inner-icon="mdi-account"
                  rounded
                  filled
                  single-line
                  color="#26A69A"
                  :rules="emailRules" 
                   @keypress.enter="login()"
                  required>
                </v-text-field>

                <v-text-field 
                
                  label="Enter your password" 
                  v-model="password"
                  prepend-inner-icon="mdi-lock" 
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="show1 = !show1"
                  :type="show1 ? 'text' : 'password'"
                  placeholder="loginadmin7788"
                  :rules="passwordRules" 
                  rounded
                  filled
                  single-line
                  color="#26A69A"
                  @keypress.enter="login()"
                  required>
                </v-text-field>

                <!--<v-card-actions class="text--secondary pt-0">
                  <v-spacer></v-spacer>
                  <p class="pt-1" @click="to"><a class="linkText">Forgot your password?</a></p>
                </v-card-actions>-->

                <v-btn 
                  class="mt-7"
                  color="#094f59" 
                  x-large 
                  block
                  rounded
                  dark
                  @click="login()"
                  >
                  Sign In
                </v-btn>
               </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
        <v-snackbar v-model="alert" :color="color" timeout="3000" bottom>
        {{message}}
      </v-snackbar>
    </v-main>
  </v-app>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'login',
  created () {
    document.title = "Login";
  },
  data (){
      return {
        show1: false,
        load: false,
        valid: false,
        snackbar :false,
        message:null,
        alert:false,
        error_message: '',
        color: '',
        password:'',
        email:'',
        passwordRules: [
            (v) => !!v || 'Password cannot be empty',
        ],
        //username: 'yuksemangat',
        emailRules: [
            (v) => !!v || 'Email cannot be empty',
          //  v => /.+@.+/.test(v) || 'Username must be valid',
        ],
    };
  },
  methods: {
    login() {
    if (this.$refs.form.validate()) { //cek apakah data yang akan dikirim sudah valid
         
          localStorage.setItem('email', this.email);
          localStorage.setItem('password', this.password);
          if(localStorage.getItem('email').localeCompare('loginadmin@gmail.com') == 0 && 
          localStorage.getItem('password').localeCompare('loginadmin7788') == 0){
              this.$router.push('/Beranda')
          }
          else{
            this.alert = true;
            this.color = "red"
            this.message = "Please fill your email and Password correctly!";
          }
          this.clear();
        }
      },
    clear() {
      this.$refs.form.reset() //Clear form login
    }
    
  }
}
</script>

<style lang="css" scoped>
.greetings{
  color:#F15A23;
  font-family: 'Questrial', sans-serif;
}
.linkText{
  color:#010202;
}
.greenText{
  color:#005E6A;
  font-family: 'Secular One', sans-serif;
}
</style>