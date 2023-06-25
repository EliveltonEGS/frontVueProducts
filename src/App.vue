<script setup>
// import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div>
        <nav>
            <RouterLink to="/categories">Categories</RouterLink>
            <!-- <RouterLink to="/about">About</RouterLink> -->
        </nav>

        <div>
            <RouterView />
        </div>
    </div>
</template>

<style scoped>
</style>
