<template>
  <div class="projects-wrapper">
    <v-container>
      <v-row class="projects-search-block">
        <v-col>
          <v-text-field
            v-model="searchField"
            density="compact"
            variant="solo"
            label="Project zoeken..."
            append-inner-icon="fa fa-magnifying-glass"
            single-line
            hide-details
            @input="search()"
          ></v-text-field>
        </v-col>
      </v-row>
      <div v-for="(project, key) in projects" :key="key" class="projects-overview-block">
        <v-container v-if="key % 2 === 0" class="py-md-15 py-sm-10 py-5">
          <v-row>
            <v-col cols="7">
              <v-img class="image" :src="project.image1"></v-img>
            </v-col>
            <v-col cols="5">
              <h3>{{ project.project }}</h3>
              <p class="mt-5 projects-content">{{ project.content }}</p>
              <v-btn
                rounded="pill"
                class="mt-5"
              >
              <NuxtLink :to="('/project/' + project.id)">Lees meer</NuxtLink>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
        <v-container v-else fluid class="image-section-big px-0 py-md-15 py-sm-10 py-5">
          <v-row>
                <v-col cols="5">
                  <h3>{{ project.project }}</h3>
                  <p class="mt-5 projects-content">{{ project.content }}</p>
                  <v-btn
                    rounded="pill"
                    class="mt-5"
                  >
                  <NuxtLink :to="('/project/' + project.id)">Lees meer</NuxtLink>
                  </v-btn>
                </v-col>
                <v-col cols="7">
                  <v-img class="image" :src="project.image1"></v-img>
                </v-col>
              </v-row>
        </v-container>
      </div>
    </v-container>
  </div>
</template>

<script setup>
// props
const props = defineProps({
  data: Object
})
const projects = ref(props.data)
const backupProjects = ref(props.data)
const searchField = ref('')
const timer = ref(null)
const search = () => {
  clearTimeout(timer)
  timer.value = setTimeout(() => {
    projects.value = [];
    if(searchField.value !== ''){
      backupProjects.value.forEach(project => {
        if (project.project.toLowerCase().includes(searchField.value.toLowerCase())) {
          projects.value.push(project)
        }
      })
    }else{
      backupProjects.value.forEach(project => {
        projects.value.push(project)
      })
    }
  }, 750)
}
</script>