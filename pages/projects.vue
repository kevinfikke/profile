<template>
  <div class="project-wrapper">
    <v-container class="pt-0">
      <v-row class="pt-0">
        <v-col cols="1"></v-col>
        <v-col cols="10" class="main-content-block mt-8 mb-5">
          <OverviewBlock :data="data.result.projects"/>
        </v-col>
        <v-col cols="1"></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
  const { data, pending, error, refresh } = await useFetch('/api/project/projects')
</script>
