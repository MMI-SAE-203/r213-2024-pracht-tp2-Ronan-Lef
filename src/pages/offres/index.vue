<script setup lang="ts">
import { pb } from '@/backend';
import MaisonCard from '@/components/MaisonCard.vue'

const maisonsListe = await pb.collection('maison').getFullList({
  filter: 'favori = true',
})
console.log(maisonsListe);
</script>

<template>
  <h1 class="text-2xl">Toutes les offres</h1>
  <!-- <MaisonCard v-for="uneMaison of maisonsListe" v-bind="uneMaison"/> -->
  <ul>
<li v-for="uneMaison of maisonsListe"><RouterLink> :to="{name:'/offres/[id]', params:{id:{uneMaison.id}}">{{ uneMaison.nomMaison }}</RouterLink></li>
  </ul>
</template>
