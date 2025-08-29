<script setup lang="ts">
const route = useRoute()
</script>

<template>
	<header>
		<PublicNavBar />
	</header>
	<main class="flex flex-col items-center p-5 gap-10 animate-fade-in pt-36">
		<img src="/assets/logo.svg" width="100" height="100" alt="Logo" v-if="route.name !== 'index'" />
		<slot />
	</main>
</template>
