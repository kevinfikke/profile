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
    
    <v-container v-for="(contentblock, index) in contentblocks" :key="index" class="info-block">
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
      <v-row v-for="education in educations" :key="education.id">
        <!-- {{ education }} -->
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

  </div>
</template>

<script setup>
const contentblocks = ref({
  personalInfo : [
    {id:0, icon: 'mdi-map-marker', name: 'Adres:', content: 'Haagdijk 137'},
    {id:1, icon: 'mdi-map-marker', name: 'Woonplaats:', content: 'Breda'},
    {id:2, icon: 'mdi-phone', name: 'Telefoon:', content: '06-52868327'},
    {id:3, icon: 'mdi-cake-variant', name: 'Geboortedatum:', content: '16-03-1992'},
    {id:4, icon: 'mdi-home', name: 'Gebooorteplaats:', content: 'Oosterhout'},
    {id:5, icon: 'mdi-account-supervisor-circle', name: 'Burgelijke staat:', content: 'Ongehuwd'},
    {id:6, icon: 'mdi-car', name: 'Rijbewijs:', content: 'Ja'},
    {id:7, icon: 'mdi-earth', name: 'Nationaliteit:', content: 'Nederlands'},
  ],
  contactInfo : [
    {id: 0, icon: 'mdi-phone', content: '06-52868327'},
    {id: 1, icon: 'mdi-email-outline', content: 'kevinfikke1@hotmail.com'},
    {id: 2, icon: 'mdi-linkedin', content: 'www.linkin.nl'},
    {id: 3, icon: 'mdi-map-marker', content: 'haagdijk 137 / Breda / Nederlands / 4811TR'},
  ]
})
const educations = ref([
  {id: 0, icon: 'mdi-school', name: 'Raduis college', content: 'programmeren', year: '2015 - 2018'},
  {id: 1, icon: 'mdi-school', name: 'Florijn college', content: 'administratie', year: '2008 - 2013'},
  {id: 2, icon: 'mdi-school', name: 'Dongemond college', content: 'middlebare / economie', year: '2004 - 2008'},
])
const hobbies = ref([
  {id: 0, icon: 'mdi-ocarina', name: 'Gaming'},
  {id: 1, icon: 'mdi-swim', name: 'Zwemmen'},
  {id: 2, icon: 'mdi-tent', name: 'Festivals'},
  {id: 3, icon: 'mdi-cards', name: 'Magic the gardering'},
])
</script>