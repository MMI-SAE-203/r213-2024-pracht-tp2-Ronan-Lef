<script setup lang="ts">
import { pb } from '@/backend';
import MaisonCard from '@/components/MaisonCard.vue'


import { allMaisonsSorted } from '@/backend'

const maisonsListe = await allMaisonsSorted()
</script>

<template>
  <h1 class="text-2xl">TOUTES LES OFFRES</h1>
  <!-- <MaisonCard v-bind="maisonsListe[0]"></MaisonCard>
  <MaisonCard v-bind="maisonsListe[1]"></MaisonCard> -->
  <MaisonCard v-for="maison in maisonsListe" v-bind="maison" :key="MaisonCard.nomMaison"></MaisonCard>
</template>
