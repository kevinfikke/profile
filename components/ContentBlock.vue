<template>
  <div class="content-wrapper pl-3">
    <v-container class="title-block">
      <v-row>
        <v-col cols="12">
          <h1>Kevin Fikke</h1>
        </v-col>
        <v-col cols="12" class="mt-n6">
          <h3>Front-end developer</h3>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="mt-10 py-0 profile-block">
      <v-row>
        <v-col class="profile-title  pb-1 ">
          <h2>My Profile</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="pb-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quod tempora rem odit labore optio deleniti quia aperiam recusandae, sequi excepturi. Recusandae sit molestiae ducimus et libero maiores vero sed.
        </v-col>
      </v-row>
    </v-container>
    <v-container class="experence-block pt-0">
      <v-row>
        <v-col cols="12 py-0">
          <h2>Experence</h2>
        </v-col>
        <v-col cols="12" v-for="job in data.result.jobs" :key="job.name" class="line-top pt-0 pb-6 pl-0">
          <v-container class="pt-2">
            <v-row>
              <v-col cols="12">
                <h3>{{ job.position }}</h3>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="7">
                <p v-if="job.address !== ''">{{ job.company }} - {{ job.address }}</p>
                <p v-else>{{ job.company }}</p>
              </v-col>
              <v-col cols="5">
                <p>{{ job.year }}</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" class="py-0">
                <div v-html="job.content"></div>
              </v-col>
              <v-btn
                v-show="job.position == 'Front-end developer'"
                rounded="pill"
                color="second"
                class="mt-5 ml-5"
              >
                <NuxtLink :to="('/projects')">Lees meer</NuxtLink>
              </v-btn>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
  const { data, pending, error, refresh } = await useFetch('/api/content')
</script>