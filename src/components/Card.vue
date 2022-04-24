<template>
  <div class="flex-center">
    <router-link :to="{name:'update-view', params: {id:movieDetail.id, detail: JSON.stringify(movieDetail)}}">
    <q-card class="my-card q-ma-md">
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">{{movieDetail?.title}}</div>
        <div class="text-subtitle2">{{movieDetail?.director}}</div>
      </q-card-section>

      <q-separator />
      <q-card-actions align="right">
        <q-btn flat v-for="(genre, i) in movieDetail?.genres" :key="i">{{genre}}</q-btn>
      </q-card-actions>
    </q-card>
    </router-link>
  </div>
</template>

<style>
</style>

<script>
export default {
  name: 'CardComponent',
  props:['movieDetail']
}
</script>
