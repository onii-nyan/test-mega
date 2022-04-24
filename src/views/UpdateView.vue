<template>
  <q-page-container>
    <q-input class="q-pa-md" v-model="data.title" outlined label="Title" />
    <q-input class="q-pa-md" v-model="data.director" outlined label="Director" />
    <div class="q-pa-md" style="max-width: 300px">
        <q-input
          filled
          type="textarea"
          v-model="data.summary"
        />
      </div>
      <div class="q-gutter-xs q-pa-md">
        <q-chip v-model:selected="genreList.action" color="primary" text-color="white">
          Action
        </q-chip>
        <q-chip v-model:selected="genreList.animation" color="teal" text-color="white">
          Animation
        </q-chip>
        <q-chip v-model:selected="genreList.drama" color="orange" text-color="white">
          Drama
        </q-chip>
        <q-chip v-model:selected="genreList.romance" color="red" text-color="white">
          Romance
        </q-chip>
      </div>
      <div class="q-pa-md q-gutter-sm float-right">
        <q-btn color="primary"  label="Save" @click="storing()"/>
         <q-btn  color="red" @click="deleteData()" label="Delete"/>
         
      </div>
  </q-page-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props:['detail', 'id'],
  data(){
    return {
      genreList :{
        action: false,
        animation: false,
        drama: false,
        romance: false
      },
    }
  },
  computed:{

  },
  setup (props) {
    const data = JSON.parse(props.detail || localStorage.updateData)  

    return {
      data
    }
  },
  mounted(){
if(this.detail){
      localStorage.updateData=this.detail
    }
    this.selection()
  },
  methods:{
    ...mapActions(['editMovie', 'deleteMovie']),
    selection(){
      this.data.genres.forEach(genre=>{
        this.genreList[genre] = true 
      })
    },
    storing(){
      this.editMovie({
        ...this.data,
        genres : Object.keys(this.genreList).filter(key => {
        return this.genreList[key] === true
      },
      this.$router.push({path:'/'}))
      })
    },
  deleteData(){
    this.deleteMovie(this.data.id)
    this.$router.push({path:'/'})
  }
  }
}
</script>

<style>

</style>