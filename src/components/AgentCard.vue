<script setup lang="ts">
import { Collections, type AgentsResponse } from '@/pocketbase-types';
const props = defineProps<AgentsResponse>()
</script>
<template>
    <article class="border border-teal-500 rounded-lg w-fit p-4 m-2">
        <div class="flex gap-1">
            <h3>{{ prenom }}</h3>
            <p>{{ nom }}</p>
        </div>
        <div>
            <p>{{ telephone }}</p>
            <p>{{ email }}</p>
        </div>
    </article>
</template>