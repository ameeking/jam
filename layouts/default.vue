<template>
  <v-app id="inspire">
    <Header />

    <v-main 
      class="white lighten-3"
      >
      <v-container>
        <v-row>
          <v-col>
            <v-sheet
              min-height="70vh"
            >
              <nuxt />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import Header from '../components/Header/Header';

  export default {
    components: {
      'Header': Header
    }
  }
</script>