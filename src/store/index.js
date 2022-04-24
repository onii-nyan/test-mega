import {createStore} from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
  })


const store = createStore({
    state: {
         movies:[
          {
            id:1,
            title: 'Frozen',
            director: 'Chris Buck, Jennifer Lee',
            summary: 'Anna sets out on a journey with an iceman, Kristoff, and his reindeer, Sven, in order to find her sister, Elsa, who has the power to convert any object or person into ice.',
            genres:["animation"]
          },
          {
            id:2,
            title: 'The Batman',
            director: 'Matt Reeves',
            summary: "Batman ventures into Gotham City's underworld when a sadistic killer leaves behind a trail of cryptic clues. As the evidence begins to lead closer to home and the scale of the perpetrator's plans become clear, he must forge new relationships, unmask the culprit and bring justice to the abuse of power and corruption that has long plagued the metropolis.",
            genres:["drama", "action"]
          },
         ]
    },
    mutations: {
        addMovie(state, movie){
            state.movies.push(movie)
        },
        resetMovies(state, movies){
          state.movies=movies
        }
    },
    actions: {
      async addMovie(ctx,movie){
        ctx.commit("addMovie", movie)
      },
      async editMovie(ctx,movie){
        const movies= ctx.state.movies
        const i = movies.findIndex(x=>
            x.id == movie.id
          )
        movies[i]=movie
        ctx.commit("resetMovies", movies)
      },
      async deleteMovie(ctx,id){
        const movies= [...ctx.state.movies]
        const i = movies.findIndex(x=>
          x.id == id
        )
        movies.splice(i,1)
        ctx.commit("resetMovies", movies)
      },
    },
    plugins: [vuexLocal.plugin]
  })

  export default store
