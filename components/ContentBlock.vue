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
    <v-container class="mt-15 py-0 profile-block">
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
          <h1>Experence</h1>
        </v-col>
        <v-col cols="12" v-for="job in jobs" :key="job.name" class="line-top pt-0 pb-6">
          <v-container>
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
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
const jobs = ref([
  {company: 'IC10', address: 'Brieltjenspolder 1c', year: '2019 - heden', position: 'Front-end developer', content: "<ul> <li>Aanmaken van verschillende vue 3 / vuetify 3 en nuxt 3 projecten.</li> <li>website / apps naarmaken van een ontwerp die ik heb gekregen.</li> <li>Een connectie maken met een website en een data levering partij via een api.</li> <li>wordpress website maken met divi elegant themes</li> <li>gewerkt met firebase en directus9</li></ul>"},
  {company: 'Albert Heijn', address: 'Arkendonk 53', year: '2008 - 2019', position: 'Vakkenvuller / magazijn', content: "<ul><li>vakkenvullen in de winkel.</li><li>laden / lossen vrachtwagens.</li><li>magazijn onderhouden</li></ul>"},
  {company: 'Rb-media', address: 'Overemer 8a', year: '2017(zomer) - 2018(zomer)', position: 'front- & back-end (stage)', content: '<li>Interview met de klant over hun wensen en ontwerp wat de klant wilt.</li><li>Project opstarten samen met mijn project leider.</li><li>Hun cms instellen voor de project.</li><li>Website maken die de data uit hun cms haalt.</li>'},
  {company: 'Basicdoors', address: '', year: '2016(Maart) - 2016(Juli)', position: 'front-end(stage)', content: '<ul><li>verschillende landings pagina van Magento</li><li>product info veranderen in Magento</li><li>actie slider maken in Magento</li></ul>'},
  {company: 'promese', address: 'Zoete inval 6', year: '2014(September) - 2015(Augustus)', position: 'Orderpicker', content: '<ul><li>orderpicker</li><li>magazijn voorraden bijhouden</li><li>laden / lossen. en op locatie zetten</li></ul>'},
  {company: 'Tence uitzendbureau', address: '', year: '2010 - 2010', position: 'credit / debit bureau', content: '<ul><li>Debit en credit invullen in Exact</li><li>Klantenbeheering bijwerken</li> </ul>'},
  {company: 'VSP krantenwijk', address: '', year: '2005 - 2008', position: 'krantenwijk', content: '<ul><li> kranten vouwen</li><li> kranten leveren</li></ul>'},
])
</script>