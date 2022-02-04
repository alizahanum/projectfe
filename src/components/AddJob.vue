<template>
<v-main>
 <v-card color="#ffffff" class="pb-1" flat>
 <v-card class="ml-16 pt-2 px-5 mx-5 mb-16" elevation="2" outlined>
 <v-card-title class="py-0 pl-0 pr-0 pb-2">
            <v-toolbar flat class="textTable">
              <v-text-field
                
                append-icon="mdi-magnify"
                label="Search Job"
                color="#26A69A" 
                class="mb-5 mt-6 textTable"
                dense
                solo
                flat
                background-color="#EEEEEE"
                filled
                hide-details>
              </v-text-field>
            </v-toolbar>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-btn class="textTable text-none" @click="addJobNew=true" height="40px" outlined color="#FC9039">+ Add Job</v-btn>
          </v-card-title>
    </v-card>
 </v-card>
<!--Dialog Add Job-->
<v-dialog v-model="addJobNew" scrollable max-width = "500px">
        <v-card style="background-color: #ffffff !important; border-top: 5px solid #FC9039 !important">
          <v-card class="kotak" tile flat>
            <h3 class="text-center path textTable py-5">Add New Job</h3>
            <v-divider></v-divider>
          </v-card>
          <v-card-text flat class="pl-9 pr-9 mt-3 pt-1 pb-0">
            <v-form ref="form" class="textTable">
              <p class="mb-1 font-weight-bold path">Auditee (UIC)</p>
              <v-select
                :items="['DIVISI STRATEGI & ARSITEKTUR TI ( STI )', 'DIVISI PENGEMBANGAN TI ( MTI )', 'DIVISI PENGEMBANGAN DIGITAL	( DGL )']"
                color="#26A69A" 
                required
                outlined
                dense
                hide-details
              ></v-select>

              <p class="mb-1 mt-3 font-weight-bold path">Condition</p>
              <v-text-field
                color="#26A69A" 
                required
                outlined
                dense
                hide-details
              ></v-text-field>
            </v-form>
          </v-card-text>
        </v-card>
      </v-dialog>
</v-main>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'job',
  created () {
    document.title = "Job";
  },
  data (){
    return {
      addJobNew : false,
    };
  },
  methods: {
     
  },
}