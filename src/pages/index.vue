<script setup lang="ts">
import { pb } from '@/backend';
import MaisonCard from '@/components/MaisonCard.vue'


import { allMaisonsFavori } from '@/backend'

const maisonsListe = await allMaisonsFavori()
</script>

<template>
  <h1 class="text-2xl">Seulement celles en favoris</h1>
  <MaisonCard -nom-maison="Maison" :prix="12*2"/>
  <MaisonCard v-bind="maisonsListe[0]"/>
  <MaisonCard v-for="uneMaison in maisonsListe" :key="uneMaison.nom" v-bind="uneMaison" />
  <MaisonCard v-for="uneMaison of maisonsListe" v-bind="uneMaison"/>
</template>
