<template>
  <q-page-container>
      <q-input class="q-pa-md" outlined v-model="title" label="Title" />
      <q-input class="q-pa-md" outlined v-model="director" label="Director" />
    <div class="q-pa-md" style="max-width: 300px">
        <q-input
        filled
        type="textarea"
        class="q-pa-md"
        v-model="summary"
        />
      </div>
      <div class="q-gutter-xs q-pa-md">
        <q-chip v-model:selected="genres.action" color="primary" text-color="white">
          Action
        </q-chip>
        <q-chip v-model:selected="genres.animation" color="teal" text-color="white">
          Animation
        </q-chip>
        <q-chip v-model:selected="genres.drama" color="orange" text-color="white">
          Drama
        </q-chip>
        <q-chip v-model:selected="genres.romance" color="red" text-color="white">
          Romance
        </q-chip>
      </div>
      <div class="q-pa-md q-gutter-sm float-right">
        <q-btn color="primary" label="Save" @click="storing()" :to="{path:'/'}"/>
      </div>
  </q-page-container>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data(){
    return {
      title:'', 
      director:'',
      summary:'',
      genres :{
        action: false,
        animation: false,
        drama: false,
        romance: false
      },
    }
  },
  methods:{
    ...mapActions(['addMovie']),
    storing(){
      this.addMovie({
      id : Date.now(),
      title : this.title ,
      director : this.director,
      summary : this.summary,
      genres : Object.keys(this.genres).filter(key => {
        return this.genres[key] === true
      })
      })
      // movies.join(localStorage)
    }
  },

  }

</script>

<style>

</style>