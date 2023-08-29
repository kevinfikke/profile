<template>
  <div class="project-info-wrapper">
    <v-container>
      <v-row>
        <v-col>
          <v-breadcrumbs class="p-0" :items="items">
            <template v-slot:divider>
              <v-icon icon="mdi-chevron-right"></v-icon>
            </template>
          </v-breadcrumbs>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <h2>{{ props.data.project }}</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="8">
          <p class="project-content">{{ props.data.content }}</p>
        </v-col>
        <v-col cols="4">
          <ul>
            <v-row>
              <v-col v-for=" point in props.data.points" :key="point.id" cols="4">
                <li >{{ point.title }}</li>
              </v-col>
            </v-row>
          </ul>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <h2>Gallery</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <div class="slider-nav">
            <v-btn icon="mdi-arrow-left-thick" color="tertiary" size="small" elevation="0" :disabled="pos === 'start' ?  true : false" class="btn-prev-possibilities mr-10"></v-btn>
            <v-btn icon="mdi-arrow-right-thick" color="tertiary" size="small" elevation="0" :disabled="pos === 'end' ?  true : false" class="btn-next-possibilities"></v-btn>
          </div>
        </v-col>
        <v-col cols="12">
          <swiper
            :slides-per-view="2"
            :space-between="50"
            :modules="modules"
            class="mySwiper"
            :freeMode="true"
            :navigation="{
              nextEl: '.btn-next-possibilities',
              prevEl: '.btn-prev-possibilities'
            }"
            @slideChange="updateButtons($event)"
            @reachEnd="updateButtons($event)"
          >
            <swiper-slide v-for="image in props.data.sliderImages" :key="image.image">
              <v-img class="pa-5 d-flex flex-column justify-space-between mx-auto image" :src="image.image"></v-img>
            </swiper-slide>
          </swiper>
          
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { Navigation, Scrollbar, A11y, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
  // props
  const props = defineProps({
    data: Object
  })
  const items = ref(
    [
      {
        title: 'Home',
        disabled: false,
        href: '/',
      },
      {
        title: 'Project overview',
        disabled: false,
        href: '/projects',
      },
    ],
  )
  const modules = ref('')
  modules.value = [Navigation, Scrollbar, A11y, Autoplay]
  const pos = ref('start')
  function updateButtons (e) {
  if (e.isEnd && e.progress !== parseInt(-0)) {
    pos.value = 'end'
    return
  }
  if (e.isBeginning) {
    pos.value = 'start'
    return
  }
  pos.value = 'middle'
}
</script>

<style>
.swiper-wrapper{
  display: inline-flex!important;
}
</style>