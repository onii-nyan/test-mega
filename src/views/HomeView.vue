<template>
    <q-page-container>
        <q-input class="q-pa-md" rounded outlined v-model="search" @keyup="searchData" label="Search title..." />
        <card v-for="movie in currentList" 
            :key="movie.id"
            :movieDetail="movie"
        />
            <q-page-sticky expand position="bottom-right" :offset="[18, 18]">
                <q-btn outline :to="{path:'/add'}" round color="primary" icon="add" />
            </q-page-sticky>
    </q-page-container>
</template>

<script>
import {mapState} from 'vuex'
import card from '../components/Card.vue'
export default {
    name:'HomeView',
    components:{
        card
    },
    data() {
        return {
            search:'',
            currentList:[]
        }
    },
    computed:{
      ...mapState(['movies']),
    },
    mounted(){
            this.currentList = this.movies
    },
    methods:{
        searchData(){
            if(this.search!=''){
                this.currentList = this.movies.filter(x => x.title.toLowerCase().includes(this.search.toLowerCase()));
            }
            else
            this.currentList = this.movies
        },
        
    },
}
</script>