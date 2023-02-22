<template>
  <div class="introductie-wrapper">
    <v-container class="profilephoto-block">
      <v-row>
        <v-col>
          <v-avatar
            color="orange"
            size="124"
          >
            <img
              src="https://cdn.vuetifyjs.com/images/john.jpg"
              alt="John"
            >
          </v-avatar>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-for="(contentblock, index) in data.result.contentblocks" :key="index" class="info-block">
      <v-row>
        <v-col cols="12" class="pb-0">
          <h2 class="info-title" v-if="index === 'personalInfo'">Personal info</h2>
          <h2 class="info-title" v-else>Contact info</h2>
        </v-col>
        <v-col>
          <v-row v-for="info in contentblock" :key="info" class="mt-n2">
            <v-col cols="2">
              <v-icon class="personinfo-block-icon">{{ info.icon }}</v-icon>
            </v-col>
            <v-col cols="10" class="mt-1">
              {{info.content }}
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="education-block">
      <v-row>
        <v-col class="pb-0">
          <h2 class="info-title">Education</h2>
        </v-col>
      </v-row>
      <v-row v-for="education in data.result.educations" :key="education.id">
        <v-col cols="2" class="pb-0">
          <v-icon class="personinfo-block-icon">{{ education.icon }}</v-icon>
        </v-col>
        <v-col cols="10" class="pb-0">
          {{ education.name }}
        </v-col>
        <v-col cols="2"></v-col>
        <v-col cols="10" class="mt-n4 pb-0">
          {{ education.content }}
        </v-col>
        <v-col cols="2"></v-col>
        <v-col cols="10" class="mt-n4 pb-0">
          {{ education.year }}
        </v-col>
      </v-row>
    </v-container>

    <v-container class="info-block">
      <v-row>
        <v-col class="pb-0">
          <h2 class="info-title">Hobby's</h2>
        </v-col>
      </v-row>
      <v-row v-for="hobby in data.result.hobbies" :key="hobby.id">
        <v-col cols="2" class="pb-0">
          <v-icon class="personinfo-block-icon">{{ hobby.icon }}</v-icon>
        </v-col>
        <v-col cols="10" class="pb-0">
          {{ hobby.name }}
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
  const { data, pending, error, refresh } = await useFetch('/api/introductie')
</script>