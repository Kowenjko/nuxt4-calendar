<script setup lang="ts"></script>

<template>
	<header>
		<PublicNavBar />
	</header>
	<main class="flex justify-center items-center p-10 gap-24 animate-fade-in max-md:flex-col">
		<section class="pt-36"><slot /></section>
	</main>
</template>

<style scoped></style>
