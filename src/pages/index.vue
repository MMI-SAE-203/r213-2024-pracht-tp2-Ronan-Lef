<script setup lang="ts">
const maisonsListe = {
    adresse: string;
    collectionId: string;
    collectionName: string;
    created: string;
    favori: boolean;
    id: string;
    images: string[];
    nbChambres: number;
    nbSdb: number;
    nomMaison: string;
    prix: number;
    surface: number;
    updated: string;
}[] = [
  {
    "adresse": "15 Chemin des Tuilleries, 77100 Mareuil-lès-Meaux ",
    "collectionId": "ayzbr1vp5ahlfdh",
    "collectionName": "Maisons",
    "created": "2024-04-12 08:50:29.381Z",
    "favori": true,
    "id": "knynw49rtlkd7c9",
    "images": [
      "maison2_tagescampagne_8zdeghZeQA.jpg"
    ],
    "nbChambres": 2,
    "nbSdb": 1,
    "nomMaison": "Maison 2 étages à la campagne",
    "prix": 360000,
    "surface": 90,
    "updated": "2024-04-12 09:44:06.058Z"
  },
  {
    "adresse": "1 Chemin du Feuillage",
    "collectionId": "ayzbr1vp5ahlfdh",
    "collectionName": "Maisons",
    "created": "2024-04-12 09:38:45.025Z",
    "favori": false,
    "id": "i1b48xc6u8q6q4g",
    "images": [
      "maisonpleinpied_he4LaKHxcH.JPG"
    ],
    "nbChambres": 3,
    "nbSdb": 2,
    "nomMaison": "Maison plein pied cadre calme",
    "prix": 415000,
    "surface": 117,
    "updated": "2024-04-12 09:38:45.025Z"
  },
  {
    "adresse": "2 Bis Avenue de la Fourmillière",
    "collectionId": "ayzbr1vp5ahlfdh",
    "collectionName": "Maisons",
    "created": "2024-04-12 09:40:14.971Z",
    "favori": false,
    "id": "fqsfs88oo7u4frc",
    "images": [
      "maisonville_Jgjs6X1K70.jpg"
    ],
    "nbChambres": 4,
    "nbSdb": 1,
    "nomMaison": "Maison de ville",
    "prix": 385200,
    "surface": 112,
    "updated": "2024-04-12 09:40:14.971Z"
  },
  {
    "adresse": "8 Rue de la Rivière",
    "collectionId": "ayzbr1vp5ahlfdh",
    "collectionName": "Maisons",
    "created": "2024-04-12 09:41:20.077Z",
    "favori": false,
    "id": "2muy094t5rofgxs",
    "images": [
      "maisonriviere_MPffuzG0B0.jpg"
    ],
    "nbChambres": 3,
    "nbSdb": 3,
    "nomMaison": "Maison bord de rivière, 1 étage",
    "prix": 390000,
    "surface": 86,
    "updated": "2024-04-12 09:41:20.077Z"
  },
  {
    "adresse": "17 Avenue Pablo Picasso",
    "collectionId": "ayzbr1vp5ahlfdh",
    "collectionName": "Maisons",
    "created": "2024-04-12 09:43:51.938Z",
    "favori": true,
    "id": "l78re15judwipb5",
    "images": [
      "maisonluxe_0nATEYn5m2.jpg"
    ],
    "nbChambres": 6,
    "nbSdb": 6,
    "nomMaison": "Maisonde Luxe 3 étages",
    "prix": 520000,
    "surface": 135,
    "updated": "2024-04-12 09:43:59.569Z"
  }
]
</script>

<template>
  <h1 class="text-2xl">Bonjour monde !</h1>
</template>
