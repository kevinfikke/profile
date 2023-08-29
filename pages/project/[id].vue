<template v-show="show">
  <div class="project-wrapper">
    <v-container class="pt-0">
      <v-row class="pt-0">
        <v-col cols="1"></v-col>
        <v-col cols="10" class="main-content-block mt-8 mb-5">
          <ProjectInfo :data="data.result"></ProjectInfo>
        </v-col>
        <v-col cols="1"></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
const show = ref(false)
const route = useRoute()
console.log(route.params.id)
const { data, pending, error, refresh } = await useFetch('/api/project/project', {
  method:"post",
  body: {id : route.params.id},
  onRequest({ request, options }) {
    // Set the request headers
    options.headers = options.headers || {}
    options.headers.authorization = '...'
  },
  onRequestError({ request, options, error }) {
    // Handle the request errors
  },
  onResponse({ request, response, options }) {
    console.log('welcome in return')
    console.log(response)
    show.value = true;
    // return response._data
  },
  onResponseError({ request, response, options }) {
    // Handle the response errors
  }
})
</script>
