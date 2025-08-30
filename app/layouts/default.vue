<script setup lang="ts"></script>

<template>
	<header>
		<PrivateNavBar />
	</header>
	<main class="flex justify-center items-center p-10 gap-24 animate-fade-in max-md:flex-col w-full">
		<section class="pt-36"><slot /></section>
	</main>
</template>

<style scoped></style>
