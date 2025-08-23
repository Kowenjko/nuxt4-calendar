<script setup lang="ts"></script>

<template>
	<header>
		<SignedOut>
			<SignInButton />
		</SignedOut>
		<SignedIn>
			<UserButton afterSignOutUrl="/login" />
		</SignedIn>
	</header>
	<main>
		<slot />
	</main>
</template>

<style scoped></style>
