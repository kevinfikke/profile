<template>
  <div class="homepage-wrapper">
    <v-container class="pt-0">
      <v-row class="pt-0">
        <v-col cols="2"></v-col>
        <v-col cols="8" class="main-content-block mt-8 mb-5">
          <v-container>
            <v-row>
              <v-col cols="4">
                <IntroductieBlock />
              </v-col>
              <v-col cols="8" class="content-block">
                <ContentBlock />
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col cols="2"></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
</script>
